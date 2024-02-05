import { useEffect, useState } from "react";
import "./App.css";
import Backtotop from "./components/BackToTop";
import Cashino from "./components/Cashino";
import Ellos from "./components/Ellos";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Jackpot from "./components/Jackpot";
import Mision from "./components/Mision";
import Nav from "./components/Nav";
import Nuestros from "./components/Nuestros";
import Preguntas from "./components/Preguntas";
import Preloader from "./components/Preloader";
import Spin from "./components/Spin";
import TripleSeven from "./components/TripleSeven";

function App() {
  const [data, setdata] = useState(true);
  useEffect(() => {
    setdata(true);
    setTimeout(() => {
      setdata(false);
    }, 3000);
  }, []);
  return (
    <div>
      {data ? (
        <div>
          <Preloader />
        </div>
      ) : (
        <div className="bg-[#00141B]">
          <div className=" bg-hero">
            <Nav />
            <Hero />
          </div>
          <Mision />
          <div className='max-md:bg-white md:bg-[url("../src/assets/images/bg-nuestros.png")] bg-no-repeat  bg-size'>
            <Nuestros />
          </div>
          <div className="bg-[url('./assets/images/jackpot-bg.png')] bg-no-repeat bg-size">
            <Jackpot />
          </div>
          <div className="max-md:bg-white md:bg-[url('./assets/images/casino-Bg.png')] bg-no-repeat bg-size">
            <Cashino />
          </div>
          <TripleSeven />
          <Spin />
          <Ellos />
          <Preguntas />
          <Footer />
          <Backtotop />
        </div>
      )}
    </div>
  );
}

export default App;
