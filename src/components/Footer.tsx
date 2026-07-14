import { Link } from "react-router-dom";
import { navItems } from "../data/navItems";
import "./Footer.css"

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Karotte3500500",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1KpZLLmgYA/"
  }
];

export default function Footer(): React.JSX.Element {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link
            className="footer-logo"
            to={{
              pathname: "/",
              hash: "#top",
            }}
          >
            <span className="logo-mark">🥕</span>
            <span className="logo-text">Arashi Nawata</span>
          </Link>

          <p>
            大島商船高専 情報工学科に在学中で、
            ITの技術を活用して、課題解決や創作に取り組んでいます。
            旅行や天体観測、イラストを描くことが趣味です。
          </p>
        </div>

        <nav className="footer-nav" aria-label="フッターナビゲーション">
          <h2>Navigation</h2>

          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                {item.href.startsWith("/") ? (
                  <Link to={item.href}>{item.label}</Link>
                ) : (
                  <Link
                    to={{
                      pathname: "/",
                      hash: item.href,
                    }}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-social">
          <h2>Links</h2>

          <ul>
            {socialLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="signature">© {year} Arashi Nawata. All rights reserved.</p>

        <Link
          className="back-to-top"
          to={{
            pathname: "/",
            hash: "#top",
          }}
        >
          Back to top ↑
        </Link>
      </div>
    </footer>
  );
}