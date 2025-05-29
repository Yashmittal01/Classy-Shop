import React from 'react'
import './BannerBoxV2.css'
import img1 from '../../assets/bannerv2img1.jpg'
import { Link } from 'react-router-dom'

function BannerBoxV2(props) {
  return (
    <div className='bannerboxv2 w-full overflow-hidden rounded-md group relative'>
      <img src={props.image} alt="" className='w-full transition-all duration-150 group-hover:scale-105'/>

      <div className={`info absolute top-0 ${props.info==="left" ? 'left-0' : 'right-0'} w-[55%] h-[100%] p-5 z-50 flex items-center justify-center flex-col gap-2 ${props.info === "left" ? "pl-10" : "pl-10"}`}>
        <h2 className='text-[20px] font-[600]'>{props.title}</h2>

        <span className='text-[20px] text-[#ff5252] font-[600] w-full'>{props.price}</span>

        <div className='w-full'>
        <Link to="/" className='text-[16px] font-[600] link underline'>Shop Now</Link>
        </div>
      </div>
    </div>
  )
}

export default BannerBoxV2
