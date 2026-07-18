import { useState, useEffect } from "react";
import "./Hero.css";
import profileImg from "../assets/myface_icon.png"

type HeroProps = {
    skipAnimation?: boolean;
}

export default function Hero({ skipAnimation = false }: HeroProps): React.JSX.Element{
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

    console.log(skipAnimation);

    return(
        <section className={`hero section ${skipAnimation ? "skip-animation" : ""}`} id="top">
            <div className="hero-bg" aria-hidden="true">
                <span className="grid-bg"></span>
            </div>

            <div className="hero-content reveal">
                <p className="eyebrow">Developer / Creator</p>

                <h1 className={`${skipAnimation ? "" : "gradient-text-animation-3"}`}>
                    技術で<br/>
                    <span className={`gradient-text ${skipAnimation ? "" : "gradient-text-animation-1"}`}>
                        社会課題
                        </span>
                    と
                    <span className={`gradient-text ${skipAnimation ? "" : "gradient-text-animation-2"}`}><br/>
                    創作</span>に<br/>
                    挑戦する。
                </h1>

                <p className={`hero-lead ${skipAnimation ? "" : "blink-1"}`}>
                    C#・Web・Unityを軸に、地域課題解決・創作などの{displayWidth > 1000 && <br/>}
                    ものづくりに挑戦しています。
                </p>

                <div className="hero-actions">
                    <a className="button primary" href="#works">作品を見る</a>
                    <a className="button ghost" href="#contact">連絡する</a>
                </div>
            </div>
            <aside className={`hero-card reveal ${displayWidth > 1000 ? "main-hero-card" : ""}`} aria-label="プロフィール概要">
                <div className="profile-avatar">
                    <img src={profileImg} alt="プロフィール画像" />
                    </div>
                <h2>縄田 嵐 <span>Arashi Nawata</span></h2>
                <p className="role">Developer / Creator</p>

                <dl className="mini-stats">
                    <div>
                        <dt>Focus</dt>
                        <dd>Web / Game / Creation</dd>
                    </div>

                    <div>
                        <dt>Main Languages</dt>
                        <dd>C# / TypeScript</dd>
                    </div>
                    
                    <div>
                        <dt>Style</dt>
                        <dd>Focus on the "What", not just the "How"</dd>
                    </div>

                    <div>
                        <dt>Hobby</dt>
                        <dd>Traveling / Stargazing / Drawing</dd>
                    </div>
                </dl>
            </aside>
        </section>
    );
}