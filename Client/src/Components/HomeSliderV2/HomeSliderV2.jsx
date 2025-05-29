import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';


// images
import img1 from '../../assets/homeslider1.jpg'
import img2 from '../../assets/homeslider2.jpg'
import { Button } from '@mui/material';
import './HomeSliderV2.css'

function HomeSliderV2() {
  return (
    <>
      <Swiper
      loop={true}
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="homesliderv2"
      >
        <SwiperSlide>
          <div className="item w-full rounded-md overflow-hidden relative ">
          <img src={img1} />

          <div className="info absolute top-0 -right-[100%] w-[50%] h-[100%] !z-50 p-8 flex items-center flex-col justify-center opacity-0 transition-all duration-700">
            <h4 className='text-[18px] font-[500] w-full text-left mb-3 relative -right-[100%] opacity-0'>Big Saving Days Sale</h4>
            <h2 className='text-[35px] font-[600] w-full relative -right-[100%] opacity-0'>Women Solid Round Green T-shirt</h2>
            <h3 className='flex items-center gap-3 text-[18px] font-[500] w-full text-left mt-3 mb-3 relative -right-[100%] opacity-0'>Starting At Only <span className='text-[#ff5252] text-[30px] font-[600]'>Rs.400</span></h3>
            <div className='w-full relative -right-[100%] opacity-0 btn'>
            <Button className='!text-white !bg-[#ff5252] !px-5 !py-2'>Shop Now</Button>
            </div>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="item w-full rounded-md overflow-hidden relative">
          <img src={img2} />

          <div className="info absolute top-0 -right-[100%] w-[50%] h-[100%] !z-50 p-8 flex items-center flex-col justify-center opacity-0 transition-all duration-700">
            <h4 className='text-[18px] font-[500] w-full text-left mb-3 relative -right-[100%] opacity-0'>Big Saving Days Sale</h4>
            <h2 className='text-[35px] font-[600] w-full relative -right-[100%] opacity-0'>Apple iPhone 13 128 GB, Pink</h2>
            <h3 className='flex items-center gap-3 text-[18px] font-[500] w-full text-left mt-3 mb-3 relative -right-[100%] opacity-0'>Starting At Only <span className='text-[#ff5252] text-[30px] font-[600]'>Rs.40000</span></h3>
            <div className='w-full relative -right-[100%] opacity-0 btn'>
            <Button className='!text-white !bg-[#ff5252] !px-5 !py-2'>Shop Now</Button>
            </div>
          </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default HomeSliderV2
