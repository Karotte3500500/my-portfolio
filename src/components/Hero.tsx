import { useState, useEffect } from "react";
import "./Hero.css";
import profileImg from "../assets/profile.jpg"

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
                {/* <span className="orb orb-1"></span>
                <span className="orb orb-2"></span> */}
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