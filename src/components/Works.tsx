import { useState } from "react";
import { works, getCategoryUsed } from "../data/works";
import type { ProductCategory } from "../data/ProductCategory";
import WorkCard from "./WorkCard";
import "./Works.css";

type filterCategory = "ALL" | ProductCategory;

export default function Works(): React.JSX.Element{
    const [filterCategory, setFilterCategory] = useState<filterCategory>("ALL");
    
    const selectedWorks =
        filterCategory === "ALL" ? works : 
        works.filter((work) => work.category.includes(filterCategory));
        
    return(
        <section id="works" className="section reveal">
            <div className="section-heading">
                <p className="eyebrow">Works</p>
                <h2>制作実績</h2>
                <p>
                    プロダクト開発、ゲーム制作、創作支援、地域課題解決など
                </p>
            </div>

            <div className="filter-btns">
                {
                    (["ALL", ...getCategoryUsed()] as const).map((category) => (
                        <button 
                            key={category}
                            className={filterCategory === category ? "filter-btn active" : "filter-btn"}
                            onClick={() => setFilterCategory(category)}
                        >
                            {category}
                        </button>
                    ))
                }
            </div>

            <div className="works-grid">
                { selectedWorks.map( (work) => (
                    <WorkCard key={work.title} work={work}/>
                ))}
            </div>
        </section>
    );
}