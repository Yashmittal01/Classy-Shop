import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

// images
import img1 from '../../assets/banner1.jpg'
import img2 from '../../assets/banner2.jpg'
import img3 from '../../assets/banner3.jpg'
import img4 from '../../assets/banner4.jpg'
import img5 from '../../assets/banner5.webp'
import img6 from '../../assets/banner6.webp'
import img7 from '../../assets/banner7.webp'
import BannerBox from "../BannerBox/BannerBox";
import './Banner.css'

function Banner(props) {
  return (
    <div className="py-5 w-full">
      <Swiper
        slidesPerView={props.items}
        spaceBetween={15}
        navigation={true}
        modules={[Navigation]}
        className="smlbtn"
      >
        <SwiperSlide>
          <div className="box">
            <BannerBox img={img1} link={'/'}/>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="box">
            <BannerBox img={img2} link={'/'}/>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="box">
            <BannerBox img={img3} link={'/'}/>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="box">
            <BannerBox img={img4} link={'/'}/>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="box">
            <BannerBox img={img5} link={'/'}/>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="box">
            <BannerBox img={img6} link={'/'}/>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="box">
            <BannerBox img={img7} link={'/'}/>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Banner;
