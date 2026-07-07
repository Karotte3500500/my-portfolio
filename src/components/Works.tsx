import { works } from "../data/works";
import WorkCard from "./WorkCard";

export default function Works(): React.JSX.Element{
    return(
        <section id="works" className="section">
            <p className="eyebrow">Works</p>
            <h2>制作実績</h2>

            <div className="works-grid">
                { works.map( (work) => (
                    <WorkCard key={work.title} work={work}/>
                ))}
            </div>
        </section>
    );
}