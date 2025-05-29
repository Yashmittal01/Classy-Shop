import React from 'react'
import { Link } from "react-router-dom";
import img1 from "../../assets/product1.jpg";
import { IoCloseSharp } from "react-icons/io5";
import { Button, Rating } from '@mui/material';

function MyListItems(props) {

  return (
    <div className="cartitem w-full p-3 flex items-center gap-4 pb-5 border-b border-[rgba(0,0,0,0.1)]">
              <div className="img w-[15%] rounded-md overflow-hidden">
                <Link to="/productDetails/:id" className="block group">
                  <img
                    src={img1}
                    alt=""
                    className="w-full group-hover:scale-105 transition-all"
                  />
                </Link>
              </div>

              <div className="info w-[85%] relative">
                <IoCloseSharp className="cursor-pointer absolute top-[0px] right-[0px] text-[22px] link transition-all" />
                <span className="text-[13px]">Sangria</span>
                <h3 className="text-[15px]">
                  {" "}
                  <Link
                    to="/productDetails/:id"
                    className="link transition-all"
                  >
                    A-Line Kurti With Sharara & Dupatta
                  </Link>
                </h3>

                <Rating
                  name="size-small"
                  defaultValue={2}
                  size="small"
                  readOnly
                />

                <div className="flex items-center gap-4 mt-2 mb-2">
                  <span className="newprise font-[600] text-[14px]">
                    Rs.500
                  </span>

                  <span className="oldprising line-through text-gray-500 text-[14px] font-[500]">
                    Rs.500
                  </span>

                  <span className="newprise text-[#ff5252] font-[600] text-[14px]">
                    30% OFF
                  </span>
                </div>

                <Button className='btn-org btn-sm'>Add to cart</Button>
              </div>
            </div>
  )
}

export default MyListItems
