import Navbar from "../components/organisems/beranda/Navbar";
import Hero from "../components/organisems/beranda/Hero";
import Watching from "../components/organisems/beranda/Watching";
import Rating from "../components/organisems/beranda/Rating";
import Trending from "../components/organisems/beranda/Trending";
import Realese from "../components/organisems/beranda/Realese";

const Beranda = () => {
  return (
    <div>
      <div className="bg-mainBG h-full">
        <Navbar />
        <Hero />
        <Watching />
        <Rating />
        <Trending />
        <Realese />
      </div>
    </div>
  );
};

export default Beranda;
