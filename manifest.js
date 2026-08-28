/* manifest.js — 문제/공식 파일 목록 (정본). 새 항목을 추가할 때는:
   1) problems/ 또는 formulas/ 폴더에 새 파일 하나를 만들고
   2) 아래 해당 배열에 그 파일명 한 줄만 추가하면 됩니다.
   전체 데이터를 다시 읽거나 쓸 필요가 없습니다. */
const PROBLEM_FILES = [
  "cc-2025-1-1.js",
  "cc-2025-1-10.js",
  "cc-2025-1-11.js",
  "cc-2025-1-13.js",
  "cc-2025-1-3.js",
  "cc-2025-1-4.js",
  "cc-2025-1-5.js",
  "cc-2025-1-6.js",
  "cc-2025-1-7.js",
  "cc-2025-1-8.js",
  "cc-2025-1-14.js",
  "em-2025-1-14.js",
  "em-2025-1-15.js",
  "em-2025-1-8.js",
  "me-2025-1-12.js",
  "me-2025-1-13.js",
  "me-2025-1-18.js",
  "me-2025-1-2.js",
  "me-2025-1-3.js",
  "me-2025-1-4.js",
  "me-2025-1-6.js",
  "pw-2025-1-10.js",
  "pw-2025-1-11.js",
  "pw-2025-1-13.js",
  "pw-2025-1-20.js",
  "cc-2025-1-9.js",
  "cc-2025-1-12.js",
  "cc-2025-1-2.js",
  "cc-2025-1-15.js",
  "cc-2025-1-16.js",
  "cc-2025-1-17.js",
  "cc-2025-1-18.js",
  "cc-2025-1-19.js",
  "cc-2025-1-20.js",
];
const FORMULA_FILES = [
  "cc-asymmetry-rate.js",
  "cc-propagation-constant.js",
  "cc-nphase-line.js",
  "cc-three-phase-power.js",
  "me-seed-001.js",
];
let SEED_PROBLEMS = [];
let SEED_FORMULAS = [];
