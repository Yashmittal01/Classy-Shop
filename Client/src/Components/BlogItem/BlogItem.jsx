import React from 'react'
import img1 from '../../assets/blog1.jpg'
import { IoMdTime } from "react-icons/io";
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";

function BlogItem() {
  return (
    <div className="blogitem group">
      <div className="imgwrappe w-full overflow-hidden rounded-md cursor-pointer relative">
        <img src={img1} alt="" className='w-full transition-all group-hover:scale-105 ' />

        <span className='flex items-center justify-center text-white absolute bottom-[15px] right-[15px] z-50 bg-[#ff5252] rounded-md p-1 text-[11px] font-[500] gap-1 '>
          <IoMdTime className='text-[16px]'/> 5th April, 2025
        </span>
      </div>

      <div className="info py-4">
        <h2 className='text-[15px] font-[600] text-black mb-1'>
          <Link to='/' className='link'>sustainable living through cutting-edge prefabricated homes</Link></h2>
        <p className='text-[14px] font-[400] text-[rgba(0,0,0,0.8)] mb-4'>Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by g...</p>
        <Link to='/' className='link font-[500] text-[14px] flex items-center gap-1'>Read More
        <IoIosArrowForward className='mt-1' /></Link>
      </div>
    </div>
  )
}

export default BlogItem
