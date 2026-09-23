/* Optional local QA server; no dependencies. Never receives or stores answers. */
const http=require('node:http'),fs=require('node:fs'),path=require('node:path');
const args=process.argv.slice(2),port=Number(args[args.indexOf('--port')+1])||4173;
const root=path.resolve(__dirname,'..');
const types={'.html':'text/html','.js':'text/javascript','.css':'text/css','.json':'application/json','.txt':'text/plain','.md':'text/plain','.svg':'image/svg+xml'};
http.createServer((req,res)=>{
 if(!['GET','HEAD'].includes(req.method)){res.writeHead(405);return res.end();}
 let rel;try{rel=decodeURIComponent(new URL(req.url,'http://localhost').pathname);}catch{res.writeHead(400);return res.end();}
 const f=path.resolve(root,'.'+(rel==='/'?'/index.html':rel));if(!f.startsWith(root+path.sep)){res.writeHead(403);return res.end();}
 fs.readFile(f,(e,data)=>{if(e){res.writeHead(404);return res.end('Not found');}res.writeHead(200,{'Content-Type':types[path.extname(f)]||'application/octet-stream','Cache-Control':'no-store'});res.end(req.method==='HEAD'?undefined:data);});
}).listen(port,'0.0.0.0',()=>console.log('Project Discovery preview ready'));
