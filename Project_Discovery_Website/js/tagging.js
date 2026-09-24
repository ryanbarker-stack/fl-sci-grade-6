/* Deterministic, inspectable connections. No personality scores or raw-text inference. */
(function(P){
  const own=(o,k)=>Object.prototype.hasOwnProperty.call(o,k);
  P.nameValid=name=>typeof name==='string'&&name.trim().length>0&&name.length<=P.config.maxNameLength&&!/[\u0000-\u001f\u007f]/.test(name);
  P.matrixRows=q=>q.matrix==='skills'?P.common.skills:P.common.methodRows;
  P.matrixLevels=q=>q.matrix==='skills'?P.common.skillLevels:P.common.methodLevels;
  P.visibleOptions=(q,a)=>q.options.filter(o=>!o.whenAny||o.whenAny.some(v=>(a.interests||[]).includes(v)));
  P.isVisible=(q,a)=>!q.conditionalOn||(Array.isArray(a[q.conditionalOn])&&a[q.conditionalOn].some(v=>v!=='not-sure'));
  P.answerError=function(q,a){
    if(!P.isVisible(q,a))return '';
    const v=a[q.id];
    if(q.type==='text'){
      if(v!==undefined&&typeof v!=='string')return 'This written answer is not readable.';
      if(v&&v.length>P.config.maxResponseLength)return 'Shorten this answer to '+P.config.maxResponseLength+' characters or fewer.';
      return q.required&&(!v||!v.trim())?'Write a short answer, or choose “I don’t know yet.”':'';
    }
    if(q.type==='matrix'){
      if(v!==undefined&&(!v||typeof v!=='object'||Array.isArray(v)))return 'Choose a valid rating for each row.';
      if(Object.entries(v||{}).some(([key,rating])=>!P.matrixRows(q).some(r=>r.value===key)||!P.matrixLevels(q).some(l=>l.value===rating)))return 'A rating is not valid. Choose from the displayed scale.';
      return q.required&&Object.keys(v||{}).length<q.minRows?`Rate ${q.minRows} ${q.minRows===21?'skills (one per row)':'methods'}. ${Object.keys(v||{}).length} answered so far.`:'';
    }
    if(v!==undefined&&!Array.isArray(v))return 'Choose answers from the displayed options.';
    if(!v||!v.length)return q.required?'Choose an answer, including “Not sure yet” if you wish.':'';
    if(new Set(v).size!==v.length||v.some(code=>!P.visibleOptions(q,a).some(o=>o.value===code)))return 'A selected option is not valid. Choose from the displayed options.';
    if(v.includes('not-sure'))return v.length===1?'':'Use “Not sure yet” by itself.';
    if(v.length>q.max)return `Choose no more than ${q.max}.`;
    if(q.required&&v.length<q.min)return `Choose ${q.min===q.max?q.min:q.min+'–'+q.max}, or “Not sure yet.”`;
    return '';
  };
  P.validate=function(s){
    const errors=[];
    if(!s||!P.questions[s.grade]||!P.nameValid(s.studentName))return [{id:'identity',message:'Enter your full name and check your grade.'}];
    if(!s.answers||typeof s.answers!=='object'||Array.isArray(s.answers))return [{id:'identity',message:'The answer record is not readable.'}];
    if(P.config.showPeriod&&P.config.periodRequired&&!P.config.periods.includes(s.period))errors.push({id:'identity',message:'Choose your class period.'});
    P.questions[s.grade].forEach(q=>{const e=P.answerError(q,s.answers);if(e)errors.push({id:q.id,message:e});});
    if(errors.length)return errors;
    try{P.cleanImport({app:'IACA_PROJECT_DISCOVERY',kind:'draft',schemaVersion:P.config.schemaVersion,questionnaireVersion:P.config.questionnaireVersion,...s});}catch(e){return [{id:'identity',message:e.message}];}
    return errors;
  };
  P.cleanImport=function(raw){
    if(!raw||typeof raw!=='object'||Array.isArray(raw)||raw.app!=='IACA_PROJECT_DISCOVERY'||raw.kind!=='draft')throw Error('This is not a Project Discovery draft. Open the file ending in _DRAFT.json.');
    const legacy=raw.schemaVersion==='2.0'&&raw.questionnaireVersion==='IACA-PD-2.0';
    if((raw.schemaVersion!==P.config.schemaVersion&&!legacy)||raw.questionnaireVersion!==P.config.questionnaireVersion)throw Error('This draft uses a different questionnaire version. Keep the file and ask your teacher for the matching website.');
    if(![6,7].includes(raw.grade)||(!legacy&&!P.nameValid(raw.studentName)))throw Error('This draft has an invalid grade or missing full name.');
    if(typeof raw.period!=='string'||(raw.period&&!P.config.periods.includes(raw.period)))throw Error('This draft has a period not offered on this website. Ask your teacher for help.');
    if(!raw.answers||typeof raw.answers!=='object'||Array.isArray(raw.answers))throw Error('The draft answers are damaged.');
    const qs=P.questions[raw.grade], allowed=new Set(qs.map(q=>q.id)), a={};
    for(const key of Object.keys(raw.answers))if(!allowed.has(key))throw Error('The draft contains an unknown question. Nothing was imported.');
    for(const q of qs){
      if(!own(raw.answers,q.id))continue;const v=raw.answers[q.id];
      if(q.type==='text'){if(typeof v!=='string'||v.length>P.config.maxResponseLength)throw Error('A written answer is invalid or too long. Nothing was imported.');a[q.id]=v;}
      if(q.type==='multi'){if(!Array.isArray(v)||v.length>q.max||new Set(v).size!==v.length||v.some(x=>typeof x!=='string'||!q.options.some(o=>o.value===x))||(v.includes('not-sure')&&v.length>1))throw Error('A selection in the draft is invalid.');a[q.id]=v.slice();}
      if(q.type==='matrix'){if(!v||typeof v!=='object'||Array.isArray(v))throw Error('A rating in the draft is invalid.');const vals=P.matrixLevels(q).map(x=>x.value);a[q.id]={};for(const [k,r] of Object.entries(v)){if(!P.matrixRows(q).some(x=>x.value===k)||!vals.includes(r))throw Error('A rating in the draft is invalid.');a[q.id][k]=r;}}
    }
    for(const q of qs.filter(q=>q.conditionalOn)){if(!P.isVisible(q,a)){delete a[q.id];continue;}if((a[q.id]||[]).some(v=>!P.visibleOptions(q,a).some(o=>o.value===v)))throw Error('The draft contains a follow-up that does not match its interests.');}
    return {grade:raw.grade,studentName:legacy?'':raw.studentName.trim(),period:raw.period,answers:a,...(legacy?{needsName:true}:{})};
  };
  P.tags=function(s){
    const set=new Set(), evidence={}, domains={}, a=s.answers;
    function add(tag,q,choice){set.add(tag);(evidence[tag]||=[]).push({question:q.id,choice});if(tag.startsWith('domain:')){const d=tag.slice(7);(domains[d]||=new Set()).add(q.id);}}
    for(const q of P.questions[s.grade]){
      if(!P.isVisible(q,a))continue;
      if(q.type==='multi')for(const code of a[q.id]||[]){const o=P.visibleOptions(q,a).find(o=>o.value===code);if(o)(o.tags||[]).forEach(t=>add(t,q,o.label));}
      if(q.type==='matrix')for(const [code,rating] of Object.entries(a[q.id]||{})){
        const row=P.matrixRows(q).find(r=>r.value===code);if(!row)continue;
        if(q.matrix==='methods'&&['excited','open'].includes(rating))row.tags.forEach(t=>add(t,q,row.label+' — '+rating));
        if(q.matrix==='skills'){
          add('skill-level:'+rating+':'+code,q,row.label+' — '+rating);
          if(rating==='strong'||rating==='comfortable')add('consultant-strength:'+code,q,row.label+' — '+rating);
          if(rating==='want-to-learn')add('growth:'+code,q,row.label+' — '+rating);
        }
      }
    }
    const connections=Object.entries(domains).map(([domain,qs])=>({domain,supportingQuestionIds:[...qs],basis:'Selected science phenomenon, environment, problem, or explicit interest follow-up; possibility to explore, not aptitude.'}));
    const tentative=[];
    const has=t=>set.has(t), interest=v=>(a.interests||[]).includes(v);
    if(s.grade===6&&interest('gaming')&&interest('maps')&&(has('domain:meteorology')||has('domain:climatology')))tentative.push({domains:['gis-mapping','meteorology'],idea:'Explore how maps or simple simulations show weather patterns.',basis:'Gaming + maps + a selected weather/climate connection.',status:'teacher-review-hypothesis'});
    if(s.grade===7&&interest('drawing-art')&&interest('fashion-sneakers-design')&&has('domain:evolution'))tentative.push({domains:['evolution','zoology'],idea:'Compare visual patterns in documented camouflage examples.',basis:'Art/design interests + a selected evolution connection.',status:'teacher-review-hypothesis'});
    if(s.grade===7&&interest('cooking-baking')&&has('domain:microbiology'))tentative.push({domains:['microbiology'],idea:'Investigate a teacher-approved model or dataset about yeast and food.',basis:'Baking interest + a selected microbiology connection; no unknown cultures.',status:'teacher-review-hypothesis'});
    return {tags:[...set].sort(),domainConnections:connections.sort((a,b)=>a.domain.localeCompare(b.domain)),tagEvidence:evidence,tentativeBridges:tentative,openResponseInterpretation:'Not inferred automatically. Teacher review required before AI use.'};
  };
  P.piiFlags=function(s){
    const flags=[];
    for(const q of P.questions[s.grade].filter(q=>q.type==='text')){
      const t=s.answers[q.id]||'';const reasons=[];
      if(/[\w.+-]+@[\w.-]+\.[a-z]{2,}/i.test(t))reasons.push('an email address');
      if(/(?:\+?\d[\d().\s-]{7,}\d)/.test(t))reasons.push('a long number or phone number');
      if(/(?:https?:\/\/|www\.|@[A-Za-z0-9_]{2,})/i.test(t))reasons.push('a web link or account name');
      if(/\b\d+\s+[A-Za-z]+(?:\s+[A-Za-z]+){0,3}\s+(?:street|st|road|rd|avenue|ave|lane|ln|drive|dr)\b/i.test(t))reasons.push('a possible address');
      if(reasons.length)flags.push({questionId:q.id,message:'Please check for '+reasons.join(', ')+'. Remove personal details.'});
    }return flags;
  };
})(PD);
