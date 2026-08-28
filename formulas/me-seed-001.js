/* formulas/me-seed-001.js — 슬립 s */
SEED_FORMULAS.push({
  id:'formula-me-seed-001',
  name:'슬립 s',
  subjectId:'me',
  subtopics:['유도전동기'],
  formula:'s = (Ns - N) / Ns',
  variables:[
    { symbol:'Ns', desc:'동기속도 [rpm] — 고정자 회전자계의 속도' },
    { symbol:'N',  desc:'회전자 속도 [rpm] — 실제 로터가 도는 속도' },
    { symbol:'s',  desc:'슬립 — 동기속도 대비 회전자가 뒤처지는 비율 (0~1)' }
  ],
  notes:'유도전동기는 회전자계와 회전자 사이에 상대속도(=슬립)가 있어야 유도기전력이 생기고 토크가 발생합니다. 그래서 s=0(완전히 동기속도로 도는 상태)이면 토크가 0이 되어 이론상 회전자를 계속 돌릴 수 없습니다. 기동 시(정지 상태) N=0 이므로 s=1 입니다.',
  sourceNote:''
});
