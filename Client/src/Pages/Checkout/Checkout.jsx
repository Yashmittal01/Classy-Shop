import React from "react";
import TextField from "@mui/material/TextField";
import img from "../../assets/product1.jpg";
import { Button } from "@mui/material";
import { BsFillBagCheckFill } from "react-icons/bs";

function Checkout() {
  return (
    <section className="py-10">
      <div className="container flex gap-5">
        <div className="leftcol w-[70%]">
          <div className="card bg-white shadow-md p-5 w-full">
            <h1>Billing Details</h1>

            <form action="" className="w-full mt-5">
              <div className="flex items-center gap-5 pb-5">
                <div className="col w-[50%]">
                  <TextField
                    className="w-full"
                    label="Full Name *"
                    variant="outlined"
                    size="small"
                  />
                </div>

                <div className="col w-[50%]">
                  <TextField
                    className="w-full"
                    type="text"
                    label="Country *"
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>

              <h6 className="text-[14px] font-[500] mb-3">Street Address *</h6>
              <div className="flex items-center gap-5 pb-5">
                <div className="w-[100%]">
                  <TextField
                    className="w-full"
                    label="House number and street name"
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>

              <div className="flex items-center gap-5 pb-5">
                <div className="w-[100%]">
                  <TextField
                    className="w-full"
                    label="Apartment, suite, unit etc. (optional)"
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>

              <h6 className="text-[14px] font-[500] mb-3">Town/City *</h6>
              <div className="flex items-center gap-5 pb-5">
                <div className="w-[100%]">
                  <TextField
                    className="w-full"
                    label="city"
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>

              <h6 className="text-[14px] font-[500] mb-3">State/Country *</h6>
              <div className="flex items-center gap-5 pb-5">
                <div className="w-[100%]">
                  <TextField
                    className="w-full"
                    label="State / Country"
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>

              <h6 className="text-[14px] font-[500] mb-3">Postalcode/ZIP *</h6>
              <div className="flex items-center gap-5 pb-5">
                <div className="w-[100%]">
                  <TextField
                    className="w-full"
                    label="ZIP Code"
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>

              <div className="flex items-center gap-5 pb-5">
                <div className="col w-[50%]">
                  <TextField
                    className="w-full"
                    label="Phone number"
                    variant="outlined"
                    size="small"
                  />
                </div>

                <div className="col w-[50%]">
                  <TextField
                    className="w-full"
                    type="email"
                    label="Email Address"
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="rightcol w-[30%]">
          <div className="card shadow-md bg-white p-5 rounded-md">
            <h2 className="mb-4">Your Order</h2>

            <div className="flex items-center py-3 justify-between border-t border-b border-[rgba(0,0,0,0.1)]">
              <span className="text-[14px] font-[600]">Product</span>
              <span className="text-[14px] font-[600]">Subtotal</span>
            </div>
            <div className="scroll max-h-[250px] overflow-y-scroll overflow-x-hidden pr-2 mb-5">
              <div className="flex items-center justify-between py-2">
                <div className="part1 flex items-center gap-3">
                  <div className="img w-[70px] h-[70px] object-cover overflow-hidden rounded-md group cursor-pointer">
                    <img
                      src={img}
                      alt=""
                      className="w-full group-hover:scale-105 "
                    />
                  </div>

                  <div className="info ">
                    <h4 className="text-[14px]">A-Line Kurti</h4>
                    <span className="text-[13px]">Qty: 1</span>
                  </div>
                </div>

                <span className="text-[14px] font-[500]">Rs 2000</span>
              </div>

              <div className="flex items-center justify-between py-2">
                <div className="part1 flex items-center gap-3">
                  <div className="img w-[70px] h-[70px] object-cover overflow-hidden rounded-md group cursor-pointer">
                    <img
                      src={img}
                      alt=""
                      className="w-full group-hover:scale-105 "
                    />
                  </div>

                  <div className="info ">
                    <h4 className="text-[14px]">A-Line Kurti</h4>
                    <span className="text-[13px]">Qty: 1</span>
                  </div>
                </div>

                <span className="text-[14px] font-[500]">Rs 2000</span>
              </div>

              <div className="flex items-center justify-between py-2">
                <div className="part1 flex items-center gap-3">
                  <div className="img w-[70px] h-[70px] object-cover overflow-hidden rounded-md group cursor-pointer">
                    <img
                      src={img}
                      alt=""
                      className="w-full group-hover:scale-105 "
                    />
                  </div>

                  <div className="info ">
                    <h4 className="text-[14px]">A-Line Kurti</h4>
                    <span className="text-[13px]">Qty: 1</span>
                  </div>
                </div>

                <span className="text-[14px] font-[500]">Rs 2000</span>
              </div>

              <div className="flex items-center justify-between py-2">
                <div className="part1 flex items-center gap-3">
                  <div className="img w-[70px] h-[70px] object-cover overflow-hidden rounded-md group cursor-pointer">
                    <img
                      src={img}
                      alt=""
                      className="w-full group-hover:scale-105 "
                    />
                  </div>

                  <div className="info ">
                    <h4 className="text-[14px]">A-Line Kurti</h4>
                    <span className="text-[13px]">Qty: 1</span>
                  </div>
                </div>

                <span className="text-[14px] font-[500]">Rs 2000</span>
              </div>
            </div>

            <Button className="btn-org btn-lg w-full flex gap-2"><BsFillBagCheckFill className="text-[20px]"/>Checkout</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Checkout;
