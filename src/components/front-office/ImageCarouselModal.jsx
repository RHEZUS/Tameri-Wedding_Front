import { useState, useEffect } from "react";
import { Modal } from "flowbite-react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ImageCarouselModal = ({ images, startIndex, isOpen, onClose }) => {
  const [swiperRef, setSwiperRef] = useState(null);

  useEffect(() => {
    if (swiperRef && isOpen) {
      swiperRef.slideTo(startIndex, 0);
    }
  }, [swiperRef, startIndex, isOpen]);

  return (
    <Modal show={isOpen} onClose={onClose} size="4xl" dismissible className="hey bg-transparent mt-16 border-0 border-amber-500">
      <div className="absolute top-4 right-4 text-2xl z-50 cursor-pointer bg-white/40 rounded-full p-2">
        <Icon icon="bi:x" onClick={onClose} className=""/>
      </div>
      <Modal.Body className="border-0 w-full border-blue-500 relative p-4">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          onSwiper={setSwiperRef}
          className="max-w-[800px] w-full h-[500px] flex items-center justify-center object-contain border-0 border-green-500"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="border-0 border-pink-500 flex justify-center items-center">
              <img src={image} alt={`Image ${index + 1}`} className="border-0 h-auto m-auto object-contain"/>
            </SwiperSlide>
          ))}
        </Swiper>
        
      </Modal.Body>
    </Modal>
  );
};

export default ImageCarouselModal;
