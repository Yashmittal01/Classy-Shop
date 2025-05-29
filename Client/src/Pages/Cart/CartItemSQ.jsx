import React,{ useState } from 'react'
import { Link } from "react-router-dom";
import img1 from "../../assets/product1.jpg";
import { IoCloseSharp } from "react-icons/io5";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { GoTriangleDown } from "react-icons/go";
import { Rating } from '@mui/material';

function CartItemSQ(props) {
  const [sizeanchorEl, setSizeAnchorEl] = useState(null);
  const [selectedSize, setSelectedSize] = useState(props.size)

  const openSize = Boolean(sizeanchorEl);

  const handleClickSize = (event) => {
    setSizeAnchorEl(event.currentTarget);
  };
  const handleCloseSize = (value) => {
    setSizeAnchorEl(null);
    if(value !== null){
      setSelectedSize(value);
    }   
  };

  const [qtyanchorEl, setQtyAnchorEl] = useState(null);
  const [selectedQty, setSelectedQty] = useState(props.qty)

  const openQty = Boolean(qtyanchorEl);

  const handleClickQty = (event) => {
    setQtyAnchorEl(event.currentTarget);
  };
  const handleCloseQty = (value) => {
    setQtyAnchorEl(null);
    if(value !== null){
      setSelectedQty(value);
    }   
  };

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

                <div className="flex items-center gap-4 mt-2">
                  <div className="relative">
                    <span className="flex items-center justify-center bg-[#f1f1f1] text-[11px]p-1 rounded-md font-[600] cursor-pointer py-1 px-2" onClick={handleClickSize}>
                      Size: {selectedSize} <GoTriangleDown />
                    </span>

                    <Menu
                      id="size-menu"
                      anchorEl={sizeanchorEl}
                      open={openSize}
                      onClose={()=>handleCloseSize(null)}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      <MenuItem onClick={()=>handleCloseSize('S')}>S</MenuItem>
                      <MenuItem onClick={()=>handleCloseSize('M')}>M</MenuItem>
                      <MenuItem onClick={()=>handleCloseSize('L')}>L</MenuItem>
                      <MenuItem onClick={()=>handleCloseSize('XL')}>XL</MenuItem>
                      <MenuItem onClick={()=>handleCloseSize('XXL')}>XXL</MenuItem>
                    </Menu>
                  </div>

                  <div className="relative">
                    <span className="flex items-center justify-center bg-[#f1f1f1] text-[11px]p-1 rounded-md font-[600] cursor-pointer py-1 px-2" onClick={handleClickQty}>
                      Qty: {selectedQty} <GoTriangleDown />
                    </span>

                    <Menu
                      id="qty-menu"
                      anchorEl={qtyanchorEl}
                      open={openQty}
                      onClose={()=>handleCloseQty(null)}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      <MenuItem onClick={()=>handleCloseQty(1)}>1</MenuItem>
                      <MenuItem onClick={()=>handleCloseQty(2)}>2</MenuItem>
                      <MenuItem onClick={()=>handleCloseQty(3)}>3</MenuItem>
                      <MenuItem onClick={()=>handleCloseQty(4)}>4</MenuItem>
                      <MenuItem onClick={()=>handleCloseQty(5)}>5</MenuItem>
                      <MenuItem onClick={()=>handleCloseQty(6)}>6</MenuItem>
                      <MenuItem onClick={()=>handleCloseQty(7)}>7</MenuItem>
                      <MenuItem onClick={()=>handleCloseQty(8)}>8</MenuItem>
                      <MenuItem onClick={()=>handleCloseQty(9)}>9</MenuItem>
                      <MenuItem onClick={()=>handleCloseQty(10)}>10</MenuItem>
                    </Menu>
                  </div>
                </div>

                <div className="flex items-center gap-4 mt-2">
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
              </div>
            </div>
  )
}

export default CartItemSQ
