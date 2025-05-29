import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import { AiTwotoneGift } from "react-icons/ai";
import { IoStatsChartSharp } from "react-icons/io5";
import { AiTwotonePieChart } from "react-icons/ai";
import { BsBank } from "react-icons/bs";
import { RiProductHuntLine } from "react-icons/ri";
import { Navigation } from "swiper/modules";

function DashboardBoxes() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        className="dashboardboxslider"
      >
        <SwiperSlide>
         <div className="box bg-[#ff5252] p-5 cursor-pointer rounded-md border border-[rgba(0,0,0,0.1)] flex items-center gap-4">
          <AiTwotoneGift className="text-[40px] text-white "/>
          <div className="info w-[70%]">
            <h3 className="whitespace-nowrap text-white">New Orders</h3>
            <b className="text-white">1,390</b>
          </div>
          <IoStatsChartSharp className="text-[50px] text-white"/>
         </div>
        </SwiperSlide>

        <SwiperSlide>
         <div className="box bg-[#10B981] p-5 cursor-pointer rounded-md border border-[rgba(0,0,0,0.1)] flex items-center gap-4">
          <AiTwotonePieChart className="text-[40px] text-white"/>
          <div className="info w-[70%]">
            <h3 className="whitespace-nowrap text-white">Sales</h3>
            <b className="text-white">Rs 57,890</b>
          </div>
          <IoStatsChartSharp className="text-[50px] text-white"/>
         </div>
        </SwiperSlide>

        <SwiperSlide>
         <div className="box bg-[#7928CA] p-5 cursor-pointer rounded-md border border-[rgba(0,0,0,0.1)] flex items-center gap-4">
          <BsBank className="text-[40px] text-white"/>
          <div className="info w-[70%]">
            <h3 className="whitespace-nowrap text-white">Revenue</h3>
            <b className="text-white">Rs 12,910</b>
          </div>
          <IoStatsChartSharp className="text-[50px] text-white"/>
         </div>
        </SwiperSlide>

        <SwiperSlide>
         <div className="box bg-[#312be1d8] p-5 cursor-pointer rounded-md border border-[rgba(0,0,0,0.1)] flex items-center gap-4">
          <RiProductHuntLine className="text-[40px] text-white"/>
          <div className="info w-[70%]">
            <h3 className="whitespace-nowrap text-white">Total Products</h3>
            <b className="text-white">1,390</b>
          </div>
          <IoStatsChartSharp className="text-[50px] text-white"/>
         </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default DashboardBoxes;
