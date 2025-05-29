import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import { IoClose } from "react-icons/io5";
import { Button } from "@mui/material";
import { FaRegSquarePlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FiMinusSquare } from "react-icons/fi";
import { Collapse } from "react-collapse";

function CategoryPannel({ isOpenCatPannel, setIsOpenCatPannel }) {
  const [submenuIndex, setSubMenuIndex] = useState(null);

  const [InnersubmenuIndex, setInnerSubMenuIndex] = useState(null);

  const openSubmenu = (index) => {
    if (submenuIndex === index) {
      setSubMenuIndex(null);
    } else {
      setSubMenuIndex(index);
    }
  };

  const openInnersubmenu = (index) => {
    if (InnersubmenuIndex === index) {
      setInnerSubMenuIndex(null);
    } else {
      setInnerSubMenuIndex(index);
    }
  };

  const DrawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      // onClick={() => setIsOpenCatPannel(false)}
    >
      <h3 className="p-3 text-[16px] font-[500] flex items-center justify-between">
        Shop By Category
        <IoClose
          className="cursor-pointer text-[20px]"
          onClick={() => setIsOpenCatPannel(false)}
        />
      </h3>

      <Divider />

      <div className="list">
        <ul className="w-full">
          <li className="list-none flex items-center relative flex-col">
            <Link to="/" className="w-full">
              <Button className="!capitalize w-full !text-left !justify-start !text-[rgba(0,0,0,0.8)]">
                Fashion
              </Button>
            </Link>

            {submenuIndex === 0 ? (
              <FiMinusSquare
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(0)}
              />
            ) : (
              <FaRegSquarePlus
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(0)}
              />
            )}

            {submenuIndex === 0 && (
              <ul className="submenu w-full pl-3">
                <li className="list-none relative">
                  <Link to="/" className="w-full">
                    <Button className="!capitalize w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                      Apparel
                    </Button>
                  </Link>
                  {InnersubmenuIndex === 0 ? (
                    <FiMinusSquare
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnersubmenu(0)}
                    />
                  ) : (
                    <FaRegSquarePlus
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnersubmenu(0)}
                    />
                  )}

                  {InnersubmenuIndex === 0 && (
                    <ul className="Inner-submenu w-full pl-3">
                      <li className="list-none relative mb-1">
                        <Link className="link !capitalize w-full !text-left !justify-start !px-3 transition text-[14px]">
                          Smart Tablet
                        </Link>
                      </li>

                      <li className="list-none relative mb-1">
                        <Link className="link !capitalize w-full !text-left !justify-start !px-3 transition text-[14px]">
                          Crepe T-Shirt
                        </Link>
                      </li>

                      <li className="list-none relative mb-1">
                        <Link className="link !capitalize w-full !text-left !justify-start !px-3 transition text-[14px]">
                          Leather Watch
                        </Link>
                      </li>

                      <li className="list-none relative mb-1">
                        <Link className="link !capitalize w-full !text-left !justify-start !px-3 transition text-[14px]">
                          Rolling Diamond
                        </Link>
                      </li>
                    </ul> 
                  )}
                </li>
              </ul>
              
            )}
          </li>

          <li className="list-none flex items-center relative flex-col">
            <Link to="/" className="w-full">
              <Button className="!capitalize w-full !text-left !justify-start !text-[rgba(0,0,0,0.8)]">
                Footwear
              </Button>
            </Link>

            {submenuIndex === 1 ? (
              <FiMinusSquare
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(1)}
              />
            ) : (
              <FaRegSquarePlus
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(1)}
              />
            )}

            {submenuIndex === 1 && (
              <ul className="submenu w-full pl-3">
                <li className="list-none relative">
                  <Link to="/" className="w-full">
                    <Button className="!capitalize w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                      Apparel
                    </Button>
                  </Link>
                  {InnersubmenuIndex === 1 ? (
                    <FiMinusSquare
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnersubmenu(1)}
                    />
                  ) : (
                    <FaRegSquarePlus
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnersubmenu(1)}
                    />
                  )}

                  {InnersubmenuIndex === 1 && (
                    <ul className="Inner-submenu w-full pl-3">
                      <li className="list-none relative mb-1">
                        <Link className="link !capitalize w-full !text-left !justify-start !px-3 transition text-[14px]">
                          Smart Tablet
                        </Link>
                      </li>

                      <li className="list-none relative mb-1">
                        <Link className="link !capitalize w-full !text-left !justify-start !px-3 transition text-[14px]">
                          Crepe T-Shirt
                        </Link>
                      </li>

                      <li className="list-none relative mb-1">
                        <Link className="link !capitalize w-full !text-left !justify-start !px-3 transition text-[14px]">
                          Leather Watch
                        </Link>
                      </li>

                      <li className="list-none relative mb-1">
                        <Link className="link !capitalize w-full !text-left !justify-start !px-3 transition text-[14px]">
                          Rolling Diamond
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </Box>
  );

  return (
    <Drawer open={isOpenCatPannel} onClose={() => setIsOpenCatPannel(false)}>
      {DrawerList}
    </Drawer>
  );
}

export default CategoryPannel;
