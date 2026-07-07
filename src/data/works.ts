import { Tech } from './Tech'
import { PC, type ProductCategory } from './ProductCategory';

export type Work = {
    title: string;
    category: ProductCategory[];
    year: string;
    description: string;
    technologies: Tech[];
    link?: string;
}

export const works: Work[] = [
    {
        title: "はたちゃ",
        category: [PC.Web, PC.SocialGood],
        year:"2025 ~",
        description:"農家向けの業務効率化とコミニティプラットフォームサービス。圃場管理や作業ログなどのサービスと、ノウハウの継承や交流を支援",
        technologies:[Tech.JavaScript, Tech.VueJs, Tech.Firebase],
        link:"https://github.com/Hatacha-net/hatacha_webApp_old"
    },
    {
        title: "プラたべる",
        category: [PC.Application, PC.Game, PC.SocialGood],
        year:"2024",
        description:"砂浜のプラスチック片を回収し、回収量や種類に応じてキャラクターが成長するアプリケーション",
        technologies:[Tech.Csharp, Tech.Python, Tech.Unity],
        link:"https://github.com/Karotte3500500/PlaTaberu"
    },
    {
        title: "OnigiRun",
        category: [PC.Game],
        year:"2023",
        description:"「誰でも楽しめる」をテーマにした、おにぎりから逃げながらゴールを目指すゲーム",
        technologies:[Tech.Csharp, Tech.Unity],
        link:"https://github.com/Karotte3500500/OnigiRun"
    },
    {
        title: "ArcaneaCollection",
        category: [PC.Game],
        year:"2026",
        description:"タロットカードをモチーフにしたデッキ構築型ローグライクゲーム",
        technologies:[Tech.Csharp, Tech.Unity],
        link:"https://github.com/Karotte3500500/ArcaneaCollection"
    },
    {
        title: "Fonyn",
        category: [PC.Language, PC.Application],
        year:"2026 ~",
        description:"実態、状態、振る舞いを明確に分離し、責務分離を明確にしつつ再利用可能性に注目した言語",
        technologies:[Tech.Csharp, Tech.Dotnet],
        link:"https://github.com/Fonyn/Fonyn"
    },
];