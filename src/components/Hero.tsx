import "./Hero.css";

export default function Hero(): React.JSX.Element{
    return(
        <section className="hero section" id="top">
            <div className="hero-content">
                <p className="eyebrow">Developer / Designer / World-builder</p>

                <h1>
                    技術で<br/>
                    <span className="gradient-text">社会問題</span>と<span className="gradient-text2"><br/>
                    創作</span>を<br/>
                    つなぐ。
                </h1>

                <p className="hero-lead blink-1">
                    縄田嵐  C#・Web・Unityを軸に、地域課題解決・創作・創作支援などのものづくりをしています。
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
                            <dd>Web Development, Game Development</dd>
                        </div>

                        <div>
                            <dt>Main</dt>
                            <dd>C#, TypeScript</dd>
                        </div>

                        <div>
                            <dt>Style</dt>
                            <dd>Focus on the 'what' ？？？？.</dd>
                        </div>
                    </dl>
                </aside>
            </div>
        </section>
    );
}