import React, { useState } from "react";
import UploadImages from "../../Components/UploadImages/UploadImages";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { IoMdClose } from "react-icons/io";
import img from "../../assets/product-1.jpg";
import { Button, MenuItem, Select } from "@mui/material";
import { FaCloudUploadAlt } from "react-icons/fa";

function AddSubCategory() {

  const [productsubcat, setProductSubCat] = useState("");

  const handleChangeProductSubCat = (event) => {
    setProductSubCat(event.target.value);
  };

  return (
    <section className="p-5 bg-gray-50">
      <form action="" className="form p-8 py-3 max-h-[75vh] overflow-y-scroll">
        <div className="grid grid-cols-4 mb-3 gap-5">
          <div className="col">
            <h3 className="text-[14px] font-[500] mb-1 text-black">
              Product Category
            </h3>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={productsubcat}
              label="Category"
              size="small"
              onChange={handleChangeProductSubCat}
              className="w-full"
            >
              <MenuItem value={0}>None</MenuItem>
              <MenuItem value={10}>Fashion</MenuItem>
              <MenuItem value={20}>Beauty</MenuItem>
              <MenuItem value={30}>Welness</MenuItem>
            </Select>
          </div>

          <div className="col">
            <h3 className="text-[14px] font-[500] mb-1 text-black">
              Sub Category Name
            </h3>
            <input
              type="text"
              className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
            />
          </div>
        </div>

        <br />

        <Button type="submit" className="btn-org btn-lg gap-2 ">
          <FaCloudUploadAlt className="text-[25px] text-white" />
          Publish & View
        </Button>
      </form>
    </section>
  );
}

export default AddSubCategory;
