import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import About from "../components/About";
import Works from "../components/Works";
import Skills from "../components/Skills";
import Vision from "../components/Vision";
import Contact from "../components/Contact";

function Landing(): React.JSX.Element {
	const location = useLocation();
	const shouldSkipHeroAnimation =
		location.hash !== "" && location.hash !== "#top";

  	return (
		<section>
			<Hero skipAnimation={shouldSkipHeroAnimation} />
			<About/>
			<Works/>
			<Skills/>
			<Vision/>
			<Contact/>
	  	</section>
  	)
}

export default Landing
