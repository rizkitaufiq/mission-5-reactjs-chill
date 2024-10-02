import watchingMovie from "../../../store/beranda/watchingMovie";
const Watching = () => {
  const { watching } = watchingMovie();
  return (
    <div>
      <section className="p-6 text-white">
        <h3 className="text-white font-bold text-[20px] md:text-[32px] mt-5 md:mt-10 mb-4">
          Melanjutkan Tonton Film
        </h3>

        <div className="flex gap-3 md:gap-8 mb-4 w-full overflow-scroll md:overflow-hidden">
          {watching.map((movies, index) => (
            <div key={index} className="relative">
              <h6 className="absolute bottom-3 left-4 text-[14px] md:text-[18px]">
                {movies.title}
              </h6>
              <div className="w-[309px] md:w-[302px]">
                <img src={movies.poster} alt={`${movies.titles}`} />
              </div>
              <p className="absolute bottom-3 right-4">{movies.rating}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Watching;
