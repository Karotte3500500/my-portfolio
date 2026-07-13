import Hero from "../components/Hero";
import About from "../components/About";
import Works from "../components/Works";
import Skills from "../components/Skills";
import Vision from "../components/Vision";
import Contact from "../components/Contact";

function Landing(): React.JSX.Element {
  return (
	  <section>
		<Hero/>
		<About/>
		<Works/>
		<Skills/>
		<Vision/>
		<Contact/>
	  </section>
  )
}

export default Landing
