"use client";

import { Outlet } from "react-router-dom";
import { useSyncExternalStore } from "react";

//コンポーネントのインポート
import Header from "./Header";
import Footer from "./Footer";

//フックのインポート
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useHashScroll } from "../hooks/useHashScroll";

import { HighlightTheme } from "./HighlightTheme";

const THEME_STORAGE_KEY = "theme";
const THEME_CHANGE_EVENT = "theme-change";

function subscribeToTheme(onStoreChange: () => void): () => void{
	function handleStorage(event: StorageEvent): void{
		if(event.storageArea === localStorage && event.key === THEME_STORAGE_KEY){
			onStoreChange();
		}
	}

	window.addEventListener(THEME_CHANGE_EVENT, onStoreChange);
	window.addEventListener("storage", handleStorage);

	return () => {
		window.removeEventListener(THEME_CHANGE_EVENT, onStoreChange);
		window.removeEventListener("storage", handleStorage);
	};
}

function getStoredIsLightMode(): boolean{
	return localStorage.getItem(THEME_STORAGE_KEY) === "light";
}

function getServerIsLightMode(): boolean{
	return false;
}

function storeTheme(isLightMode: boolean): void{
	localStorage.setItem(
		THEME_STORAGE_KEY,
		isLightMode ? "light" : "dark"
	);
	window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
}

export default function Layout(): React.JSX.Element{
	useHashScroll();
	useScrollReveal();

	const isLightMode = useSyncExternalStore(
		subscribeToTheme,
		getStoredIsLightMode,
		getServerIsLightMode
	);

	function handleThemeChange(nextIsLightMode: boolean): void{
		storeTheme(nextIsLightMode);
	}

	return (
		<div className={`app ${isLightMode ? "" : "dark"}`}>
			<HighlightTheme isLightMode={isLightMode}/>

			<Header isLightMode={isLightMode} setIsLightMode={handleThemeChange} />
			
			<main>
				<Outlet />
			</main>
			
			<Footer />
		</div>
	);
}
