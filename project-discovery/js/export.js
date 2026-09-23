/* UTF-8 TXT is the Classroom submission. JSON drafts can be imported locally. */
(function(P){
 const stamp=()=>new Date().toISOString();
 const meta=(s,kind)=>({app:'IACA_PROJECT_DISCOVERY',kind,schemaVersion:P.config.schemaVersion,questionnaireVersion:P.config.questionnaireVersion,exportedAt:stamp(),classOnlyId:s.classOnlyId,grade:s.grade,period:s.period,answers:JSON.parse(JSON.stringify(s.answers))});
 function labelAnswer(q,a){const v=a[q.id];if(q.type==='text')return v&&v.trim()?v:'[Not answered — optional]';if(q.type==='multi')return (v||[]).map(code=>q.options.find(o=>o.value===code)?.label||code).join('; ')||'[Not answered — optional]';return P.matrixRows(q).map(r=>r.label+': '+(P.matrixLevels(q).find(l=>l.value===(v||{})[r.value])?.label||'Not rated')).join('\n');}
 function submission(s){const e=P.validate(s);if(e.length)throw Error('Complete the required questions before creating a submission.');return {...meta(s,'submission'),...P.tags(s),freeTextReviewStatus:'TEACHER_REVIEW_REQUIRED',directIdentifierCheck:'Student confirmed ID and reviewed for personal details; not a guarantee of de-identification.'};}
 function txt(s){const data=submission(s);const lines=['PROJECT DISCOVERY QUESTIONNAIRE','Class-Only ID: '+s.classOnlyId,'Grade: '+s.grade,'Period: '+(s.period||'Not used'),'Questionnaire version: '+data.questionnaireVersion,'Schema version: '+data.schemaVersion,'Exported at (UTC): '+data.exportedAt,'Status: COMPLETE','Privacy: Pseudonymous. Written responses require teacher review before AI use.',''];
 for(const sec of P.common.sections){lines.push('=== '+sec.id+' — '+sec.title.toUpperCase()+' ===');for(const q of P.questions[s.grade].filter(q=>q.section===sec.id&&P.isVisible(q,s.answers))){lines.push('Question ['+q.id+']: '+q.prompt);for(const row of labelAnswer(q,s.answers).split('\n'))lines.push('> '+row);lines.push('');}}
 lines.push('=== HIDDEN TAGS — TEACHER USE ===',...data.tags,'','=== POSSIBLE SCIENCE CONNECTIONS — NOT SCORES ===',...data.domainConnections.map(c=>c.domain+' | evidence questions: '+c.supportingQuestionIds.join(', ')),'','=== TENTATIVE BRIDGES — REVIEW BEFORE USE ===',...data.tentativeBridges.map(b=>b.idea+' Basis: '+b.basis),'','=== MACHINE-READABLE RECORD ===','The last line is a complete JSON record. Parse it with JSON.parse; do not execute it.',JSON.stringify(data));return lines.join('\n')+'\n';}
 P.exporter={
  draft:s=>meta(s,'draft'),submission,txt,labelAnswer,
  filename(s,kind='txt'){const base=P.config.filenameTemplate.replaceAll('{grade}',String(s.grade)).replaceAll('{id}',s.classOnlyId).replace(/[^A-Za-z0-9_-]/g,'_').slice(0,100);return base+(kind==='draft'?'_DRAFT.json':'.'+kind);},
  download(content,name,type){const blob=new Blob([content],{type:type+';charset=utf-8'}),url=URL.createObjectURL(blob);const link=document.createElement('a');link.href=url;link.download=name;document.body.appendChild(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),30000);}
 };
})(PD);
