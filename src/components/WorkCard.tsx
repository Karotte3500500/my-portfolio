import type { Work } from "../data/works";
import "./Works.css";

type WorkCardProps = {
    work: Work;
};


export default function WorkCard({ work }: WorkCardProps): React.JSX.Element{
    return(
        <article className="work-card" key={work.title}>
            <div className="work-card-top">
                <span className="tag">
                    {work.category.map((cat, catIndex) => (
                        <span key={cat}>{cat}{catIndex === work.category.length - 1 ? '' : ' / '}</span>
                    ))}
                </span>
                <span className="year">{work.year}</span>
            </div>

            <h3>{work.title}</h3>
            <p>{work.description}</p>
            <ul className="tech-list">
                {work.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                ))}
            </ul>

            {work.link && (
                <a className="text-link" 
                href={work.link} 
                target="_blank" 
                rel="noreferrer">
                    GitHubを見る →
            </a>
        )}
        </article>
    );
}