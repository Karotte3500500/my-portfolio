import { useState } from "react";
import "./Header.css";

type HeaderProps = {
    isLightMode: boolean;
    setIsLightMode: (value: boolean) => void;
};

type navItem = {
    label: string;
    href: string;
}

const navItems: navItem[] = [
    { label: "About", href: "#about" },
    { label: "Works", href: "#works"},
    { label: "Skills", href: "#skills"},
    { label: "Vision", href: "vision"},
    { label: "Contact", href: "#contact"}
]

export default function Header({ isLightMode, setIsLightMode }: HeaderProps): React.JSX.Element{
    const [ isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    function closeMenu(): void{
        setIsMenuOpen(false);
    }

    return(
        <header className="site-header">
            <a className="logo" href="#top">
                <span className="logo-mark">🥕</span>
                <span className="logo-text">Arashi Naeata</span>
            </a>

            <nav>
                <ul className={isMenuOpen ? "nav-menu is-open" : "nav-menu"}>
                    {navItems.map((item) => (
                        <li key={item.label}>
                            <a href={item.href} onClick={closeMenu}>
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="header-actions">
                <button 
                    className="theme-toggle"
                    onClick={() => setIsLightMode(!isLightMode)}
                >
                    {isLightMode ? "☽" : "☀"}
                </button>

                <button 
                    className="nav-toggle"
                    type="button"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="メニューを開閉する"
                    aria-expanded={isMenuOpen}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    );
}