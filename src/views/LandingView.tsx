import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

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
		<>
			<Helmet>
				<title>縄田 嵐 | Nawata's Lab</title>
				<meta name="description" content="技術で社会課題と創作に挑戦する。C#とWebなどのIT技術を中心にものづくりをしています。"></meta>
			</Helmet>
			
			<section>
				<Hero skipAnimation={shouldSkipHeroAnimation} />
				<History/>
				<Works/>
				<Skills/>
				<BlogLp/>
				<Contact/>
			</section>
		</>
  	)
}

export default Landing
