import Navbar from "../components/organisems/beranda/Navbar";
import Hero from "../components/organisems/beranda/Hero";
import Watching from "../components/organisems/beranda/Watching";
import Rating from "../components/organisems/beranda/Rating";

const Beranda = () => {
  return (
    <div>
      <body className="bg-mainBG h-full">
        <Navbar />
        <Hero />
        <Watching />
        <Rating />
      </body>
    </div>
  );
};

export default Beranda;
