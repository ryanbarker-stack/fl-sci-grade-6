/* Local only. No roster, list of IDs, server calls, cookies, or automatic name lookup. */
(function(P){
 const prefix=P.config.storagePrefix+encodeURIComponent(location.pathname)+':';
 const key=id=>prefix+id;
 const result=(ok,message,extra={})=>({ok,message,...extra});
 P.storage={
  save(s){if(!P.config.autosave)return result(false,'Autosave is off. Save a draft file before leaving.');try{localStorage.setItem(key(s.classOnlyId),JSON.stringify(P.exporter.draft(s)));return result(true,'Saved on this device · enter the same ID to recover after refresh.');}catch(e){return result(false,'This browser cannot save answers. Use Save draft to file before leaving.');}},
  load(id){if(!P.config.autosave)return result(false,'Autosave is off. Open your draft file to continue.');try{const raw=localStorage.getItem(key(id));if(!raw)return result(true,'No saved answers for this ID.',{state:null});return result(true,'Saved answers found.',{state:P.cleanImport(JSON.parse(raw))});}catch(e){return result(false,'Saved answers could not be opened. '+(e.message||'Use your draft file.'));}},
  remove(id){try{localStorage.removeItem(key(id));return result(true,'Saved copy removed.');}catch(e){return result(false,'Browser storage could not be cleared. Ask your teacher for help.');}},
  clearAll(){try{const keys=[];for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i);if(k&&k.startsWith(prefix))keys.push(k);}keys.forEach(k=>localStorage.removeItem(k));return result(true,'Saved answers for this questionnaire were cleared from this browser.');}catch(e){return result(false,'Browser storage could not be cleared. Ask your teacher for help.');}}
 };
})(PD);
