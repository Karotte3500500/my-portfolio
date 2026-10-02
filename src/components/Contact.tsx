"use client";

import { useEffect, useRef, useState } from "react";
import "./Contact.css";

const email = "nawata.satsuki@gmail.com"

export default function Contact(): React.JSX.Element{
    const [copyMessage, setCopyMessage] = useState<string>("");
    const timeoutIdRef = useRef<number | null>(null);
    const requestIdRef = useRef(0);

    useEffect(() => {
        return () => {
            requestIdRef.current += 1;
            if (timeoutIdRef.current !== null) {
                window.clearTimeout(timeoutIdRef.current);
            }
        };
    }, []);

    async function copyEmailToClipboard(): Promise<void> {
        const requestId = ++requestIdRef.current;

        if (timeoutIdRef.current !== null) {
            window.clearTimeout(timeoutIdRef.current);
            timeoutIdRef.current = null;
        }

        try {
            await navigator.clipboard.writeText(email);
            if (requestId !== requestIdRef.current) return;

            setCopyMessage("メールアドレスをコピーしました: " + email);

            timeoutIdRef.current = window.setTimeout(() => {
                setCopyMessage("");
                timeoutIdRef.current = null;
            }, 3000);
        }
        catch {
            if (requestId !== requestIdRef.current) return;

            setCopyMessage("コピーに失敗しました。");
        }
    }

    return(
        <section id="contact" className="section contact-section reveal">
            <p className="eyebrow">Contact</p>
                <div className="section-heading">
                    <h2>一緒に楽しいものづくりを</h2>
                    <p>
                        インターン、開発、創作、プロダクト開発など、幅広くお声がけいただけると嬉しいです。<br/>
                        その他にも、雑談や相談なども歓迎です。
                    </p>
                </div>
            <div className="contact-content">
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
                        <a
                            className="button ghost"
                            href="https://www.facebook.com/share/1KpZLLmgYA/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Facebook
                        </a>
                    </div>
                     {copyMessage && <p className="copy-status">{copyMessage}</p>}
             </div>
            </div>
        </section>
    );
}
