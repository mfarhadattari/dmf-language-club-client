import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Fade } from "react-awesome-reveal";

import banner1 from "../../../../assets/images/home/banner/banner1.jpg";
import banner2 from "../../../../assets/images/home/banner/banner2.jpg";
import banner3 from "../../../../assets/images/home/banner/banner3.jpg";
import banner4 from "../../../../assets/images/home/banner/banner4.jpg";

const Banner = () => {
  return (
    <section>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        modules={[Navigation, Pagination]}
        className="w-full h-[300px] md:h-[600px]"
      >
        <SwiperSlide className="text-center flex justify-center items-center">
          <div className="h-full relative">
            <img src={banner1} className="block w-full h-full object-cover" />
            <div className="absolute top-1/2 left-16 text-white">
              <Fade
                className="text-left"
                delay={1e3}
                cascade
                damping={0.1}
                direction="left"
                duration={1500}
              >
                <h1 className="text-3xl md:text-6xl text-left">
                  Language Learning <br />
                  Made Fun and Easy!
                </h1>
                <button className="btn btn-sm md:btn-lg bg-black bg-opacity-50 text-white md:mt-7 hover:text-black hover:bg-white md:text-xl">
                  Explore
                </button>
              </Fade>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-center flex justify-center items-center">
          <div className="h-full relative">
            <img src={banner2} className="block w-full h-full object-cover" />
            <div className="absolute top-1/2 left-16 text-white">
              <Fade
                className="text-left"
                delay={1e3}
                cascade
                damping={0.1}
                direction="bottom-left"
                duration={1500}
              >
                <h1 className="text-3xl md:text-6xl text-left">
                  Transform Your Words, <br /> Transform Your World!
                </h1>

                <button className="btn btn-sm md:btn-lg bg-black bg-opacity-50 text-white md:mt-7 hover:text-black hover:bg-white md:text-xl">
                  Explore
                </button>
              </Fade>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-center flex justify-center items-center">
          <div className="h-full relative">
            <img src={banner3} className="block w-full h-full object-cover" />
            <div className="absolute top-1/2 left-16 text-white">
              <Fade
                className="text-left"
                delay={1e3}
                cascade
                damping={0.1}
                direction="right"
                duration={1500}
              >
                <h1 className="text-3xl md:text-6xl text-left">
                Empowering Minds, <br /> Bridging Cultures!
                </h1>
                <button className="btn btn-sm md:btn-lg bg-black bg-opacity-50 text-white md:mt-7 hover:text-black hover:bg-white md:text-xl">
                  Explore
                </button>
              </Fade>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-center flex justify-center items-center">
          <div className="h-full relative">
            <img src={banner4} className="block w-full h-full object-cover" />
            <div className="bg-black bg-opacity-60 h-full w-full absolute top-0"></div>
            <div className="absolute top-1/2 left-16 text-white">
              <Fade
                className="text-left"
                delay={1e3}
                cascade
                damping={0.1}
                direction="top"
                duration={1500}
              >
                <h1 className="text-3xl md:text-6xl text-left">
                Learn, Connect, Conquer <br />  Language Barriers.
                </h1>
                <button className="btn btn-sm md:btn-lg bg-black bg-opacity-50 text-white md:mt-7 hover:text-black hover:bg-white md:text-xl">
                  Explore
                </button>
              </Fade>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Banner;
