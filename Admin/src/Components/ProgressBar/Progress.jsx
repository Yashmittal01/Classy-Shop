import React from 'react'

function Progress(props) {
  return (
    <div className='w-[100px] h-auto overflow-hidden rounded-md bg-[#f1f1f1]'>
      <span className={`flex items-center h-[7px] bg-[#ff5252] ${props.type==="success" && "bg-green-600"} ${props.type==="error" && "bg-red-600"} ${props.type==="warning" && "bg-orange-400"}`} style={{width: `${props.value}%`}}></span>
    </div>
  )
}

export default Progress
