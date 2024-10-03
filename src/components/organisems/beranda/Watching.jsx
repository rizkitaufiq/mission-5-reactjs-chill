import watchingMovie from "../../../store/beranda/watchingMovie";
import Star from "../../../assets/images/beranda/icon/star.svg";
import rightArrow from "../../../assets/images/beranda/icon/right-arrow.svg";
import leftArrow from "../../../assets/images/beranda/icon/left-arrow.svg";

const Watching = () => {
  const { watching } = watchingMovie();
  return (
    <div>
      <section className="relative p-2 text-white w-full overflow-hidden">
        <div className="p-4">
          <h3 className="text-white font-bold text-[20px] md:text-[32px] mt-5 md:mt-10 mb-4">
            Melanjutkan Tonton Film
          </h3>

          <div className="relative flex gap-3 md:gap-8 mb-4 w-full overflow-scroll md:overflow-hidden">
            {watching.map((movies, index) => (
              <div key={index} className="relative">
                <h6 className="absolute bottom-3 left-4 text-[14px] md:text-[18px]">
                  {movies.title}
                </h6>
                <div className="w-[309px] md:w-[302px]">
                  <img src={movies.poster} alt={`${movies.titles}`} />
                </div>
                <img
                  src={Star}
                  alt="image"
                  className="absolute bottom-3 right-14"
                />
                <p className="absolute bottom-3 right-4">{movies.rating}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute flex justify-between w-full top-[9rem] md:top-[12rem]">
          <div className="flex w-[44px] -ml-2">
            <img src={leftArrow} alt="image" />
          </div>

          <div className="flex w-[44px] mr-2">
            <img src={rightArrow} alt="image" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Watching;
