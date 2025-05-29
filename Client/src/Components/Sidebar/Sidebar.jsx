import React, { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "./Sidebar.css";
import { Collapse } from "react-collapse";
import { FaAngleDown } from "react-icons/fa6";
import { Button } from "@mui/material";
import { FaAngleUp } from "react-icons/fa6";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import Rating from '@mui/material/Rating';

function Sidebar() {
  const [isopencategoryfilter, setIsOpenCategoryfilter] = useState(true);
  const [isopenavalcatfilter, setIsOpenAvalCatFilter] = useState(true);
  const [isopensizefilter, setIsOpenSizeFilter] = useState(true);

  return (
    <aside className="sidebar py-5">
      <div className="box">
        <h3 className="mb-3 text-[16px] font-[600] flex items-center">
          Shop by Category
          <Button
            className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-black"
            onClick={() => setIsOpenCategoryfilter(!isopencategoryfilter)}
          >
            {isopencategoryfilter === true ? <FaAngleUp /> : <FaAngleDown />}
          </Button>
        </h3>
        <Collapse isOpened={isopencategoryfilter}>
          <div className="scroll px-3 relative -left-[13px]">
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Fashion"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Electronics"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Bags"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Footwear"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Groceries"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Beauty"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Wellness"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Jwellery"
              className="w-full"
            />
          </div>
        </Collapse>
      </div>

      <div className="box">
        <h3 className="mb-3 text-[16px] font-[600] flex items-center">
          Availability
          <Button
            className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-black"
            onClick={() => setIsOpenAvalCatFilter(!isopenavalcatfilter)}
          >
            {isopenavalcatfilter === true ? <FaAngleUp /> : <FaAngleDown />}
          </Button>
        </h3>
        <Collapse isOpened={isopenavalcatfilter}>
          <div className="scroll px-3 relative -left-[13px]">
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Available (17)"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="In Stock (10)"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Not Available (1)"
              className="w-full"
            />
          </div>
        </Collapse>
      </div>

      <div className="box mt-3">
        <h3 className="mb-3 text-[16px] font-[600] flex items-center">
          Size
          <Button
            className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-black"
            onClick={() => setIsOpenSizeFilter(!isopensizefilter)}
          >
            {isopensizefilter === true ? <FaAngleUp /> : <FaAngleDown />}
          </Button>
        </h3>
        <Collapse isOpened={isopensizefilter}>
          <div className="scroll px-3 relative -left-[13px]">
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Small (17)"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Medium (10)"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Large (1)"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="XL (1)"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="XXL (1)"
              className="w-full"
            />
          </div>
        </Collapse>
      </div>

      <div className="box mt-4">
        <h3 className="mb-3 text-[16px] font-[600] flex items-center">
          Filter by Price
        </h3>
        <RangeSlider />

        <div className="flex pt-4 pb-2 pricerange">
          <span className="text-[13px]">
            From: <strong className="text-dark">Rs: {1} </strong>
          </span>
          <span className="ml-auto text-[13px]">
            From: <strong className="text-dark">Rs: {100} </strong>
          </span>
        </div>
      </div>

      <div className="box mt-4">
        <h3 className="mb-3 text-[16px] font-[600] flex items-center">
          Filter by Rating
        </h3>
        <div className="w-full">
        <Rating name="size-small" defaultValue={5} size="small" readOnly/>
        </div>
        <div className="w-full">
        <Rating name="size-small" defaultValue={4} size="small" readOnly/>
        </div>
        <div className="w-full">
        <Rating name="size-small" defaultValue={3} size="small" readOnly/>
        </div>
        <div className="w-full">
        <Rating name="size-small" defaultValue={2} 
        size="small" readOnly/>
        </div>
        <div className="w-full">
        <Rating name="size-small" defaultValue={1} size="small" readOnly/>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
