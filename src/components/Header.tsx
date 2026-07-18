import { useState } from "react";
import { Link } from 'react-router-dom';
import { navItems, type navItem } from "../data/navItems";

import "./Header.css";

type HeaderProps = {
    isLightMode: boolean;
    setIsLightMode: (value: boolean) => void;
};


export default function Header({ isLightMode, setIsLightMode }: HeaderProps): React.JSX.Element{
    const [ isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    function closeMenu(): void{
        setIsMenuOpen(false);
    }
    function renderNavItem(item: navItem): React.JSX.Element{

        if(item.href.startsWith("/")){
            return (
                <Link className="header-link" to={item.href} onClick={closeMenu}>
                    {item.label}
                </Link>
            );
        }

        else{

            return (
                 <Link className="header-link" to={{pathname: "/", hash: item.href}} onClick={closeMenu}>
                    {item.label}
                </Link>
             );
        }
    }

    return(
        <header className="site-header">
            <Link className="logo" to={{pathname: "/", hash: "#top"}}>
                <span className="logo-mark">
                    <img src="/images/portfolio_logo_mono_cg.svg"/>
                </span>
                <span className="logo-text">Nawata's Lab</span>
            </Link>

            <nav>
                <ul className={isMenuOpen ? "nav-menu is-open" : "nav-menu"}>
                    {navItems.map((item) => (
                        <li key={item.label}>
                            {renderNavItem(item)}
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