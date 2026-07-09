import { useState, useEffect } from "react";
import "./Hero.css";

export default function Hero(): React.JSX.Element{
    const [displayWidth, setDisplayWidth] = useState(window.innerWidth);
    
    function handleResize() {
        setDisplayWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    })

    return(
        <section className="hero section" id="top">
            <div className="hero-bg" aria-hidden="true">
                <span className="orb orb-1"></span>
                <span className="orb orb-2"></span>
                <span className="grid-bg"></span>
            </div>

            <div className="hero-content reveal">
                <p className="eyebrow">Developer / Creator</p>

                <h1 className="gradient-text3">
                    技術で<br/>
                    <span className="gradient-text">社会問題</span>と<span className="gradient-text2"><br/>
                    創作</span>を<br/>
                    つなぐ。
                </h1>

                <p className="hero-lead blink-1">
                    縄田嵐<br/>
                    C#・Web・Unityを軸に、地域課題解決・創作・創作支援などの{displayWidth > 1000 && <br/>}
                    ものづくりに挑戦しています。
                </p>

                <div className="hero-actions">
                    <a className="button primary" href="#works">作品を見る</a>
                    <a className="button ghost" href="#contact">連絡する</a>
                </div>

                <aside className="hero-card">
                    <div className="portfolio-avatar">🥕</div>
                    <h2>縄田 嵐</h2>
                    <p>Developer / Creator</p>

                    <dl className="main-stats">
                        <div>
                            <dt>Focus</dt>
                            <dd>Web Development / Game Development</dd>
                        </div>

                        <div>
                            <dt>Main Languages</dt>
                            <dd>C# / TypeScript</dd>
                        </div>

                        <div>
                            <dt>Style</dt>
                            <dd>"Focus on the "What", not just the "How"."</dd>
                        </div>
                    </dl>
                </aside>
            </div>
        </section>
    );
}