import { Tech } from './Tech'
import { PC, type ProductCategory } from './ProductCategory';

export type Work = {
    title: string;
    category: ProductCategory[];
    year: string;
    description: string;
    technologies: Tech[];
    Link?: string;
}

export const works: Work[] = [
    {
        title: "はたちゃ",
        category: [PC.Web, PC.SocialGood],
        year:"2024 ~",
        description:"農家向けの業務効率化とコミニティプラットフォームサービス。圃場管理や作業ログなどのサービスと、ノウハウの継承や交流を支援",
        technologies:[Tech.JavaScript, Tech.VueJs, Tech.Firebase],
        Link:"https://github.com/Hatacha-net/hatacha_webApp_old"
    },
    {
        title: "プラたべる",
        category: [PC.Application, PC.Game, PC.SocialGood],
        year:"2024 ~",
        description:"砂浜のプラスチック片を回収し、回収量や種類に応じてキャラクターが成長するアプリケーション",
        technologies:[Tech.Csharp, Tech.Python, Tech.Unity],
        Link:"https://github.com/Karotte3500500/PlaTaberu"
    },
    {
        title: "OnigiRun",
        category: [PC.Game],
        year:"2024 ~",
        description:"農家向けの業務効率化とコミニティプラットフォームサービス。圃場管理や作業ログなどのサービスと、ノウハウの継承や交流を支援",
        technologies:[Tech.JavaScript, Tech.VueJs, Tech.Firebase],
        Link:"https://github.com/Hatacha-net/hatacha_webApp_old"
    },
];