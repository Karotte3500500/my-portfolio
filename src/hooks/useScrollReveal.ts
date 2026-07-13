import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useScrollReveal(): void {
  const location = useLocation();

  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(
      ".reveal:not(.revealed)"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.16,
      }
    );

    const animationFrameId = requestAnimationFrame(() => {
      targets.forEach((target) => {
        observer.observe(target);
      });
    });

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, [location.pathname]);
}