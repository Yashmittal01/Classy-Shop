import React, { useState } from "react";
import { Button, Rating } from "@mui/material";
import { BsFillBagCheckFill } from "react-icons/bs";
import CartItemSQ from "./CartItemSQ";

function Cart() {
  return (
    <section className="section py-10 pb-10">
      <div className="container w-[80%] max-w-[80%] flex gap-5">
        <div className="leftpart w-[70%]">
          <div className="shadow-md rounded-md bg-white">
            <div className="py-2 px-3 border-b border-[rgba(0,0,0,0.1)]">
              <h2>Your Cart</h2>
              <p className="mt-0">
                There are <span className="font-bold text-[#ff5252]">2</span> in
                your cart
              </p>
            </div>

            <CartItemSQ size="S" qty={1}/>
            <CartItemSQ size="S" qty={1}/>
            <CartItemSQ size="S" qty={1}/>
          </div>
        </div>

        <div className="rightpart w-[30%]">
          <div className="shadow-md rounded-md bg-white p-5">
            <h3 className="pb-3 border-b border-[rgba(0,0,0,0.1)]">
              Cart Total
            </h3>

            <p className="flex items-center justify-between">
              <span className="text-[14px] font-[500]">Subtotal</span>
              <span className="font-bold text-[#ff5252]">Rs 10,000.00</span>
            </p>

            <p className="flex items-center justify-between">
              <span className="text-[14px] font-[500]">Shipping</span>
              <span className="font-bold">Free</span>
            </p>

            <p className="flex items-center justify-between">
              <span className="text-[14px] font-[500]">Estimate for</span>
              <span className="font-bold">Nepal</span>
            </p>

            <p className="flex items-center justify-between">
              <span className="text-[14px] font-[500]">Total</span>
              <span className="font-bold text-[#ff5252]">Rs 10,500</span>
            </p>

            <Button className="btn-org btn-lg w-full !mt-5 gap-2 flex">
              <BsFillBagCheckFill className="text-[20px]" />
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
