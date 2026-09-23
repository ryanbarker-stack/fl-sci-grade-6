/* Usage: node tests/parse-export.cjs path/to/G6_Project_Discovery_K7M4Q.txt
   This reads a local file; it never sends the record anywhere. */
const fs=require('node:fs');
function parse(text){const lines=text.trimEnd().split(/\r?\n/);const record=JSON.parse(lines.at(-1));if(record.app!=='IACA_PROJECT_DISCOVERY'||record.kind!=='submission'||!record.schemaVersion||!record.answers)throw Error('Not a valid Project Discovery submission record');return record;}
if(require.main===module){if(!process.argv[2])throw Error('Provide the path to a final TXT file');const record=parse(fs.readFileSync(process.argv[2],'utf8'));console.log(JSON.stringify(record,null,2));}
module.exports={parse};
