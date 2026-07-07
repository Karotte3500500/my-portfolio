export const PC = {
    Application: "Application",
    Web: "Web",
    Api: "API",
    SocialGood: "Social Good",
    AI: "AI",
    Game: "Game",
    Language: "Languages"
} as const;

export  type ProductCategory = typeof PC[keyof typeof PC];