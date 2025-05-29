import { Button } from "@mui/material";
import React, { useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { GoRocket } from "react-icons/go";
import CategoryPannel from "../CategoryPannel/CategoryPannel";
import "./Navigation.css";

function Navigation() {
  const [isOpenCatPannel, setIsOpenCatPannel] = useState(false);

  const OpenCategoryPannel = () => {
    setIsOpenCatPannel(true);
  };

  return (
    <>
      <nav className="">
        <div className="container flex items-center justify-end gap-7">
          <div className="col1 w-[20%]">
            <Button
              className="!text-black gap-2 w-full"
              onClick={setIsOpenCatPannel}
            >
              <RiMenu2Fill className="text-[18px]" />
              Shop By Category
              <FaAngleDown className="text-[18px] ml-auto" />
            </Button>
          </div>

          <div className="col2 w-[60%]">
            <ul className="flex items-center gap-1.5">
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className="link transition !capitalize !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4 hover:!bg-[#fff]">
                    {" "}
                    Home{" "}
                  </Button>
                </Link>
              </li>

              <li className="list-none relative group">
                <Link to="/productlisting" className="link transition text-[14px] font-[500]">
                  <Button className="link transition !capitalize !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4 hover:!bg-[#fff]">
                    Fashion
                  </Button>
                </Link>

                <div className="submenu absolute top-full left-0 min-w-[150px] bg-white shadow-md opacity-0 invisible transition-all duration-300 translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 z-10">
                  <ul>
                    <li className="list-none w-full relative group/submenu-hover">
                      <Link to="/" className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !justify-start !rounded-none !capitalize hover:!text-[#ff5252] hover:!bg-[#fff]">
                          Men
                        </Button>
                      </Link>

                      <div className="submenu absolute top-0 left-[100%] min-w-[150px] bg-white shadow-md opacity-0 invisible transition-all duration-300 translate-y-2 group-hover/submenu-hover:opacity-100 group-hover/submenu-hover:visible group-hover/submenu-hover:translate-y-0">
                        <ul>
                          <li className="list-none w-full">
                            <Link to="/" className="w-full">
                              <Button className="!text-[rgba(0,0,0,0.8)] !capitalize w-full !justify-start !rounded-none hover:!text-[#ff5252] hover:!bg-[#fff]">
                                T-Shirt
                              </Button>
                            </Link>
                          </li>
                          <li className="list-none w-full">
                            <Link to="/" className="w-full">
                              <Button className="!text-[rgba(0,0,0,0.8)] !capitalize w-full !justify-start !rounded-none hover:!text-[#ff5252] hover:!bg-[#fff]">
                                Jeans
                              </Button>
                            </Link>
                          </li>
                          <li className="list-none w-full">
                            <Link to="/" className="w-full">
                              <Button className="!text-[rgba(0,0,0,0.8)] !capitalize w-full !justify-start !rounded-none hover:!text-[#ff5252] hover:!bg-[#fff]">
                                Footwear
                              </Button>
                            </Link>
                          </li>
                          <li className="list-none w-full">
                            <Link to="/" className="w-full">
                              <Button className="!text-[rgba(0,0,0,0.8)] !capitalize w-full !justify-start !rounded-none hover:!text-[#ff5252] hover:!bg-[#fff]">
                                Watch
                              </Button>
                            </Link>
                          </li>
                          <li className="list-none w-full">
                            <Link to="/" className="w-full">
                              <Button className="!text-[rgba(0,0,0,0.8)] !capitalize w-full !justify-start !rounded-none hover:!text-[#ff5252] hover:!bg-[#fff]">
                                Pants
                              </Button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !capitalize !justify-start !rounded-none hover:!text-[#ff5252] hover:!bg-[#fff]">
                          Women
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !capitalize !justify-start !rounded-none hover:!text-[#ff5252] hover:!bg-[#fff]">
                          Kids
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !capitalize !justify-start !rounded-none hover:!text-[#ff5252] hover:!bg-[#fff]">
                          Girls
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !capitalize !justify-start !rounded-none hover:!text-[#ff5252] hover:!bg-[#fff]">
                          Boys
                        </Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className="link transition !capitalize !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4 hover:!bg-[#fff]">
                    Electronics
                  </Button>
                </Link>
              </li>

              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className="link transition !capitalize !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4 hover:!bg-[#fff]">
                    Bags
                  </Button>
                </Link>
              </li>

              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className="link transition !capitalize !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4 hover:!bg-[#fff]">
                    Footwear
                  </Button>
                </Link>
              </li>

              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className="link transition !capitalize !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4 hover:!bg-[#fff]">
                    Groceries
                  </Button>
                </Link>
              </li>

              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className="link transition !capitalize !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4 hover:!bg-[#fff]">
                    Beauty
                  </Button>
                </Link>
              </li>

              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className="link transition !capitalize !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4 hover:!bg-[#fff]">
                    Wellness
                  </Button>
                </Link>
              </li>

              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className="link transition !capitalize !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4 hover:!bg-[#fff]">
                    Jewellery
                  </Button>
                </Link>
              </li>
            </ul>
          </div>

          <div className="col3 w-[20%]">
            <p className="text-[14px] font-[500] flex items-center gap-3 mb-0 mt-0">
              <GoRocket className="text-[18px]" />
              Free International delivery
            </p>
          </div>
        </div>
      </nav>

      <CategoryPannel
        isOpenCatPannel={isOpenCatPannel}
        setIsOpenCatPannel={setIsOpenCatPannel}
      />
    </>
  );
}

export default Navigation;
