import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Works from './components/Works';
import Skills from './components/Vision';
import Vision from './components/Vision';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css'

function App(): React.JSX.Element {

  return (
    <>
      <Header/>

      <main>
        <Hero/>
        <About/>
        <Works/>
        <Skills/>
        <Vision/>
        <Contact/>
      </main>
      
      <Footer/>
    </>
  )
}

export default App
