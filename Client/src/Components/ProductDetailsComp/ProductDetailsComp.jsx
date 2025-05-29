import React, { useState } from "react";
import QtyBox from "../QtyBox/QtyBox";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { IoGitCompareOutline } from "react-icons/io5";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";

function ProductDetailsComp() {

    const [productactionindex, setProductActionIndex] = useState(null);

  return (
    <>
      <h1 className="text-[24px] font-[500] mb-2">Embroidered Satin Saree</h1>
      <div className="flex items-center gap-3">
        <span className="text-gray-400 text-[13px]">
          Brands :{" "}
          <span className="font-[500] text-black opacity-75">
            all about you
          </span>
        </span>

        <Rating name="size-small" defaultValue={4} size="small" readOnly />

        <span className="text-[13px] cursor-pointer  ">Review (5)</span>
      </div>

      <div className="flex items-center gap-4 mt-3">
        <span className="oldprice line-through text-gray-500 text-[18px] font-[500]">
          Rs.1500
        </span>

        <span className="price text-[#ff5252] text-[18px] font-[600]">
          Rs.1400
        </span>

        <span className="text-[14px]">
          Available In Stock:{" "}
          <span className="text-[14px] text-green-600 font-bold">
            147 Items
          </span>
        </span>
      </div>

      <p className="mt-3 mb-4 pr-10">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>

      <div className="flex items-center gap-3">
        <span className="text-[16px]">Size</span>
        <div className="flex items-center gap-1 actions">
          <Button
            className={`${
              productactionindex === 0 ? "!bg-[#ff5252] !text-white" : ""
            }`}
            onClick={() => setProductActionIndex(0)}
          >
            M
          </Button>
          <Button
            className={`${
              productactionindex === 1 ? "!bg-[#ff5252] !text-white" : ""
            }`}
            onClick={() => setProductActionIndex(1)}
          >
            M
          </Button>
          <Button
            className={`${
              productactionindex === 2 ? "!bg-[#ff5252] !text-white" : ""
            }`}
            onClick={() => setProductActionIndex(2)}
          >
            L
          </Button>
          <Button
            className={`${
              productactionindex === 3 ? "!bg-[#ff5252] !text-white" : ""
            }`}
            onClick={() => setProductActionIndex(3)}
          >
            XL
          </Button>
        </div>
      </div>

      <p className="text-[14px] mt-5 mb-2 text-[#000]">
        Free Shipping (Est. Delivery Time 2-3 Days)
      </p>

      <div className="flex items-center mt-4 gap-4 py-4">
        <div className="qtyboxwrapper w-[70px]">
          <QtyBox />
        </div>

        <Button className="flex gap-2 !bg-[#ff5252] !text-[#fff] hover:!bg-black !px-4 !py-2">
          <MdOutlineShoppingCart className="text-[22px]" />
          Add to Cart
        </Button>
      </div>

      <div className="flex items-center gap-4 mt-4">
        <span className="flex items-center gap-2 text-[15px] link cursor-pointer font-[500]">
          <FaRegHeart className="text-[18px]" />
          Add to Wishlist
        </span>

        <span className="flex items-center gap-2 text-[15px] link cursor-pointer font-[500]">
          <IoGitCompareOutline className="text-[18px]" />
          Add to Wishlist
        </span>
      </div>
    </>
  );
}

export default ProductDetailsComp;
