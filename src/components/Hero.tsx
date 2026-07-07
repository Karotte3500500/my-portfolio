export default function Hero(): React.JSX.Element{
    return(
        <section className="hero section" id="top">
            <div className="hero-content">
                <p className="eyebrow">Developer / Designer / World-builder</p>

                <h1>
                    技術で<br/>
                    <span className="gradient-text">社会問題と創作</span>を<br/>
                    つなぐ。
                </h1>

                <p className="hero-lead">
                    縄田嵐  C#・Web・Unityを軸に、地域課題解決・創作・創作支援などのものづくりをしています。
                </p>

                <div className="hero-actions">
                    <a className="button primary" href="#works">作品を見る</a>
                    <a className="button ghost" href="#contact">連絡する</a>
                </div>
            </div>
        </section>
    );
}