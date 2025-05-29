import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/product1.jpg";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { Button } from "@mui/material";

function CartPannel() {
  return (
    <>
      <div className="scroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden py-3 px-4">
        <div className="cartitem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)] pb-4 pt-4">
          <div className="img w-[25%] overflow-hidden h-[80px] rounded-md">
            <Link to='/productDetails/:id' className="block group"><img src={img1} alt="" className="w-full group-hover:scale-105" /></Link>
          </div>

          <div className="info w-[75%] pr-2 relative">
            <h4 className="text-[14px] font-[500]">
              {" "}
              <Link to='/productDetails/:id' className="link transition-all">A-Line Kurti With Sharara & Dupatta</Link>
            </h4>

            <p className="flex items-center gap-5 mt-2 mb-2">
              <span>
                Qty: <span>2</span>
              </span>
              <span className="text-[#ff5252] font-bold">Price: Rs 250</span>
            </p>

            <MdOutlineDeleteOutline className="absolute top-[3px] right-[5px] text-[20px] cursor-pointer link transition-all" />
          </div>
        </div>

        <div className="cartitem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)] pb-4 pt-4">
          <div className="img w-[25%] overflow-hidden h-[80px] rounded-md">
            <Link to='/productDetails/:id' className="block group"><img src={img1} alt="" className="w-full group-hover:scale-105" /></Link>
          </div>

          <div className="info w-[75%] pr-2 relative">
            <h4 className="text-[14px] font-[500]">
              {" "}
              <Link to='/productDetails/:id' className="link transition-all">A-Line Kurti With Sharara & Dupatta</Link>
            </h4>

            <p className="flex items-center gap-5 mt-2 mb-2">
              <span>
                Qty: <span>2</span>
              </span>
              <span className="text-[#ff5252] font-bold">Price: Rs 250</span>
            </p>

            <MdOutlineDeleteOutline className="absolute top-[3px] right-[5px] text-[20px] cursor-pointer link transition-all" />
          </div>
        </div>

        <div className="cartitem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)] pb-4 pt-4">
          <div className="img w-[25%] overflow-hidden h-[80px] rounded-md">
            <Link to='/productDetails/:id' className="block group"><img src={img1} alt="" className="w-full group-hover:scale-105" /></Link>
          </div>

          <div className="info w-[75%] pr-2 relative">
            <h4 className="text-[14px] font-[500]">
              {" "}
              <Link to='/productDetails/:id' className="link transition-all">A-Line Kurti With Sharara & Dupatta</Link>
            </h4>

            <p className="flex items-center gap-5 mt-2 mb-2">
              <span>
                Qty: <span>2</span>
              </span>
              <span className="text-[#ff5252] font-bold">Price: Rs 250</span>
            </p>

            <MdOutlineDeleteOutline className="absolute top-[3px] right-[5px] text-[20px] cursor-pointer link transition-all" />
          </div>
        </div>

        <div className="cartitem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)] pb-4 pt-4">
          <div className="img w-[25%] overflow-hidden h-[80px] rounded-md">
            <Link to='/productDetails/:id' className="block group"><img src={img1} alt="" className="w-full group-hover:scale-105" /></Link>
          </div>

          <div className="info w-[75%] pr-2 relative">
            <h4 className="text-[14px] font-[500]">
              {" "}
              <Link to='/productDetails/:id' className="link transition-all">A-Line Kurti With Sharara & Dupatta</Link>
            </h4>

            <p className="flex items-center gap-5 mt-2 mb-2">
              <span>
                Qty: <span>2</span>
              </span>
              <span className="text-[#ff5252] font-bold">Price: Rs 250</span>
            </p>

            <MdOutlineDeleteOutline className="absolute top-[3px] right-[5px] text-[20px] cursor-pointer link transition-all" />
          </div>
        </div>
      </div>

      <div className="buttomsec absolute bottom-[10px] left-[10px] w-full pr-5">
      <div className="bottominfo px-4 py-3 w-full border-t border-[rgba(0,0,0,0.1)] flex items-center flex-col">
        <div className="flex items-center justify-between w-full">
          <span className="text-[14px] font-[600]">1 item</span>
          <span className="text-[#ff5252] font-bold">Rs 500</span>
        </div>

        <div className="flex items-center justify-between w-full">
          <span className="text-[14px] font-[600]">Shipping</span>
          <span className="text-[#ff5252] font-bold">Rs 500</span>
        </div>
      </div>

        <div className="bottominfo px-4 py-3 w-full border-t border-[rgba(0,0,0,0.1)] flex items-center flex-col">
          <div className="flex items-center justify-between w-full">
            <span className="text-[14px] font-[600]">Total (Tax excl.)</span>
            <span className="text-[#ff5252] font-bold">Rs 550</span>
          </div>

          <div className="flex items-center justify-between w-full gap-5 mt-5">
            <Link to='/cart' className="w-[50%] d-block2"><Button className="btn-org btn-lg w-full">View Cart</Button></Link>
            <Link to='/checkout' className="w-[50%] d-block2"><Button className="btn-org btn-border btn-lg w-full">Checkout</Button></Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartPannel;
