export type HistoryItem = {
  title: string;
  highlights: string[];
  points: string[];
  skills: string[];
  mainNode?: boolean | undefined;
  none?: boolean | undefined;
};

export const historyItems: HistoryItem[] = [
  {
    title: "右へスライドしてください",
    highlights: [
      "",
    ],
    points: [
      "ここに、経歴が表示されます"
    ],
    skills: [],
  },
  {
    title: "幼少期",
    highlights: [
      "エジソンの伝記から、ものづくりに魅入られる",
    ],
    points: [
      "なぜ？どうして？科学のお話を読む",
      "伝記からものづくりへ"
    ],
    skills: [],
  },
  {
    title: "小学校",
    highlights: [
      "ロボットを作りや工作に熱中",
    ],
    points: [
      "工作が好きだった",
      "Scratchに触れる",
      "ロボット教室へ通う",
    ],
    skills: ["Scratch"],
    mainNode: true,
  },
    {
    title: "ロボティクスプロフェッサーコースへ昇格",
    highlights: [
      "初めてArduinoに触れる",
    ],
    points: [
      "ロボット教室のコースが最高ランクに",
      "初めての文字でのプログラミング",
    ],
    skills: ["Arduino"],
  },
  {
    title: "中学校",
    highlights: [
      "プログラミングや創作に熱中",
    ],
    points: [
      "創作文化への憧れを持つ",
      "イラストを本格的に始める",
    ],
    skills: ["Illustration"],
    mainNode: true,
  },
  {
    title: "初めてのHello, World",
    highlights: [
      "Hello, World!!",
    ],
    points: [
      "初のマイコン以外のプログラミング",
      "プログラミングの沼にハマる",
      "オブジェクト指向",
    ],
    skills: ["C#"],
  },
  {
    title: "高専",
    highlights: [
      "情報技術を専門に学びたい",
    ],
    points: [
      "コンピュータ部に入部",
      "コンテストや開発に挑戦",
    ],
    skills: [],
    mainNode: true,
  },
  {
    title: "U-16 プロコン最優秀賞",
    highlights: [
      "初めての受賞",
    ],
    points: [
      "OnigiRunで最優秀賞",
      "人生初の受賞",
    ],
    skills: ["C#", "Unity", "Blender"],
  },
  {
    title: "BCN ITジュニア U-16賞",
    highlights: [
      "はじめての東京",
    ],
    points: [
      "授賞式のために初めて東京へ",
      "懇親会では香川高専の人と交流",
    ],
    skills: [],
  },
  {
    title: "全国高専プロコン ピクシブ賞",
    highlights: [
      "憧れの高専プロコン",
    ],
    points: [
      "初めてのチーム開発",
      "憧れの高専プロコンで受賞",
      "全国のレベルの高さを知る",
    ],
    skills: ["C#", "Python", "Unity", "Raspberry pi", "Illustration"],
  },
  {
    title: "AKATSUKI re-KOSEN採択",
    highlights: [
      "100万円の開発",
    ],
    points: [
      "開発費がある開発を経験",
      "ヒアリングの挑戦",
      "DXの取り組み",
    ],
    skills: ["JavaScript", "Vue.js", "Firebase"],
  },
  {
    title: "ポートフォリオ制作",
    highlights: [
      "自分を発信する",
    ],
    points: [
      "Vue.jsからReact.jsへ",
      "就職活動の始まり",
      "フロントエンドの学習",
    ],
    skills: ["TypeScript", "React.js"],
  },
  {
    title: "",
    highlights: [""],
    points: [],
    skills: [],
    none: true,
  },
];