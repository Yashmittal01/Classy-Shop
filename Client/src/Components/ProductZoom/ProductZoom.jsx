import React, { useRef, useState } from "react";
import "react-inner-image-zoom/lib/styles.min.css";
import InnerImageZoom from "react-inner-image-zoom";
import img1 from "../../assets/product2.webp";
import img2 from "../../assets/product2of1.webp";
import img3 from "../../assets/product2of2.webp";
import img4 from "../../assets/product2of3.webp";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/navigation";
import "swiper/css";

// import required modules
import { Navigation } from "swiper/modules";

function ProductZoom() {

  const [slideindex, setSlideIndex] = useState(0)
  const zoomSliderBig = useRef();
  const zoomSlidersml = useRef();

  const goto = (index) =>{
    setSlideIndex(index);
    zoomSlidersml.current.swiper.slideTo(index)
    zoomSliderBig.current.swiper.slideTo(index)
  }

  return (
    <>
      <div className="flex gap-3">
        <div className="slider w-[20%]">
          <Swiper
          ref={zoomSlidersml}
            direction={"vertical"}
            slidesPerView={4}
            spaceBetween={15}
            navigation={true}
            modules={[Navigation]}
            className="zoomproductslider h-[480px] overflow-hidden"
          >
            <SwiperSlide>
              <div className={`item rounded-md cursor-pointer overflow-hidden group ${slideindex===0 ? 'opcity-1' : 'opacity-30'}`} onClick={()=> goto(0)}>
                <img
                  src={img1}
                  alt=""
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
            <div className={`item rounded-md cursor-pointer overflow-hidden group ${slideindex===1 ? 'opcity-1' : 'opacity-30'}`} onClick={()=> goto(1)}>
                <img
                  src={img2}
                  alt=""
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
            <div className={`item rounded-md cursor-pointer overflow-hidden group ${slideindex===2 ? 'opcity-1' : 'opacity-30'}`} onClick={()=> goto(2)}>
                <img
                  src={img3}
                  alt=""
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
            <div className={`item rounded-md cursor-pointer overflow-hidden group ${slideindex===3 ? 'opcity-1' : 'opacity-30'}`} onClick={()=> goto(3)}>
                <img
                  src={img4}
                  alt=""
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
            <div className={`item rounded-md cursor-pointer overflow-hidden group ${slideindex===4 ? 'opcity-1' : 'opacity-30'}`} onClick={()=> goto(4)}>
                <img
                  src={img1}
                  alt=""
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="zoomContainer w-[80%] h-[500px] overflow-hidden">
          <Swiper
          ref={zoomSliderBig}
            slidesPerView={1}
            spaceBetween={0}
            navigation={false}
            className="h-full"
          >
            <SwiperSlide className="h-full">
              <InnerImageZoom src={img1} zoomType="hover" zoomScale={1} className=""/>
            </SwiperSlide>

            <SwiperSlide>
              <InnerImageZoom src={img2} zoomType="hover" zoomScale={1} />
            </SwiperSlide>

            <SwiperSlide>
              <InnerImageZoom src={img3} zoomType="hover" zoomScale={1} />
            </SwiperSlide>

            <SwiperSlide>
              <InnerImageZoom src={img4} zoomType="hover" zoomScale={1} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default ProductZoom;
