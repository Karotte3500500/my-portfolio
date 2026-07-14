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
    title: "r",
    highlights: [
      "エジソンの伝記から、ものづくりに魅入られる",
    ],
    points: [""],
    skills: [],
    none: true,
  },
  {
    title: "小学校",
    highlights: [
      "ロボットを作りや工作に熱中",
    ],
    points: [
      "ロボット教室に通う",
      "Scratchに触れる",
      "Arduinoで初プログラミング",
    ],
    skills: ["Scratch", "Arduino"],
    mainNode: true,
  },
  {
    title: "中学校",
    highlights: [
      "プログラミングが楽しい！",
    ],
    points: [
      "C#でHello World",
      "イラストを本格的に始める",
    ],
    skills: ["C#", "Illustration"],
    mainNode: true,
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