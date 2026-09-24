/* TEACHER SETTINGS. Student files are identified by name; permanent IDs exist only in the local teacher tool. */
window.PD = window.PD || {};
PD.config = Object.freeze({
  questionnaireVersion: 'IACA-PD-2.0',
  schemaVersion: '3.0',
  grades: {6: '6th Grade — Earth & Space Science', 7: '7th Grade — Life Science'},
  periods: ['1','2','3','4','5','6','7','8'],
  showPeriod: true,
  periodRequired: true,
  maxNameLength: 100,
  nameHelp: 'Enter your full name as your teacher knows it. Check the spelling.',
  filenameTemplate: 'G{grade}_P{period}_Project_Discovery_{name}',
  autosave: true,
  storagePrefix: 'iaca-project-discovery:',
  maxResponseLength: 600,
  maxImportBytes: 150000,
  estimatedMinutes: '25–30'
});
