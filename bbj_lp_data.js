/* =========================
   bbj_lp_data.js (SHARED)
   管理データだけ（ロジック無し）
========================= */
window.BBJ_DATA = window.BBJ_DATA || {};

window.BBJ_DATA.settings = {
  feeRate: 0.236,
  taxRate: 0.10,
  taxOnFee: true,
  trafficNonTaxable: true,
  roundMode: 'round'
};

// =========================
// オプション料金マスタ（税別）
// 画像の金額をそのまま固定
// =========================
window.BBJ_DATA.optionMaster = {
  // シッティング割増（1時間）
  "病児保育": { 単位: "時間", 金額: 3000 },
  "産後ケア": { 単位: "時間", 金額: 3000 },
  "障害児対応": { 単位: "時間", 金額: 3000 },

  // 送迎・外出割増（1時間）
  "送迎対応": { 単位: "時間", 金額: 2000 },
  "外出同行": { 単位: "時間", 金額: 2000 },

  // 家庭教師（1時間）
  "検定対策": { 単位: "時間", 金額: 3000 },

  // トラベル割増（1泊）
  "シッター同行（国内）": { 単位: "泊", 金額: 20000 },
  "ナース同行（国内）": { 単位: "泊", 金額: 30000 },
  "ナース同行（海外）": { 単位: "泊", 金額: 50000 },

  // 人数追加（2人以上：1人あたり・1時間）
  "2人以上（1人あたり）": { 単位: "時間", 金額: 5000 },

  // 時間帯（割合）※今回の収入例では使わなくてOK
  "早朝割増": { 単位: "割合", 率: 0.25 },
  "夜間割増": { 単位: "割合", 率: 0.25 },
  "深夜割増": { 単位: "割合", 率: 0.50 },

  // 面談（今回の収入例に入れないなら使わない）
  "対面面談": { 単位: "時間", 金額: 5000 },
  "オンライン面談": { 単位: "回", 金額: 0 }
};

window.BBJ_DATA.incomeExamples = {
  1: { title: 'お子様の病児保育の依頼', sub: 'Requesting childcare for a sick child', hourly: 10000, people: 1, hours: 3, addons: 4000, traffic: 500 },
  2: { title: 'お子様の家庭教師の依頼', sub: 'Requesting a tutor for a child', hourly: 10000, people: 1, hours: 1, addons: 0, traffic: 300 },
  3: { title: '送迎対応＋外出同行の依頼', sub: 'Pickup + outing accompaniment', hourly: 7000, people: 1, hours: 2, addons: 2000, traffic: 500 },
  4: { title: '産後ケア＋シッティングの依頼', sub: 'Postpartum care + childcare', hourly: 9000, people: 1, hours: 3, addons: 3000, traffic: 800 },
  5: { title: 'スポットサポート(2時間)', sub: 'Short-Term Spot Care (2 Hours)', hourly: 12000, people: 1, hours: 2, addons: 5000, traffic: 500 }
};

window.BBJ_DATA.workStyle = {
  heading: {
    bg: "Work Style",
    kicker: "あなたに合った",
    title: "働き方や収入が選べます",
    sub: "Choose the work style and income that suits you",
  },

  cards: [

    {
      id: "nurse_to_sitter",
      badge: "看護師からシッターへ",
      color: "aqua",
      photo: "bbj-images/workstyle-person02.png",
      persona: "20代女性（元看護師）",
      bullets: ["保育歴 4年", "時給 14,000 円"],
      days: ["月", "火", "水", "木", "金", "土", "日"],
      activeDays: ["火", "木"],
      monthly: 224000,
      note: "（週2日 × 2件 × 1日約2時間）",
      sim: { hourly: 14000, perWeek: 2, hoursPerSupport: 2, supportsPerDay: 2 },
    },
    {
      id: "tokyo_exam",
      badge: "東大卒・難関高受験対応",
      color: "navy",
      photo: "bbj-images/workstyle-person04.png",
      persona: "30代男性（中学生・高校生）",
      bullets: ["家庭教師 5年", "時給 14,500 円"],
      days: ["月", "火", "水", "木", "金", "土", "日"],
      activeDays: ["土"],
      monthly: 522000,
      note: "（週3日 × 1日約3時間）",
      sim: { hourly: 14500, perWeek: 3, hoursPerSupport: 3, supportsPerDay: 1 },
    },
    {
      id: "care_and_work",
      badge: "保育士とWワーク",
      color: "peach",
      photo: "bbj-images/workstyle-person01.png",
      persona: "30代女性（バイリンガル）",
      bullets: ["保育歴 6年", "時給 12,000 円"],
      days: ["月", "火", "水", "木", "金", "土", "日"],
      activeDays: ["金"],
      monthly: 432000,
      note: "（週3日 × 1日約3時間）",
      sim: { hourly: 12000, perWeek: 3, hoursPerSupport: 3, supportsPerDay: 1 },
    },
    {
      id: "postpartum_sleep",
      badge: "産前産後ケア×睡眠サポート",
      color: "mint",
      photo: "bbj-images/workstyle-person03.png",
      persona: "40代女性（助産師）",
      bullets: ["産前産後ケア 8年", "時給 13,500 円"],
      days: ["月", "火", "水", "木", "金", "土", "日"],
      activeDays: ["月", "水"],
      monthly: 324000,
      note: "（週2日 × 1日約3時間）",
      sim: { hourly: 13500, perWeek: 2, hoursPerSupport: 3, supportsPerDay: 1 },
    },
    {
      id: "travel_bilingual",
      badge: "トラベル同行・英語対応",
      color: "sand",
      photo: "bbj-images/workstyle-person05.png",
      persona: "20代男性（EN/JP）",
      bullets: ["旅行同行 経験あり", "時給 11,000 円"],
      days: ["月", "火", "水", "木", "金", "土", "日"],
      activeDays: ["日"],
      monthly: 176000,
      note: "（週1日 × 1日約4時間）",
      sim: { hourly: 11000, perWeek: 1, hoursPerSupport: 4, supportsPerDay: 1 },
    },
    {
      id: "weekend_premium",
      badge: "週末プレミアム枠",
      color: "royal",
      photo: "bbj-images/workstyle-person06.png",
      persona: "30代男性（送迎＋学習見守り）",
      bullets: ["運転OK", "時給 13,000 円"],
      days: ["月", "火", "水", "木", "金", "土", "日"],
      activeDays: ["土", "日"],
      monthly: 312000,
      note: "（週2日 × 1日約3時間）",
      sim: { hourly: 13000, perWeek: 2, hoursPerSupport: 3, supportsPerDay: 1 },
    },
  ],

  simulator: {
    defaultCardId: "tokyo_exam",
    monthFactor: 4, // ✅ 4週固定（カード注釈の数字と一致）
    labels: {
      hourly: "時給",
      perWeek: "週",
      times: "回",
      sumPrefix: "1ヶ月の合計（サポート1回",
      sumSuffix: "時間）",
      approx: "およそ",
    },
  },
};
