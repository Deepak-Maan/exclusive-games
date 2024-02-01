import "./App.css";
import Hero from "./components/Hero";
import Mision from "./components/Mision";
import Nav from "./components/Nav";
import Nuestros from "./components/Nuestros";

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
    </div>
  );
}

export default App;
