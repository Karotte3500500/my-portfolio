import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import History from "../components/History";
import Works from "../components/Works";
import Skills from "../components/Skills";
import BlogLp from "../components/BlogLp"
import Contact from "../components/Contact";

function Landing(): React.JSX.Element {
	const location = useLocation();
	const shouldSkipHeroAnimation =
		location.hash !== "" && location.hash !== "#top";

  	return (
		<section>
			<Hero skipAnimation={shouldSkipHeroAnimation} />
			<History/>
			<Works/>
			<Skills/>
			<BlogLp/>
			<Contact/>
	  	</section>
  	)
}

export default Landing
