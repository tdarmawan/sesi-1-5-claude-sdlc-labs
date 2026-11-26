import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const root=new URL('../',import.meta.url);
const read=path=>readFileSync(new URL(path,root),'utf8');
const json=path=>JSON.parse(read(path));

function parseCsv(text){
  const rows=[];let row=[],cell='',quoted=false;
  for(let i=0;i<text.length;i++){
    const c=text[i];
    if(c==='"'){if(quoted&&text[i+1]==='"'){cell+='"';i++;}else quoted=!quoted;}
    else if(c===','&&!quoted){row.push(cell);cell='';}
    else if(c==='\n'&&!quoted){row.push(cell.replace(/\r$/,''));rows.push(row);row=[];cell='';}
    else cell+=c;
  }
  if(cell||row.length){row.push(cell);rows.push(row);}assert.equal(quoted,false,'Unclosed CSV quote');
  const header=rows.shift();return rows.filter(r=>r.some(Boolean)).map(r=>{assert.equal(r.length,header.length);return Object.fromEntries(header.map((key,i)=>[key,r[i]]));});
}
test('Sesi 1 checkpoints satisfy output contract and use real BRD IDs',()=>{
 const schema=json('sesi-1/OUTPUT-SCHEMA.json');const brd=read('sesi-1/BRD.md');
 for(const file of ['CHECKPOINT-01.json','CHECKPOINT-02.json']){
  const output=json('sesi-1/'+file);assert.equal(new Set(output.map(x=>x.storyId)).size,output.length);
  for(const row of output){
   assert.deepEqual(Object.keys(row).sort(),[...schema.items.required].sort());
   assert.match(row.storyId,new RegExp(schema.items.properties.storyId.pattern));assert.ok(row.userStory.length);
   assert.ok(row.criteria.length);for(const ac of row.criteria)assert.match(ac,/^Given .+ When .+ Then .+/);
   assert.ok(row.source.length);for(const source of row.source){assert.match(source,/^BRD.md#RP-00[1-4]$/);assert.ok(brd.includes(source.split('#')[1]));}
   assert.ok(schema.items.properties.reviewStatus.enum.includes(row.reviewStatus));
   assert.notEqual(row.reviewStatus,'Approved','Checkpoint must not impersonate human approval');
  }
 }
});
test('Sesi 1 starter is clearly distinct from reviewed checkpoint',()=>{
 assert.equal(json('sesi-1/OUTPUT-STARTER.json')[0].criteria.length,0);
 assert.ok(json('sesi-1/CHECKPOINT-02.json').some(x=>x.reviewStatus==='Needs Clarification'));
});
test('Sesi 2 review fixture deliberately omits Inactive, corrected checkpoint includes it',()=>{
 const draft=read('sesi-2/BRD-v1.0.md').split('\n').find(l=>l.startsWith('| RM-004'));
 const fixed=read('sesi-2/BRD-v1.2.md').split('\n').find(l=>l.startsWith('| RM-004'));
 assert.doesNotMatch(draft,/nama unik terhadap role Active maupun Inactive/);assert.match(draft,/nama unik terhadap role Active,/);assert.match(fixed,/nama unik terhadap role Active maupun Inactive/);
 for(let n=1;n<=8;n++)assert.match(read('sesi-2/BRD-v1.2.md'),new RegExp('## '+n+'\\.'));
});
test('Sesi 3 final flow covers access branches and duplicate inactive role',()=>{
 const flow=read('sesi-3/FLOW-CHECKPOINT-v2.md');
 for(const value of ['None','View Only','All Access','Active/Inactive','RM-004','RM-005','Mulai','Akhir'])assert.ok(flow.includes(value));
 assert.match(read('sesi-3/FLOW.mmd'),/N08 --> N06/);
});
test('Sesi 4 mapping covers all seven requirements and preserves unresolved decisions',()=>{
 const mapping=parseCsv(read('sesi-4/REQUIREMENT-SCREEN.csv'));
 assert.deepEqual(mapping.map(x=>x['Requirement ID']),Array.from({length:7},(_,i)=>'RM-00'+(i+1)));
 assert.match(read('sesi-4/HANDOFF-CHECKPOINT.md'),/default\/mandatory TBC/);
 const mcp=json('sesi-4/mcp.example.json');assert.equal(mcp.mcpServers.stitch.headers['X-Goog-Api-Key'],'${STITCH_API_KEY}');
 assert.equal(mcp.mcpServers.stitch.type,'http');
});
test('backlog has valid source IDs, complete fields, no missing or cyclic dependencies',()=>{
 const stories=parseCsv(read('sesi-5/BACKLOG.csv'));const ids=new Set(stories.map(x=>x['Story ID']));
 assert.equal(stories.length,8);assert.equal(ids.size,8);
 const graph=new Map();
 for(const s of stories){
  assert.ok(s['User Story'].startsWith('Sebagai '));assert.ok(s['Acceptance Criteria'].split(';').length>=2);
  assert.match(s['Requirement ID'],/^RM-00[1-7](; RM-00[1-7])*$/);assert.ok(['Must','Should','Could'].includes(s.Priority));
  assert.ok(['S','M','L'].includes(s.Size));
  const deps=s.Dependency==='tidak ada'?[]:s.Dependency.split(';').map(d=>d.trim());
  for(const d of deps){assert.ok(ids.has(d));assert.notEqual(d,s['Story ID']);
   if(s.Priority==='Must')assert.notEqual(stories.find(x=>x['Story ID']===d).Priority,'Could');}
  graph.set(s['Story ID'],deps);
 }
 function visit(id,path=new Set()){assert.ok(!path.has(id),'Dependency cycle');for(const dep of graph.get(id))visit(dep,new Set([...path,id]));}
 for(const id of ids)visit(id);
});
test('progress fixture matches actual backlog statuses and brief totals',()=>{
 const stories=parseCsv(read('sesi-5/BACKLOG.csv'));const progress=json('sesi-5/PROGRESS-DATA.json');
 for(const s of stories)assert.equal(progress.stories.find(x=>x.id===s['Story ID']).status,s.Status);
 const counts=Object.fromEntries(['Done','In Progress','Blocked','Backlog'].map(k=>[k,stories.filter(s=>s.Status===k).length]));
 assert.deepEqual(counts,{Done:2,'In Progress':2,Blocked:1,Backlog:3});
 assert.match(read('sesi-5/PROGRESS-BRIEF.md'),/Done 2/);
});
