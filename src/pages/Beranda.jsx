import Navbar from "../components/organisems/beranda/Navbar";
import Hero from "../components/organisems/beranda/Hero";
import Watching from "../components/organisems/beranda/Watching";

const Beranda = () => {
  return (
    <div>
      <body className="bg-mainBG h-screen lg:h-full">
        <Navbar />
        <Hero />
        <Watching />
      </body>
    </div>
  );
};

export default Beranda;
