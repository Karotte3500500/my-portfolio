import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Works from "./components/Works";
import Skills from "./components/Vision";
import Vision from "./components/Vision";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { useState, useEffect } from "react";
import "./App.css"

function App(): React.JSX.Element {
  const [isLightMode, setIsLightMode] = useState<boolean>(
    () => localStorage.getItem("lightMode") === "true"
  );

  useEffect(() => {
    localStorage.setItem("theme", isLightMode ? "light" : "dark");
  }, [isLightMode]);
  return (
    <div className={`app ${isLightMode ? "" : "dark"}`}>
      <Header isLightMode={isLightMode} setIsLightMode={setIsLightMode} />

      <main>
        <Hero/>
        <About/>
        <Works/>
        <Skills/>
        <Vision/>
        <Contact/>
      </main>
      
      <Footer/>
    </div>
  )
}

export default App
