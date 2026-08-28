SEED_FORMULAS.push({
  id: "formula-cc-asymmetry-rate",
  name: "3상 불평형률 (Asymmetry Rate, Unbalance Factor)",
  subjectId: "cc",
  subtopics: ["3상 교류·불평형", "대칭좌표법"],
  formula: "불평형률 = (V₂/V₁) × 100[%],  또는 전류 기준: (I₂/I₁) × 100[%]",
  variables: [
    { symbol: "V₁ 또는 I₁", desc: "정상분(Positive Sequence Component) — 3상이 균형 잡힌 원래의 전압 또는 전류. 120° 위상차로 같은 크기를 갖는 성분" },
    { symbol: "V₂ 또는 I₂", desc: "역상분(Negative Sequence Component) — 불평형을 일으키는 성분으로, 정상분과 반대 방향으로 회전. 크기가 작음" },
    { symbol: "V₀ 또는 I₀", desc: "영상분(Zero Sequence Component) — 세 상이 공통으로 갖는 성분. 불평형률 계산에는 직접 쓰이지 않음" },
    { symbol: "불평형률(%)", desc: "전체 전압(또는 전류) 중 역상분이 차지하는 비율(百分率). 0~100% 범위. 일반적으로 3~5% 이내로 관리" }
  ],
  notes: "분해(Decomposition): 불평형 3상 전압/전류 Va, Vb, Vc는 대칭좌표법으로 다음과 같이 분해된다: Va = V₁a + V₂a + V₀, Vb = V₁b + V₂b + V₀, Vc = V₁c + V₂c + V₀. 여기서 V₁a, V₁b, V₁c는 120° 위상차로 대칭이고, V₂a, V₂b, V₂c도 역방향 120° 위상차로 대칭이며, V₀는 세 상이 모두 같다. /// 불평형률이 0%: V₂ = 0 → 완벽한 3상 평형 (발전기, 계통 정상 운영) /// 불평형률이 높음(5% 이상): 유도전동기에서 역상 전류 유발 → 반대 방향 회전하는 자계 생성 → 역토크 발생 + 동손 증가(ΔT ∝ I₂²) → 모터 온도 상승, 효율 저하, 수명 단축. /// 발생 원인: 단상 부하 불균형 연결, 계통 고장(지락, 단상 단락), 변압기 결선 불량, 회전 부품 불량(유도기 회전자 파손 등).",
  sourceNote: "2025년 1회 회로이론·제어공학 13번 문제에서 등록. 대칭좌표법 기초 개념."
});
