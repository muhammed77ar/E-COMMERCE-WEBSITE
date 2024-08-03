import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './slider.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // Autoplay,
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='container'>
          <div className='circle'>
          <div className='image1'>
            <img src="../imgs/Brand Men's Hoodies Spring Autumn Solid patchwork Male Casual Hoodies Sweatshirts Men's Color Hoodies Sweatshirt Tops royal blue-M.png" alt="" />
          </div>
          </div>
          </div>
          <div className='text1'>
          <span className='title1'>Brand Men's Hoodies Spring Autumn Solid patchwork Male Casual Hoodies Sweatshirts Men's Color Hoodies Sweatshirt Tops</span>
          <span className='price1'>39.99$</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
                  
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </>
  );
}
