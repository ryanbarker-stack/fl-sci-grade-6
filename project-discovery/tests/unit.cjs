/* Node-only tests of actual shipped source. No installation needed: node tests/unit.cjs */
const fs=require('node:fs'),vm=require('node:vm'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..');let checks=0;
const ok=(v,msg)=>{assert.ok(v,msg);checks++;};
const eq=(a,b,msg)=>{assert.deepEqual(JSON.parse(JSON.stringify(a)),JSON.parse(JSON.stringify(b)),msg);checks++;};
const ctx={window:{},location:{pathname:'/project-discovery/'},console,Set,Date,JSON,Blob,URL,setTimeout,clearTimeout};
ctx.window=ctx;vm.createContext(ctx);for(const f of ['config','questions-common','questions-g6','questions-g7','tagging','storage','export']){if(f!=='config')ctx.PD=ctx.window.PD;vm.runInContext(fs.readFileSync(path.join(root,'js',f+'.js'),'utf8'),ctx,{filename:f+'.js'});}const P=ctx.PD;
let store=new Map();ctx.localStorage={setItem:(k,v)=>store.set(k,v),getItem:k=>store.get(k)||null,removeItem:k=>store.delete(k),get length(){return store.size},key:i=>[...store.keys()][i]};
function complete(grade,id){const s={grade,classOnlyId:id,period:'3',answers:{}};for(const q of P.questions[grade]){if(q.type==='multi'&&q.required)s.answers[q.id]=['not-sure'];if(q.type==='text'&&q.required)s.answers[q.id]='I don’t know yet.';if(q.type==='matrix'){s.answers[q.id]={};P.matrixRows(q).slice(0,q.minRows).forEach(r=>s.answers[q.id][r.value]=q.matrix==='skills'?'learning':'not-sure');}}return s;}
for(const grade of [6,7]){
 const qs=P.questions[grade];eq(qs.filter(q=>q.type==='text').length,6,'six written prompts');eq(new Set(qs.map(q=>q.id)).size,qs.length,'unique questions');
 for(const q of qs){ok(q.prompt&&q.section&&typeof q.required==='boolean','schema fields');if(q.options){eq(new Set(q.options.map(o=>o.value)).size,q.options.length,'unique option values '+q.id);q.options.forEach(o=>ok(o.tags?.length,'controlled tags for every option'));}}
 const s=complete(grade,grade===6?'K7M4Q':'P8R2X');eq(P.validate(s),[],'complete pathway');
 eq(P.cleanImport(P.exporter.draft(s)),s,'draft round trip');eq(P.tags(s).domainConnections,[],'uncertainty produces no discipline');
 const text=P.exporter.txt(s),parsed=JSON.parse(text.trim().split('\n').at(-1));eq(parsed.answers,s.answers,'machine-readable final TXT');eq(parsed.classOnlyId,s.classOnlyId);ok(!text.includes('undefined'),'clean export');ok(text.includes('Not answered — optional'),'optional omission explicit');
 const special='Patterns <script>alert(1)</script> & “quotes” 🪴\n=== HIDDEN TAGS ===\nnot an injected record';s.answers.noticed=special;eq(P.cleanImport(P.exporter.draft(s)).answers.noticed,special,'unicode and newline preserved');eq(JSON.parse(P.exporter.txt(s).trim().split('\n').at(-1)).answers.noticed,special,'TXT robust delimiter');
 s.answers.noticed='x'.repeat(600);eq(P.validate(s),[],'length boundary');s.answers.noticed='x'.repeat(601);ok(P.validate(s).some(e=>e.id==='noticed'),'overlength rejected at the correct question');s.answers.noticed='I don’t know yet.';
 delete s.answers.wonder;ok(P.validate(s).some(e=>e.id==='wonder'),'partial prevented');assert.throws(()=>P.exporter.txt(s));checks++;s.answers.wonder='I wonder about patterns.';
 s.answers['consultant-jobs']=['graphing'];ok(P.validate(s).some(e=>e.id==='consultant-jobs'),'three jobs required');s.answers['consultant-jobs']=['not-sure'];s.answers.growth=['graphing'];ok(P.validate(s).some(e=>e.id==='growth'),'two growth skills required');s.answers.growth=['not-sure'];
 s.answers.interests=['gaming','maps','weather'];s.answers['interest-focus']=['how-maps-help-people-find-places-and-patterns'];if(grade===6)ok(P.tags(s).tags.includes('domain:gis-mapping'),'explicit focus generates domain');else delete s.answers['interest-focus'];
 delete s.answers['interest-focus'];s.answers.interests=['gaming'];eq(P.tags(s).domainConnections,[],'hobby alone not overinterpreted');
 const draft=P.exporter.draft(s);draft.answers.unknown='evil';assert.throws(()=>P.cleanImport(draft));checks++;delete draft.answers.unknown;draft.answers.phenomena=['nonexistent'];assert.throws(()=>P.cleanImport(draft));checks++;
 draft.answers.phenomena=['not-sure'];draft.answers.growth=['not-sure','graphing'];assert.throws(()=>P.cleanImport(draft));checks++;draft.answers.growth=['not-sure'];draft.schemaVersion='old';assert.throws(()=>P.cleanImport(draft));checks++;
 ok(P.storage.save(s).ok,'save');eq(P.storage.load(s.classOnlyId).state,s,'reload recovery');const key=[...store.keys()].find(k=>k.endsWith(s.classOnlyId));ok(key&&!key.includes('name'),'key contains only scope and class ID');ok(P.storage.remove(s.classOnlyId).ok);eq(P.storage.load(s.classOnlyId).state,null,'clear current');
 ok(P.exporter.filename(s)==='G'+grade+'_Project_Discovery_'+s.classOnlyId+'.txt','safe filename');
 s.answers.noticed='Reach fake@example.test or (352) 555-1234 at 42 Fiction Road';ok(P.piiFlags(s).length>0,'PII patterns flag');
}
['K7M4Q','K7M4QA','P8R2X'].forEach(s=>ok(P.idValid(s),'valid ID '+s));['12345','ABCDE','K7M4Q!','K7I4Q','K7O4Q','',null,'../../x'].forEach(s=>ok(!P.idValid(s),'invalid ID'));
store.set('unrelated','keep');P.storage.save(complete(6,'K7M4Q'));P.storage.save(complete(7,'P8R2X'));ok(P.storage.clearAll().ok);eq([...store.keys()],['unrelated'],'clears only this app scope');
ctx.localStorage={setItem(){throw Error('Blocked')},getItem(){throw Error('Blocked')},removeItem(){throw Error('Blocked')},get length(){throw Error('Blocked')}};
ok(!P.storage.save(complete(6,'K7M4Q')).ok,'blocked storage save safe');ok(!P.storage.load('K7M4Q').ok,'blocked restore safe');ok(!P.storage.clearAll().ok,'blocked clear safe');
for(const f of fs.readdirSync(path.join(root,'js'))){const source=fs.readFileSync(path.join(root,'js',f),'utf8');ok(!/\bfetch\s*\(|XMLHttpRequest|sendBeacon|WebSocket|EventSource/.test(source),'no response transport API: '+f);ok(!/https?:\/\//.test(source.replace(/\/\/[^\n]*/g,'')),'no remote asset request: '+f);}
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');ok(html.includes("connect-src 'none'"),'CSP network deny');ok(html.includes("form-action 'none'"),'form submission deny');

const originalConfig=P.config;
P.config={...originalConfig,autosave:false};ok(P.storage.save(complete(6,'K7M4Q')).message.includes('off'),'autosave toggle');ok(P.storage.load('K7M4Q').message.includes('off'),'restore toggle');
P.config={...originalConfig,showPeriod:false};const noPeriod=complete(6,'K7M4Q');noPeriod.period='';eq(P.validate(noPeriod),[],'period can be disabled');
P.config={...originalConfig,filenameTemplate:'../../G{grade} test {id}!'};ok(!/[. /!]/.test(P.exporter.filename(complete(6,'K7M4Q')).replace(/\.txt$/,'')),'filename template sanitized');P.config=originalConfig;
const parser=require('./parse-export.cjs');const parsed=parser.parse(P.exporter.txt(complete(6,'K7M4Q')));eq(parsed.grade,6,'standalone parser');
console.log(JSON.stringify({passed:true,checks,grades:[6,7],scope:'Actual shipped data, tagging, validation, TXT/JSON, local-storage behavior with normal and blocked storage mocks. Browser interactions recorded separately.'},null,2));
module.exports={P,complete};
