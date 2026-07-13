import type { CSSProperties } from "react";
import type { LanguageSkill } from "../data/skills";
import "./Skills.css"

type LangSkillCardProps = {
	skill: LanguageSkill;
};

type SkillMeterStyle = CSSProperties & {
	"--level": string;
};

export function LangSkillCard({ skill }: LangSkillCardProps){
	const meterStyle: SkillMeterStyle = {
		"--level": `${skill.level}%`,
	};

	return (
		<article className="skill-card reveal">
			<div className="skill-card-head">
				<h3>{skill.language}</h3>
				<span className="skill-level">{skill.level}%</span>
			</div>

			<p>{skill.description}</p>
			
			<div
				className="skill-meter"
				role="meter"
				aria-label={`${skill.language}の習得度`}
				aria-valuemin={0}
				aria-valuemax={100}
				aria-valuenoe={skill.level}
				style={meterStyle}
			>
			<span></span>
			</div>
		</article>
	);
}