import { Tech, Language } from "./Tech";

export type Skill = {
	title: string;
	description: string;
	level: number;
	technologys: Tech[];
}

export type LanguageSkill = {
	language: Language,
	description: string;
	level: number;
}

export const skills: Skill[] = [
	{
		title: "Frontend (Web)",
		description: "「はたちゃ」からWeb開発を初め、Vue.jsやReact.jsなどで開発を行っています。また、最近はCSSの学習に取り組んでいます。",
		level: 60,
		technologys: [Tech.VueJs, Tech.ReactJs, Tech.Figma]
	},
	{
		title: "Backend",
		description: "C#のASP.NETや、RubyのRailsでAPI開発の学習をしています。また、高専の授業を通じてPostgreSQLの学習も行っています。",
		level: 30,
		technologys: [Tech.Dotnet, Tech.Rails, Tech.Firebase, Tech.Postgre]
	},
	{
		title: "Game",
		description: "Unityを用いてゲームの開発を行っています。直近では、同一シーンの共同開発やシェーダなどに挑戦しました。最近はゲーム開発をする暇がないことが悩みの種です。",
		level: 70,
		technologys: [Tech.Unity, Tech.Blender, Tech.Shader]
	},
	{
		title: "Design / Illustration",
		description: "FigmaではUIデザイン、Affinityではベクタ画像の作成をしています。また、デジタルイラストも描いており、ドット絵やアニメーションにも挑戦しています。",
		level: 50,
		technologys: [Tech.Figma, Tech.Affinity, Tech.MediBangPaint, Tech.Krita, Tech.GraphicsGale]
	}
];

export const languageSkills : LanguageSkill[] = [
	{
		language: Language.Csharp,
		description: "C#は5年以上触れており、自分にとってネイティブと言える言語です。ゲーム開発や趣味の開発全般、アルゴリズムの学習など、メインで利用している言語です。",
		level: 80
	},
	{
		language: Language.TypeScript,
		description: "TypeScriptの経験は1年程度ですが、C#の次にメインで利用している言語です。主にWeb開発で利用しています。",
		level: 68
	},
	{
		language: Language.JavaScript,
		description: "JavaScriptは、元々Web開発をする際にメインで使用していましたが、型不安であるためTypeScriptへ移行しました。",
		level: 65
	},
	{
		language: Language.Clang,
		description: "C言語は自分が小学生の頃に、Arduinoが切っ掛けで初めて触れた言語です。悲しいですが、現在はほとんど利用していません。",
		level: 50
	},
	{
		language: Language.Cpuls,
		description: "C++は高専の授業で最も学習した言語であり、一部のアルゴリズムの学習や簡単なコンソールアプリの開発に利用しています。最近はライブラリの開発にも関心があります。",
		level: 55
	},
	{
		language: Language.Java,
		description: "高専の授業で学習した言語の1つです。C#と似ているため（正確にはC#がJavaに似ている）、比較的得意な言語の1つです。",
		level: 65
	},
	{
		language: Language.Python,
		description: "高専の授業で学習した言語の1つです。RaspberryPiやデータ処理のために学習しました。苦手ではありませんが、文法や言語思想はあまり馴染めません。",
		level: 45
	},
	{
		language: Language.Ruby,
		description: "Rubyはバックエンドの学習のためにRailsを習得中です。簡単なデータベース処理やAPI開発に挑戦しています。",
		level: 30
	},
];