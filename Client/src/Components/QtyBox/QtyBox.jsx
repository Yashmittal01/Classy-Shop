import { Button } from '@mui/material'
import React, { useState } from 'react'
import { FaAngleUp } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";

function QtyBox() {

  const [qtyval, setQtyVal] = useState(1)

  const plusQty =()=>{
    setQtyVal(qtyval + 1)
  }

  const minusQty =()=>{
    if(qtyval===1){
    setQtyVal(1)
  }
  else{
    setQtyVal(qtyval - 1)
  }
  }

  return (
    <div className='qtybox flex items-center relative'>
      <input type="number" className='w-full h-[40px] pl-4 p-2 text-[15px] focus:outline-none rounded-md border border-[rgba(0,0,0,0.2)]' defaultValue={1} 
      value={qtyval}/>

      <div className="flex items-center flex-col justify-between h-[40px] absolute top-0 right-0 z-50">
      <Button className='!min-w-[25px] w-[25px] !h-[15px] !text-[#000] !rounded-none hover:!bg-[#f1f1f1]' onClick={plusQty}><FaAngleUp className='text-[10px] opacity-55 font-[600]'/></Button>
      <Button className='!min-w-[25px] w-[25px] !h-[15px] !text-[#000] !rounded-none hover:!bg-[#f1f1f1]' onClick={minusQty}><FaAngleDown className='text-[10px] opacity-55 font-[600]'/></Button>
      </div>
    </div>
  )
}

export default QtyBox
