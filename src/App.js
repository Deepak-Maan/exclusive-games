import "./App.css";
import Cashino from "./components/Cashino";
import Ellos from "./components/Ellos";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Jackpot from "./components/Jackpot";
import Mision from "./components/Mision";
import Nav from "./components/Nav";
import Nuestros from "./components/Nuestros";
import Preguntas from "./components/Preguntas";
import Spin from "./components/Spin";
import TripleSeven from "./components/TripleSeven";

function App() {
  return (
    <div className="bg-[#00141B]">
      <div className=" bg-hero">
        <Nav />
        <Hero />
      </div>
      <Mision />
      <div className='bg-white md:bg-[url("../src/assets/images/bg-nuestros.png")] bg-no-repeat  bg-size'>
        <Nuestros />
      </div>
      <div className="bg-[url('./assets/images/jackpot-bg.png')] bg-no-repeat bg-size">
        <Jackpot />
      </div>
      <div className="bg-[url('./assets/images/casino-Bg.png')] bg-no-repeat bg-size">
        <Cashino />
      </div>
      <TripleSeven />
      <Spin />
      <Ellos />
      <Preguntas />
      <Footer />
    </div>
  );
}

export default App;
