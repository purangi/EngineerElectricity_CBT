SEED_FORMULAS.push({
  id: "formula-cc-three-phase-power",
  name: "3상 소비 전력 (유효전력)",
  subjectId: "cc",
  subtopics: ["3상회로"],
  formula: "P = √3 · V · I · cosθ [W]",
  variables: [
    { symbol: "P", desc: "3상 부하가 소비하는 유효전력 [W]" },
    { symbol: "V", desc: "선간전압 [V] — 전선과 전선 사이에서 잰 전압 (상전압이 아님에 주의)" },
    { symbol: "I", desc: "선전류 [A] — 전선 한 가닥에 흐르는 전류" },
    { symbol: "cosθ", desc: "역률 — 전압과 전류의 위상차 θ의 코사인 (0~1)" }
  ],
  notes: "선간전압·선전류 기준의 식이므로 Y결선이든 Δ결선이든 형태가 동일하게 성립합니다. 결선 방식은 내부 관계(Y: 상전압 = 선간전압/√3, Δ: 상전류 = 선전류/√3)에만 영향을 주며, 어느 쪽이든 상 기준 전력 3·V상·I상·cosθ 를 선 기준으로 바꾸면 √3·V·I·cosθ 가 됩니다. 함께 자주 쓰는 식: 전선로 손실 Pₗ = 3I²R (전선 3가닥 각각의 줄열 I²R의 합).",
  sourceNote: "2025년 1회 회로이론 4번(복원) 풀이 과정에서 등록."
});
