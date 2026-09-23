/* Optional developer DOM tests. Requires jsdom 26.1.0; the website does not.
   Run: node tests/dom.cjs (with jsdom installed in your QA environment).
   This executes shipped UI handlers; layout and native file pickers are not simulated as real browsers. */
const {JSDOM}=require(process.env.PD_JSDOM_PATH||'jsdom');
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..');let checks=0;const results=[];
const ok=(v,m)=>{assert.ok(v,m);checks++;};
const tick=()=>new Promise(r=>setImmediate(r));
function create(blocked=false){
 const dom=new JSDOM(fs.readFileSync(path.join(root,'index.html'),'utf8'),{url:'https://example.test/project-discovery/',runScripts:'outside-only',pretendToBeVisual:true});const w=dom.window,d=w.document,downloads=[],tools={},attempts=[];
 w.matchMedia=()=>({matches:true});w.scrollTo=()=>{};w.HTMLElement.prototype.scrollIntoView=function(){w.scrolledTo=this.id;};w.IntersectionObserver=class{observe(){}disconnect(){}};
 w.HTMLDialogElement.prototype.showModal=function(){this.setAttribute('open','')};w.HTMLDialogElement.prototype.close=function(){this.removeAttribute('open')};
 w.fetch=(...a)=>{attempts.push(a);throw Error('Unexpected network')};w.XMLHttpRequest=class{constructor(){attempts.push('XHR');throw Error('Unexpected network')}};w.WebSocket=class{constructor(){attempts.push('socket');throw Error('Unexpected network')}};w.navigator.sendBeacon=(...a)=>{attempts.push(a);return false;};
 d.modelContext={registerTool(t){tools[t.name]=t;}};
 if(blocked)Object.defineProperty(w,'localStorage',{get(){throw Error('Storage blocked')}});
 for(const f of ['config','questions-common','questions-g6','questions-g7','tagging','storage','export','app'])w.eval(fs.readFileSync(path.join(root,'js',f+'.js'),'utf8'));
 w.PD.exporter.download=(content,name,type)=>downloads.push({content,name,type});
 const $=id=>d.getElementById(id);
 const input=(id,val)=>{$(id).value=val;$(id).dispatchEvent(new w.Event('input',{bubbles:true}));};
 const clickText=t=>{const b=[...d.querySelectorAll('button')].find(n=>n.textContent===t);assert.ok(b,'button '+t);b.click();};
 return {dom,w,d,$,input,clickText,downloads,tools,attempts};
}
async function start(x,grade,id){x.d.querySelector('[data-grade="'+grade+'"]').click();x.$('class-id').value=id;x.$('period').value='3';x.$('start-form').dispatchEvent(new x.w.Event('submit',{bubbles:true,cancelable:true}));await tick();}
async function importDraft(x,record){const input=x.$('draft-input');const text=JSON.stringify(record);Object.defineProperty(input,'files',{value:[{size:text.length,text:async()=>text}],configurable:true});input.dispatchEvent(new x.w.Event('change',{bubbles:true}));await tick();}
(async()=>{
 for(const grade of [6,7]){
  const x=create(),{w,d,$}=x,P=w.PD;assert.throws(()=>x.tools.navigate_discovery_section.execute({section:'A'}));checks++;
  await start(x,grade,'INVALID');ok($('start-error').textContent.includes('Check your ID'),'invalid ID blocked');await start(x,grade,grade===6?'k7m4q':'p8r2x');ok(!$('workspace').hidden,'path starts');ok($('identity-badge').textContent.includes(grade===6?'K7M4Q':'P8R2X'),'ID normalized');
  ok($('download-final').disabled,'partial final disabled');ok(new Set([...d.querySelectorAll('[id]')].map(n=>n.id)).size===d.querySelectorAll('[id]').length,'unique DOM IDs');
  const phen=P.questions[grade].find(q=>q.id==='phenomena');for(const option of phen.options.slice(0,4))$(phen.id+'--'+option.value).click();$(phen.id+'--'+phen.options[4].value).click();ok(!$(phen.id+'--'+phen.options[4].value).checked,'max cards enforced');ok($('error-phenomena').textContent.includes('up to 4'),'selection guidance');$('phenomena--not-sure').click();ok(d.querySelectorAll('#q-phenomena input:checked').length===1,'uncertainty exclusive');
  x.input('input-noticed','<script>unsafe()</script> & 🪴\nsecond line');ok(!d.querySelector('#section-review script'),'writing shown as text');x.clickText('Save draft to file');const partial=JSON.parse(x.downloads.at(-1).content);ok(partial.kind==='draft'&&partial.answers.noticed.includes('🪴'),'partial draft captures data');
  for(const q of P.questions[grade]){
   if(q.type==='multi'&&q.required&&!d.querySelector('#q-'+q.id+' input:checked'))$(q.id+'--not-sure').click();
   if(q.type==='text'&&q.required&&!$('input-'+q.id).value)x.input('input-'+q.id,'I don’t know yet.');
   if(q.type==='matrix')for(const row of P.matrixRows(q).slice(0,q.minRows))$(q.id+'--'+row.value+'--'+(q.matrix==='skills'?'learning':'not-sure')).click();
  }
  ok($('progress').value===100,'complete required path');ok($('download-final').disabled,'review required');$('confirm-id').click();$('confirm-review').click();ok(!$('download-final').disabled,'review enables final');
  x.input('input-noticed','New evidence & <b>not HTML</b>\nline 2');ok($('download-final').disabled&&!$('confirm-id').checked,'editing resets attestations');
  x.input('input-keep-going','x'.repeat(601));ok($('section-review').textContent.includes('Shorten this answer to 600'),'long-answer guidance');ok($('download-final').disabled,'overlong export blocked');x.input('input-keep-going','');
  $('confirm-id').click();$('confirm-review').click();$('download-final').click();const one=x.downloads.at(-1);ok(one.name.endsWith('.txt'),'TXT name');const r=JSON.parse(one.content.trim().split('\n').at(-1));ok(r.grade===grade&&r.answers.noticed.includes('line 2'),'final contains latest responses');ok(!$('finish').hidden,'Classroom finish visible');x.clickText('Download .txt again');ok(x.downloads.at(-1).name===one.name,'repeat downloads same safe name');
  x.clickText('Clear saved copy after checking my file');ok(!$('confirm-dialog').hasAttribute('open'),'clear requires finding file');$('finish-check-0').click();x.clickText('Clear saved copy after checking my file');x.clickText('Clear saved copy and finish');await tick();ok($('workspace').hidden&&w.localStorage.length===0,'confirmed clear removes state and saved copy');x.clickText('Return to the opening screen');
  await importDraft(x,partial);ok($('confirm-dialog').textContent.includes(partial.classOnlyId),'draft preview identifies ID');x.clickText('This is my draft — open it');await tick();ok($('input-noticed').value===partial.answers.noticed,'file import restores writing');ok($('download-final').disabled,'partial imported draft remains partial');
  const saved=JSON.parse(w.localStorage.getItem(w.localStorage.key(0)));ok(saved.classOnlyId===partial.classOnlyId,'import autosaves under ID only');
  const bad={...partial,questionnaireVersion:'OLD'};await importDraft(x,bad);ok($('status').textContent.includes('different questionnaire version'),'wrong-version draft rejected');ok($('input-noticed').value===partial.answers.noticed,'bad import leaves active answers intact');
  x.tools.navigate_discovery_section.execute({section:'K'});ok(w.scrolledTo==='section-K','navigation adapter shares UI');assert.throws(()=>x.tools.navigate_discovery_section.execute({section:'secret'}));checks++;ok(w.scrolledTo==='section-K','invalid adapter input no effect');
  x.clickText('Change ID or grade');ok($('confirm-dialog').textContent.includes('closes the current questionnaire'),'grade warning');x.clickText('Keep working');await tick();ok(!$('workspace').hidden,'cancel preserves questionnaire');
  x.clickText('Clear this device’s saved answers');x.clickText('Clear saved answers');await tick();ok($('workspace').hidden&&w.localStorage.length===0,'clear-all removes app drafts');ok(x.attempts.length===0,'no response transport calls');
  results.push({grade,passed:true,downloads:x.downloads.length});x.dom.window.close();
 }
 const x=create(true);await start(x,6,'T8R2V');ok(x.$('confirm-dialog').textContent.includes('unavailable'),'blocked storage explained');x.clickText('Continue with new answers');await tick();ok(x.$('save-state').textContent.includes('cannot save'),'blocked storage status');x.input('input-noticed','A plant leans.');x.clickText('Save draft to file');ok(JSON.parse(x.downloads.at(-1).content).answers.noticed==='A plant leans.','draft works without storage');x.dom.window.close();
 console.log(JSON.stringify({passed:true,checks,results,scope:'Actual shipped app.js event handlers in jsdom. Native file picker and layout are not represented. Browser TXT downloads checked separately.'},null,2));
})().catch(e=>{console.error(e);process.exitCode=1;});
