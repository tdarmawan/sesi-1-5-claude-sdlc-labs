import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';

const root=new URL('../',import.meta.url);
const html=readFileSync(new URL('sesi-5/index.html',root),'utf8');
const context=vm.createContext({});
vm.runInContext(html.match(/<script id="webtm-domain">([\s\S]*?)<\/script>/)[1],context);
const D=context.WebTMDomain;
const roles=[{id:'DEMO-001',name:'Staff',status:'Active'},{id:'DEMO-002',name:'Auditor',status:'Inactive'}];
const valid={name:'QA Reviewer',status:'Active',permissions:{'ACCESS CONTROL/ROLES':'View Only'}};

test('RM-004: creates a new role with system ID and zero members',()=>{
  const r=D.createRole(valid,roles);
  assert.equal(r.role.name,'QA Reviewer');assert.equal(r.role.id,'DEMO-003');
  assert.equal(r.role.users,0);assert.equal(r.roles.length,3);assert.equal(roles.length,2);
});
test('RM-004: rejects a duplicate Active role',()=>assert.equal(D.createRole({...valid,name:'Staff'},roles).error.field,'name'));
test('RM-004: rejects a duplicate Inactive role',()=>assert.equal(D.createRole({...valid,name:'Auditor'},roles).error.field,'name'));
test('slide quality check / D-01: rejects an empty name',()=>assert.equal(D.createRole({...valid,name:'   '},roles).error.field,'name'));
test('demo D-02: trims name and compares without capital distinction',()=>assert.equal(D.createRole({...valid,name:' staff '},roles).error.field,'name'));
test('demo D-03: rejects markup and punctuation in alphanumeric name',()=>{
  for(const name of ['<script>','A&B','QA_Reviewer'])assert.equal(D.validateRole({...valid,name},roles).field,'name');
});
test('RM-004 / demo D-04: requires one of the two statuses',()=>{
  for(const status of ['',null,'Suspended'])assert.equal(D.validateRole({...valid,status},roles).field,'status');
});
test('RM-004: can create an Inactive role',()=>assert.equal(D.createRole({...valid,status:'Inactive'},roles).role.status,'Inactive'));
test('RM-005: accepts each specified access level and keeps defaults undecided',()=>{
  for(const level of ['',...D.levels])assert.equal(D.validateRole({...valid,permissions:{Roles:level}},roles),null);
});
test('RM-005: rejects an unknown access level',()=>assert.equal(D.validateRole({...valid,permissions:{Roles:'Admin'}},roles).field,'permissions'));
test('RM-005: View Only and None cannot create a role',()=>{
  for(const access of ['View Only','None'])assert.equal(D.createRole(valid,roles,access).error.field,'access');
});
test('permission selection is copied, not aliased to the input object',()=>{
  const input={...valid,permissions:{Roles:'All Access'}};const r=D.createRole(input,roles);
  input.permissions.Roles='None';assert.equal(r.role.permissions.Roles,'All Access');
});
test('system IDs remain unique when demo fixture has gaps',()=>{
  assert.equal(D.nextId([{id:'DEMO-003'},{id:'DEMO-004'}]),'DEMO-005');
});
test('Appendix menu mapping includes Access Control, Master Menu, Roles, Users',()=>{
  assert.deepEqual(Array.from(D.menus['ACCESS CONTROL']),['MASTER MENU','ROLES','USERS']);
  assert.equal(Object.keys(D.menus).length,7);
});
test('all four HTML snapshots have syntactically valid standalone scripts',()=>{
  for(const path of ['starter.html','checkpoint-01.html','checkpoint-02.html','index.html']){
    const source=readFileSync(new URL('sesi-5/'+path,root),'utf8');
    assert.match(source,/<!doctype html>/i);assert.doesNotMatch(source,/<script[^>]+src=|<link[^>]+href=/i);
    for(const m of source.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g))new vm.Script(m[1],{filename:path});
  }
});
