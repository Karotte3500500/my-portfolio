import type { CSSProperties } from "react";
import type { Skill } from "../data/skills";
import "./Skills.css"

type SkillCardProps = {
	skill: Skill;
};

type SkillMeterStyle = CSSProperties & {
	"--level": string;
};

export function SkillCard({ skill }: SkillCardProps){
	const meterStyle: SkillMeterStyle = {
		"--level": `${skill.level}%`,
	};

	return (
		<article className="skill-card reveal">
			<div className="skill-card-head">
				<h3>{skill.title}</h3>
				<span className="skill-level">{skill.level}%</span>
			</div>

			<ul className="skill-technologys">
				{skill.technologys.map((tech) => (
					<li key={tech}>{tech}</li>
				))}
			</ul>

			<p>{skill.description}</p>
			
			<div
				className="skill-meter"
				role="meter"
				aria-label={`${skill.title}の習得度`}
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