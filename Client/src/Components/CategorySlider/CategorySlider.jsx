import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/navigation';
import 'swiper/css';

import './CategorySlider.css';

// import required modules
import { Navigation } from 'swiper/modules';

// images
import img1 from '../../assets/cat1.png'
import img2 from '../../assets/cat2.png'
import img3 from '../../assets/cat3.png'
import img4 from '../../assets/cat4.png'
import img5 from '../../assets/cat5.png'
import img6 from '../../assets/cat6.png'
import img7 from '../../assets/cat7.png'
import img8 from '../../assets/cat8.png'
import { Link } from 'react-router-dom';

function CategorySlider() {
  return (
    <div className="categoryslider py-8 pt-4">
      <div className="container">
      <Swiper
        slidesPerView={6}
        spaceBetween={15}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
 
        <SwiperSlide>
          <Link to='/'>
          <div className="item py-7 rounded-sm bg-white text-center flex items-center justify-center flex-col">
             <img src={img1} alt="" className='w-[60px] transition-all'/>
             <h3 className='text-[15px] font-[500] mt-3'>Fashion</h3>
          </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to='/'>
          <div className="item py-7 rounded-sm bg-white text-center flex items-center justify-center flex-col">
             <img src={img2} alt="" className='w-[60px] transition-all'/>
             <h3 className='text-[15px] font-[500] mt-3'>Electronics</h3>
          </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to='/'>
          <div className="item py-7 rounded-sm bg-white text-center flex items-center justify-center flex-col">
             <img src={img3} alt="" className='w-[60px] transition-all'/>
             <h3 className='text-[15px] font-[500] mt-3'>Bags</h3>
          </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to='/'>
          <div className="item py-7 rounded-sm bg-white text-center flex items-center justify-center flex-col">
             <img src={img4} alt="" className='w-[60px] transition-all'/>
             <h3 className='text-[15px] font-[500] mt-3'>Footwear</h3>
          </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to='/'>
          <div className="item py-7 rounded-sm bg-white text-center flex items-center justify-center flex-col">
             <img src={img5} alt="" className='w-[60px] transition-all'/>
             <h3 className='text-[15px] font-[500] mt-3'>Groceries</h3>
          </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to='/'>
          <div className="item py-7 rounded-sm bg-white text-center flex items-center justify-center flex-col">
             <img src={img6} alt="" className='w-[60px] transition-all'/>
             <h3 className='text-[15px] font-[500] mt-3'>Beauty</h3>
          </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to='/'>
          <div className="item py-7 rounded-sm bg-white text-center flex items-center justify-center flex-col">
             <img src={img7} alt="" className='w-[60px] transition-all'/>
             <h3 className='text-[15px] font-[500] mt-3'>Jwellery</h3>
          </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to='/'>
          <div className="item py-7 rounded-sm bg-white text-center flex items-center justify-center flex-col">
             <img src={img8} alt="" className='w-[60px] transition-all'/>
             <h3 className='text-[15px] font-[500] mt-3'>Wellness</h3>
          </div>
          </Link>
        </SwiperSlide>
      </Swiper>
      </div>
    </div>
  )
}

export default CategorySlider
