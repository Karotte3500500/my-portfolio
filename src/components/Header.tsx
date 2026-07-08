import "./Header.css";

type HeaderProps = {
    isLightMode: boolean;
    setIsLightMode: (value: boolean) => void;
};

export default function Header({ isLightMode, setIsLightMode }: HeaderProps): React.JSX.Element{
    return(
        <header className="site-header">
            <a className="logo" href="#top">
                <span className="logo-mark">🥕</span>
                <span className="logo-text">Arashi Naeata</span>
            </a>

            <nav>
                <ul className="nav-menu">
                    <li><a href="#about">About</a></li>
                    <li><a href="#works">Works</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#Vision">Vision</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>

            <button 
                className="theme-toggle"
                onClick={() => setIsLightMode(!isLightMode)}
            >
                {isLightMode ? "☽" : "☀"}
            </button>
        </header>
    );
}