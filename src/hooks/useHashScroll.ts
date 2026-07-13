import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useHashScroll(): void{
	const location = useLocation();

	useEffect(() =>{
		if (!location.hash) return;

		const id = decodeURIComponent(location.hash.replace("#", ""));

		function scrollToTarget(): boolean{
			const target = document.getElementById(id);

			if(!target) return false;

			target.scrollIntoView({
				behavior: "smooth",
				block: "start",
			});

			return true;
		}

		const animationFrameId = requestAnimationFrame(() => {
			const didScroll = scrollToTarget();

			if(!didScroll){
				setTimeout(scrollToTarget, 100);
			}
		});

		return () => {
			cancelAnimationFrame(animationFrameId);
		};
	}, [location.pathname, location.hash]);
}