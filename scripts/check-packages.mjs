import {readFileSync,existsSync,readdirSync,statSync} from 'node:fs';
import {resolve,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import assert from 'node:assert/strict';
const root=fileURLToPath(new URL('../',import.meta.url));
let files=0,links=0;
function walk(dir){for(const name of readdirSync(dir)){
  if(name==='.git')continue;const path=resolve(dir,name);
  if(statSync(path).isDirectory())walk(path);else{
    files++;if(name.endsWith('.md')){
      const content=readFileSync(path,'utf8');
      for(const m of content.matchAll(/\]\(([^)]+)\)/g)){
        const target=m[1].split('#')[0];if(!target||/^(https?:|mailto:)/.test(target))continue;
        assert.ok(existsSync(resolve(dirname(path),decodeURIComponent(target))),`Broken relative link: ${path} -> ${target}`);links++;
      }
    }
  }
}}
walk(root);
const progress=JSON.parse(readFileSync(resolve(root,'sesi-5/PROGRESS-DATA.json'),'utf8'));
assert.equal(progress.stories.length,8);
assert.equal(progress.stories.filter(x=>x.status==='Done').length,2);
assert.equal(progress.stories.filter(x=>x.status==='Blocked').length,1);
console.log(`Package check passed: ${files} files, ${links} local links, 8 progress stories.`);
