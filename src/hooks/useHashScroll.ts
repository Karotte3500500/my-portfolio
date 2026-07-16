import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useHashScroll(): void{
	const location = useLocation();

	useEffect(() =>{
		let timeoutId: number | undefined;

		if (!location.hash) {
			const animationFrameId = requestAnimationFrame(() => {
				window.scrollTo({
					top: 0,
					left: 0,
					behavior: "auto",
				});
			})

			return () => {
				cancelAnimationFrame(animationFrameId);
			}
		}

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
				timeoutId = window.setTimeout(scrollToTarget, 100);
			}
		});

		return () => {
			cancelAnimationFrame(animationFrameId);

			if(timeoutId !== undefined){
				clearTimeout(timeoutId);
			}
		};
	}, [location.pathname, location.search, location.hash]);
}