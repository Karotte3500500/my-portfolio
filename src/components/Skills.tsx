import { skills, languageSkills } from "../data/skills";
import { SkillCard } from "./SkillCard";
import { LangSkillCard } from "./LangSkillCard";
import "./Skills.css"

export default function Skills(): React.JSX.Element{
    return(
        <section id="skills" className="section split-section">
            <div className="section-heading reveal">
                <p className="eyebrow">Skills</p>
                <h2>技術スタック</h2>
                <p>
                    自分の「つくりたい」を形にするために、様々な技術を学んでいます。
                </p>
            </div>

            <div className="skills-layout">
                {skills.map((skill) => (
                    <SkillCard key={skill.title} skill={skill} />
                ))}
            </div>

            <div className="section-heading reveal">
                <h2>プログラミング言語</h2>
            </div>

            <div className="skill-layout">
                {languageSkills.map((lang) => (
                    <LangSkillCard key={lang.language} skill={lang} />
                ))}
            </div>
        </section>
    );
}