import React, { useContext } from "react";
import img1 from "../../assets/product1.jpg";
import imgof1 from '../../assets/productof1.jpg'
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import { FaRegHeart } from "react-icons/fa";
import { MdZoomOutMap } from "react-icons/md";
import { IoGitCompareOutline } from "react-icons/io5";
import "./ProductItem.css";
import { MyContext } from "../../App";

function ProductItem() {

  const context = useContext(MyContext)

  return (
    <div className="productitem border-1 overflow-hidden shadow-md rounded-md border-[rgba(0,0,0,0.1)]">
      <div className="group imgwrapper w-[100%] overflow-hidden rounded-md relative">
        <Link to="/productDetails/:id">
          <div className="img h-[220px] overflow-hidden">
            <img src={img1} alt="" className="w-full" />
            <img src={imgof1} alt="" className="w-full absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105" />
          </div>
        </Link>

        <span className="discount flex items-center absolute top-[10px] left-[10px] z-50 bg-[#ff5252] text-white rounded-lg text-[12px] font-[500] p-1">
          10%
        </span>

        <div className="actions absolute top-[-200px] right-[-12px] z-50 flex items-center gap-2 flex-col w-[80px] transition-all duration-300 group-hover:top-[10px] opacity-0 group-hover:opacity-100">
          <Button className="group/btn-hover !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white hover:!bg-[#ff5252] hover:!text-white !text-black group" onClick={()=>context.setOpenProductDetailModal(true)}>
            <MdZoomOutMap className="text-[18px] !text-black group-hover/btn-hover:!text-white !pointer-events-none" />
          </Button>

          <Button className="group/btn-hover !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white hover:!bg-[#ff5252] hover:!text-white !text-black group">
            <IoGitCompareOutline className="text-[18px] !text-black group-hover/btn-hover:!text-white !pointer-events-none" />
          </Button>

          <Button className="group/btn-hover !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white hover:!bg-[#ff5252] hover:!text-white !text-black group">
            <FaRegHeart className="text-[18px] !text-black group-hover/btn-hover:!text-white !pointer-events-none" />
          </Button>
        </div>
      </div>

      <div className="info p-3 py-5">
        <h6 className="text-[13px] !font-[400]">
          <Link to="/productDetails/:id" className="link">
            Sangria
          </Link>
        </h6>
        <h3 className="text-[13px] title mt-2 font-[500] text-black mb-1">
          <Link to="/productDetails/:id" className="link transition-all">
            A-Line Kurti With Sharara & Dupatta
          </Link>
        </h3>

        <Rating name="size-small" defaultValue={2} size="small" readOnly />

        <div className="flex items-center gap-4">
          <span className="oldprising line-through text-gray-500 text-[15px] font-[500]">
            Rs.500
          </span>
          <span className="newprise text-[#ff5252] font-[600] text-[15px]">
            Rs.500
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
