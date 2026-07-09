import { useEffect } from "react";

export function useScrollReveal(): void{
    useEffect(()=>{
        const targets = document.querySelectorAll(".reveal");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if(entry.isIntersecting){
                        entry.target.classList.add("revealed");
                        observer.unobserve(entry.target);
                    }
                })
            },
            {
                threshold: 0.16,
            }
        );

        targets.forEach((target) =>{
            observer.observe(target);
        });
        
        return () => {
            observer.disconnect();
        }
    }, []);
}