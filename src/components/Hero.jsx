import React from "react";
import { assets } from "../assets/assets";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// Import Swiper modules correctly
import { Autoplay, Pagination } from "swiper/modules";

const Hero = () => {
  return (
    <div className="mt-24">
      <div className="flex flex-col sm:flex-row border border-gray-400">
       {/* Hero left side */}
<div className="w-full sm:w-1/2 flex items-center justify-center py-16 sm:py-0 h-[250px] sm:h-auto">
  <div className="text-[#414141] text-center sm:text-left">
    {/* OUR BESTSELLERS */}
    <div className="flex items-center justify-center sm:justify-start gap-2">
      <p className="w-10 md:w-11 h-[2px] bg-[#414141]"></p>
      <p className="font-medium text-xl md:text-2xl">OUR BESTSELLERS</p>
    </div>

    {/* Latest Arrivals */}
    <h1 className="prata-regular text-4xl sm:text-3xl md:text-5xl leading-relaxed mt-2 sm:mt-0">
      Latest Arrivals
    </h1>

    {/* SHOP NOW */}
    <div className="flex items-center justify-center sm:justify-start gap-2 mt-4">
      <p className="font-semibold text-lg md:text-xl">SHOP NOW</p>
      <p className="w-10 md:w-11 h-[2px] bg-[#414141]"></p>
    </div>
      {/* Where Luxury Meets Essence */}
      <div className="flex items-center justify-center sm:justify-start gap-2 mt-10"> {/* Adjusted margin-top here */}
          <p className="w-10 md:w-11 h-[2px] bg-[#414141]"></p>
          <p className="prata-regular font-semibold text-lg md:text-xl italic">
            Where Luxury Meets Essence
          </p>
          <p className="w-10 md:w-11 h-[2px] bg-[#414141]"></p>
        </div>
  </div>
  
</div>

        {/* Hero Right Side with Swiper */}
        <div className="w-full sm:w-1/2 relative overflow-hidden">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            className="h-[500px] sm:h-[650px] lg:h-[775px] w-full" // Set height for different screens
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <div className="w-full h-full">
                <img
                  src={assets.hero_1}
                  alt="Image 1"
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <div className="w-full h-full">
                <img
                  src={assets.hero_2}
                  alt="Image 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
              <div className="w-full h-full">
                <img
                  src={assets.hero_3}
                  alt="Image 3"
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Hero;
