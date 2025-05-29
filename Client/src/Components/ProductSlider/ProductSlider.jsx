import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import ProductItem from "../ProductItem/ProductItem";

function ProductSlider(props) {
  return (
    <div className="productslider py-3">
       <Swiper
        slidesPerView={props.items}
        spaceBetween={15}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <ProductItem />
        </SwiperSlide>

        <SwiperSlide>
          <ProductItem />
        </SwiperSlide>

        <SwiperSlide>
          <ProductItem />
        </SwiperSlide>

        <SwiperSlide>
          <ProductItem />
        </SwiperSlide>

        <SwiperSlide>
          <ProductItem />
        </SwiperSlide>

        <SwiperSlide>
          <ProductItem />
        </SwiperSlide>

        <SwiperSlide>
          <ProductItem />
        </SwiperSlide>

        <SwiperSlide>
          <ProductItem />
        </SwiperSlide>

      </Swiper>
    </div>
  )
}

export default ProductSlider
