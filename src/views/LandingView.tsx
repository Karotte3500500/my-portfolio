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
				<meta name="description" content="縄田嵐のポートフォリオサイト。高専生としてC#とWebなどのIT技術を中心にものづくりをしています。就活、インターン、共同開発のお問い合わせも歓迎です。"/>
				<meta property="og:type" content="website" />
  				<meta property="og:url" content="https://www.nawata.me/" />
  				<meta property="og:site_name" content="Nawata's Lab" />

				{/* あれ */}
				<meta property="og:image" content="https://www.nawata.me/images/blog/created-portfolio-1/portfolio_sc.png" />
  				<meta property="og:image:width" content="1200" />
  				<meta property="og:image:height" content="630" />

				<meta name="twitter:card" content="summary_large_image" />
			  	<meta name="twitter:title" content="縄田 嵐 | Nawata's Lab" />
  				<meta name="twitter:description" content="..." />
  				<meta name="twitter:image" content="https://www.nawata.me/images/blog/created-portfolio-1/portfolio_sc.png" />
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
