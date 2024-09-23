import About from "./Components/About/About";
import Hero from "./Components/Hero/Hero";
import Footer from "./Components/Footer/Footer";
import Skills from "./Components/Skills/Skills";
import Portfolio from "./Components/Portfolio/Portfolio";
import Qualification from "./Components/Qualification/Qualification";

function App() {
  return (
    <>
      <div className="overflow-auto max-h-screen">
        <Hero/>
        <About/>
        <Skills/>
        <Portfolio/>
        <Qualification/>
        <Footer/>
      </div>
      
    </>
  );
}

export default App;
