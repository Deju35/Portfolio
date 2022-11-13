import Navbar from "./components/Navbar";
import About from "./components/About"
import Contact from "./components/Contact";
import Skills from "./components/Skills"
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
      
    </div>
  );
}

export default App;
