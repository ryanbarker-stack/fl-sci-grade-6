/* TEACHER SETTINGS: edit this file before launch. Keep ID format stable during a collection. */
window.PD = window.PD || {};
PD.config = Object.freeze({
  questionnaireVersion: 'IACA-PD-2.0',
  schemaVersion: '2.0',
  grades: {6: '6th Grade — Earth & Space Science', 7: '7th Grade — Life Science'},
  periods: ['1','2','3','4','5','6','7','8'],
  showPeriod: true,
  periodRequired: true,
  // 5 or 6 uppercase characters; excludes I, O, 0, 1; requires a letter and a digit.
  idPattern: '^(?=.*[A-HJ-NP-Z])(?=.*[2-9])[A-HJ-NP-Z2-9]{5,6}$',
  idHelp: 'Use the 5–6 letter/number code from your teacher. Check every character.',
  filenameTemplate: 'G{grade}_Project_Discovery_{id}',
  autosave: true,
  storagePrefix: 'iaca-project-discovery:',
  maxResponseLength: 600,
  maxImportBytes: 150000,
  estimatedMinutes: '25–30'
});
