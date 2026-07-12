export const Language = {
    Csharp: "C#",
    Python: "Python",
    JavaScript: "JavaScript",
    TypeScript: "TypeScript",
    Ruby: "Ruby",
    Cpuls: "C++",
    Clang: "C",
    Java: "Java",
} as const;

export type Language = typeof Language[keyof typeof Language];

export const Tech = {
    ...Language,

    VueJs: "Vue.js",
    ReactJs: "React.js",
    Firebase: "Firebase",
    Unity: "Unity",
    Dotnet: ".NET",
    Rails: "Rails",

    Postgre: "PostgreSQL",

    Blender: "Blender",
    Shader: "Shader",
    Figma: "Figma",
    Affinity: "Affinity",
    MediBangPaint: "MediBang Paint",
    Krita: "Krita",
    GraphicsGale: "GraphicsGale",
} as const;

export  type Tech = typeof Tech[keyof typeof Tech];