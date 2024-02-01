import "./App.css";
import Cashino from "./components/Cashino";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Mision from "./components/Mision";
import Nav from "./components/Nav";
import Nuestros from "./components/Nuestros";
import Preguntas from "./components/Preguntas";

function App() {
  return (
    <div className="bg-[#00141B]">
      <div className=" bg-hero">
        <Nav />
        <Hero />
      </div>
      <Mision />
      <div className='bg-[url("../src/assets/images/bg-nuestros.png")]'>
        <Nuestros />
      </div>
      <div className="bg-[url('./assets/images/casino-Bg.png')]">
        <Cashino />
      </div>
      <Preguntas />
      <Footer />
    </div>
  );
}

export default App;
