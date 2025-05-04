import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { useState } from 'react';
import Carousel from '@/components/ui/Carousel';
import c1 from "@/assets/images/all-img/c1.png";
import c2 from "@/assets/images/all-img/c2.png";
import c3 from "@/assets/images/all-img/c3.png";

export default function BackgroundCarousel() {
  const backgrounds = [
    'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Fettjl2rGDjHBlCYCXcWMRAoKDr_AQOoXQ&s)',
    'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLat8bZvhXD3ChSXyzGsFVh6qgplm1KhYPKA&s)',
    'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ718nztPNJfCbDJjZG8fOkejBnBAeQw5eAUA&s)',
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center transition-all duration-500"
      style={{ backgroundImage: backgrounds[activeIndex] }}
    >
      <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold z-10">
        Your Fixed Text Here
      </div>

      <Carousel pagination={true} navigation={true} className="main-caro">
          <SwiperSlide>
            <div
              className="single-slide bg-no-repeat bg-cover bg-center rounded-md min-h-[300px] "
              style={{
                backgroundImage: `url(${c1})`,
              }}
            ></div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="single-slide bg-no-repeat bg-cover bg-center rounded-md min-h-[300px] "
              style={{
                backgroundImage: `url(${c2})`,
              }}
            ></div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="single-slide bg-no-repeat bg-cover bg-center rounded-md min-h-[300px] "
              style={{
                backgroundImage: `url(${c3})`,
              }}
            ></div>
          </SwiperSlide>
        </Carousel>

    </div>
  );
}
