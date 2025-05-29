import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/navigation";
import "swiper/css";

// import required modules
import { Navigation } from "swiper/modules";
import HomeSlider from "../../Components/HomeSlider/HomeSlider";
import CategorySlider from "../../Components/CategorySlider/CategorySlider";
import { LiaShippingFastSolid } from "react-icons/lia";
import Banner from "../../Components/Banner/Banner";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ProductSlider from "../../Components/ProductSlider/ProductSlider";
import BlogItem from "../../Components/BlogItem/BlogItem";
import Footer from "../../Components/Footer/Footer";
import HomeSliderV2 from "../../Components/HomeSliderV2/HomeSliderV2";
import BannerBoxV2 from "../../Components/BannerBoxV2/BannerBoxV2";
import img1 from '../../assets/bannerv2img1.jpg'
import img2 from '../../assets/bannerv2img2.jpg'

function Home() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      {/* <HomeSlider /> */}
      <section className="py-6">
        <div className="container flex gap-5">
          <div className="part1 w-[70%]">
             <HomeSliderV2 />
          </div>

          <div className="part1 w-[30%] gap-2 flex items-center justify-between flex-col">
             <BannerBoxV2 info="right" image={img1} title="Buy Men's Footwear" price="Rs.1000"/>
             <BannerBoxV2 info="left" image={img2} title="Buy Apple Iphone" price="Rs.40000"/>
          </div>
        </div>
      </section>
  
      <CategorySlider />

      <section className="bg-white py-8">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="leftsec">
              <h3 className="text-[20px] font-[600]">Popular Products</h3>
              <p className="text-[14px] font-[400]">
                Do not miss the current offers until the end of March.
              </p>
            </div>

            <div className="rightsec w-[60%]">
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tab label="Fashion" />
                <Tab label="Electronics" />
                <Tab label="Bags" />
                <Tab label="Footwear" />
                <Tab label="Groceries" />
                <Tab label="Beauty" />
                <Tab label="Wellness" />
                <Tab label="Jewellery" />
              </Tabs>
            </div>
          </div>

          <ProductSlider items={6} />
        </div>
      </section>

      <section className="py-4 pt-2 bg-white ">
        <div className="container">
          <div className="freeshipping w-[80%] m-auto py-4 p-4 border-2 border-[#ff5252] flex items-center justify-between rounded-md mb-7">
            <div className="col1 flex items-center gap-4">
              <LiaShippingFastSolid className="text-[50px]" />
              <span className="text-[20px] font-[600] uppercase">
                Free Shipping
              </span>
            </div>

            <div className="col2">
              <p className="mb-0 font-[500]">
                Free Delivery Now On Your First Order and over $200
              </p>
            </div>

            <p className="font-bold text-[25px]">- Only $200*</p>
          </div>

          <Banner items={3} />
        </div>
      </section>

      <section className="bg-white py-5 pt-0">
        <div className="container">
          <h2 className="text-[20px] font-[600]">Latest Product</h2>
          <ProductSlider items={5} />

          {/* <Banner items={3} /> */}
        </div>
      </section>

      <section className="bg-white py-5 pt-0">
        <div className="container">
          <h2 className="text-[20px] font-[600]">Featured Product</h2>
          <ProductSlider items={5} />

          {/* <Banner items={3} /> */}
        </div>
      </section>

      <section className="py-5 pb-8 pt-0 bg-white blogsection">
        <div className="container">
        <h2 className="text-[20px] font-[600] mb-4">From the blog</h2>
          <Swiper
            slidesPerView={4}
            spaceBetween={15}
            navigation={true}
            modules={[Navigation]}
            className="blogslider"
          >
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>

            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>

            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>

            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}

export default Home;
