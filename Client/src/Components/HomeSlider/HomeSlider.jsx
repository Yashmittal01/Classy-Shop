import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import img1 from '../../assets/slider1.jpg'
import img2 from '../../assets/slider2.jpg'
import img3 from '../../assets/slider3.jpg'
import img4 from '../../assets/slider4.jpg'
import img5 from '../../assets/slider5.jpg'
import img6 from '../../assets/slider6.jpg'
import './HomeSlider.css'


function HomeSlider() {
  return (
   <div className="homeslider py-5">
    <div className="container">
    <Swiper
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="item rounded-2xl overflow-hidden">
          <img src={img1} alt="" className='w-full' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="item rounded-2xl overflow-hidden">
          <img src={img2} alt="" className='w-full' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item rounded-2xl overflow-hidden">
          <img src={img3} alt="" className='w-full' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item rounded-2xl overflow-hidden">
          <img src={img4} alt="" className='w-full' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item rounded-2xl overflow-hidden">
          <img src={img5} alt="" className='w-full' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item rounded-2xl overflow-hidden">
          <img src={img6} alt="" className='w-full' />
          </div>
        </SwiperSlide>
      </Swiper> 
    </div>
   </div>
  )
}

export default HomeSlider
