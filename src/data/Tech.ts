export const Tech = {
    Csharp: "C#",
    Python: "Python",
    JavaScript: "JavaScript",
    TypeScript: "TypeScript",
    VueJs: "Vue.js",
    ReactJs: "React.js",
    Firebase: "Firebase",
    Unity: "Unity",
    Dotnet: ".NET",
} as const;

export  type Tech = typeof Tech[keyof typeof Tech];