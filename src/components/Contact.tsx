import { useState } from "react";
import "./Contact.css";

const email = "nawata.satsuki@gmail.com"

export default function Contact(): React.JSX.Element{
    const [copyMessage, setCopyMessage] = useState<string>("");

    async function copyEmailToClipboard(): Promise<void> {
        try {
            await navigator.clipboard.writeText(email);
            setCopyMessage("メールアドレスをコピーしました: " + email);

            setTimeout(() => {
                setCopyMessage("");
            }, 3000);
        }
        catch {
            setCopyMessage("コピーに失敗しました。");
        }
    }

    return(
        <section id="contact" className="section contact-section reveal">
            <div className="section-heading">
                <p className="eyebrow">Contact</p>
                <h2>一緒に楽しいものづくりを</h2>
                <p>
                    インターン、開発、創作、プロダクト開発など、幅広くお声がけいただけると嬉しいです。<br/>
                    その他にも、雑談や相談なども歓迎です。
                </p>
            </div>

            <div className="contact-card">
                <h3>Contact Info</h3>

                <div className="contact-actions">
                    <button className="button primary" type="button" onClick={copyEmailToClipboard}>
                        nawata.satsuki@gmail.com
                    </button>
                    <a
                        className="button ghost"
                        href="https://github.com/karotte3500500"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>
                </div>
                 {copyMessage && <p className="copy-status">{copyMessage}</p>}
             </div>
        </section>
    );
}