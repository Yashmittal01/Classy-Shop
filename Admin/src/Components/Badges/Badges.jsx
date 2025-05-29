import React from 'react'

function Badges(props) {
  return (
    <span className={`inline-block py-1 px-4  capitalize rounded-full text-[12px] ${props.status === "pending" && 'bg-[#ff5252] text-white'} ${props.status === "confirm" && 'bg-green-500 text-white'}
      ${props.status === "delivered" && 'bg-green-700 text-white'}`}>{props.status}</span>
  )
}

export default Badges
