import { useEffect, useRef, useState } from "react";
import type { PointerEvent, WheelEvent } from "react";
import { historyItems } from "../data/history";
import "./History.css"

export default function History(): React.JSX.Element {
    const scrollerRef = useRef<HTMLDivElement>(null);

    const [isDragging, setIsDragging] = useState(false);

    const isPointerDownRef = useRef(false);
    const startXRef = useRef(0);
    const startScrollLeftRef = useRef(0);
    const hasDraggedRef = useRef(false);

    useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const targets =
        scroller.querySelectorAll<HTMLElement>(".history-scroll-item");

    const observer = new IntersectionObserver(
        (entries) => {
        entries.forEach((entry) => {
            entry.target.classList.toggle("is-visible", entry.isIntersecting);
        });
        },
        {
        root: scroller,
        threshold: 0.45,
        rootMargin: "0px -12% 0px -12%",
        }
    );

    targets.forEach((target) => {
        observer.observe(target);
    });

    return () => {
        observer.disconnect();
    };
    }, []);

    const handleWheel = (event: WheelEvent<HTMLDivElement>) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const maxScrollLeft = scroller.scrollWidth - scroller.clientWidth;
    if (maxScrollLeft <= 0) return;

    const delta =
        Math.abs(event.deltaY) > Math.abs(event.deltaX)
        ? event.deltaY
        : event.deltaX;

    const nextScrollLeft = Math.min(
        maxScrollLeft,
        Math.max(0, scroller.scrollLeft + delta)
    );

    if (nextScrollLeft !== scroller.scrollLeft) {
        event.preventDefault();
        scroller.scrollLeft = nextScrollLeft;
    }
    };

    const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    isPointerDownRef.current = true;
    hasDraggedRef.current = false;

    startXRef.current = event.clientX;
    startScrollLeftRef.current = scroller.scrollLeft;

    setIsDragging(true);

    scroller.setPointerCapture(event.pointerId);
    };

    const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    if (!isPointerDownRef.current) return;

    const distance = event.clientX - startXRef.current;

    if (Math.abs(distance) > 4) {
    hasDraggedRef.current = true;
    }

    scroller.scrollLeft = startScrollLeftRef.current - distance;
    };

    const finishDragging = (event: PointerEvent<HTMLDivElement>) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    isPointerDownRef.current = false;
    setIsDragging(false);

    if (scroller.hasPointerCapture(event.pointerId)) {
    scroller.releasePointerCapture(event.pointerId);
    }
    };

    const handleClickCapture = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!hasDraggedRef.current) return;

    event.preventDefault();
    event.stopPropagation();

    hasDraggedRef.current = false;
    };

    return (
    <section id="history" className="section history-section">
        <div className="section-heading reveal">
            <p className="eyebrow">History</p>
            <h2>ものづくりに惹かれて、プログラミングへ。</h2>
            <p>
                小学生のころの工作やロボット教室から始まり、
                ゲーム制作、Web開発、プロダクト開発へと関心が広がってきました。
            </p>
        </div>

        <p className="history-scroll-hint">Scroll sideways →</p>
        <div className="history-scroll-shell reveal">

        <div
            className={isDragging ? "history-scroll is-dragging" : "history-scroll"}
            ref={scrollerRef}
            onWheel={handleWheel}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={finishDragging}
            onPointerCancel={finishDragging}
            onClickCapture={handleClickCapture}
            tabIndex={0}
            aria-label="経歴タイムラインを横にスクロール"
        >
            <div className="history-track">
            {historyItems.map((item) => (
                <article className="history-scroll-item" key={item.title}>
                    <div className="history-highlight-area">
                        {item.highlights.map((highlight) => (
                        highlight !== "" &&  <p className="history-highlight" key={highlight}>
                            {highlight}
                        </p>
                        ))}
                    </div>

                    <div className="history-node-area" aria-hidden="true">
                        <span className={item.mainNode ? "history-node-main" : "history-node"}></span>
                    </div>

                    {!item.none && <div className="history-card">
                        <h3>{item.title}</h3>

                        <ul className="history-points">
                        {item.points.map((point) => (
                            <li key={point}>{point}</li>
                        ))}
                        </ul>

                        <ul className="history-skills">
                        {item.skills.map((skill) => (
                            <li key={skill}>{skill}</li>
                        ))}
                        </ul>
                    </div>}
                </article>
            ))}
            </div>
        </div>
        </div>
    </section>
    );
}