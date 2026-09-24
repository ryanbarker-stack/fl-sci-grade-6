/* Local browser recovery only. This is not a roster or the teacher's permanent crosswalk. */
(function(P){
 const prefix=P.config.storagePrefix+encodeURIComponent(location.pathname)+':';
 // Name/grade/period select the local draft. This is convenience, not authentication.
 const key=s=>prefix+'named:'+s.grade+':'+s.period+':'+encodeURIComponent(s.studentName.trim().normalize('NFKC').replace(/\s+/g,' ').toLocaleLowerCase('en'));
 const result=(ok,message,extra={})=>({ok,message,...extra});
 P.storage={
  save(s){if(!P.config.autosave)return result(false,'Autosave is off. Save a draft file before leaving.');try{localStorage.setItem(key(s),JSON.stringify(P.exporter.draft(s)));return result(true,'Saved on this device · use the same name, grade and period after refresh.');}catch(e){return result(false,'This browser cannot save answers. Use Save draft to file before leaving.');}},
  load(identity){if(!P.config.autosave)return result(false,'Autosave is off. Open your draft file to continue.');try{const raw=localStorage.getItem(key(identity));if(!raw)return result(true,'No saved answers found.',{state:null});return result(true,'Saved answers found.',{state:P.cleanImport(JSON.parse(raw))});}catch(e){return result(false,'Saved answers could not be opened. '+(e.message||'Use your draft file.'));}},
  remove(s){try{localStorage.removeItem(key(s));return result(true,'Saved copy removed.');}catch(e){return result(false,'Browser storage could not be cleared. Ask your teacher for help.');}},
  legacy(grade,period){try{const found=[];for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i);if(!k||!k.startsWith(prefix))continue;try{const raw=JSON.parse(localStorage.getItem(k));if(raw.schemaVersion==='2.0'&&raw.grade===grade&&raw.period===period)found.push({key:k,state:P.cleanImport(raw),savedAt:raw.exportedAt||'earlier'});}catch(e){/* Leave damaged older records untouched. */}}return result(true,'Older drafts checked.',{drafts:found});}catch(e){return result(false,'Browser recovery is unavailable. Open a downloaded draft instead.');}},
  clearAll(){try{const keys=[];for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i);if(k&&k.startsWith(prefix))keys.push(k);}keys.forEach(k=>localStorage.removeItem(k));return result(true,'Saved answers for this questionnaire were cleared from this browser.');}catch(e){return result(false,'Browser storage could not be cleared. Ask your teacher for help.');}}
 };
})(PD);
