import React from 'react'
import { Link } from 'react-router-dom'

function BannerBox(props) {
  return (
    <div className="box banner-box overflow-hidden rounded-lg group">
      <Link to='/'>
      <img src={props.img} className='w-full transition-all group-hover:scale-105' alt="" />
      </Link>
    </div>
  )
}

export default BannerBox
