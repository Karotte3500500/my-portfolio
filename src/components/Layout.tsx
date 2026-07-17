import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

//コンポーネントのインポート
import Header from "./Header";
import Footer from "./Footer";

//フックのインポート
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useHashScroll } from "../hooks/useHashScroll";

import { HighlightTheme } from "./HighlightTheme";

export default function Layout(): React.JSX.Element{
	useHashScroll();
	useScrollReveal();

	const [isLightMode, setIsLightMode] = useState<boolean>(
    	() => localStorage.getItem("lightMode") === "true"
	);

	useEffect(() => {
		localStorage.setItem("theme", isLightMode ? "light" : "dark");
	}, [isLightMode]);

	return (
		<div className={`app ${isLightMode ? "" : "dark"}`}>
			<HighlightTheme isLightMode={isLightMode}/>

			<Header isLightMode={isLightMode} setIsLightMode={setIsLightMode} />
			
			<main>
				<Outlet />
			</main>
			
			<Footer />
		</div>
	);
}