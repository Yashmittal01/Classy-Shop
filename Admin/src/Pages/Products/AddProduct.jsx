import React, { useState } from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button, Rating } from "@mui/material";
import UploadImages from "../../Components/UploadImages/UploadImages";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import img from "../../assets/product-1.jpg";
import { IoMdClose } from "react-icons/io";
import { FaCloudUploadAlt } from "react-icons/fa";

function AddProduct() {
  const [productcat, setProductCat] = useState("");
  const [productsubcat, setProductSubCat] = useState("");
  const [productfeatured, setProductFeatured] = useState("");
  const [productRam, setProductRam] = useState("");
  const [productWeight, setProductWeight] = useState("");
  const [productSize, setProductSize] = useState("");

  const handleChangeProductCat = (event) => {
    setProductSubCat(event.target.value);
  };

  const handleChangeProductSubCat = (event) => {
    setProductCat(event.target.value);
  };

  const handleChangeProductFeatured = (event) => {
    setProductFeatured(event.target.value);
  };

  const handleChangeProductRam = (event) => {
    setProductRam(event.target.value);
  };

  const handleChangeProductWeight = (event) => {
    setProductWeight(event.target.value);
  };

  const handleChangeProductSize = (event) => {
    setProductSize(event.target.value);
  };

  return (
    <section className="p-5 bg-gray-50">
      <form action="" className="form p-8 py-3 max-h-[75vh] overflow-y-scroll">
        <div className="grid grid-cols-1 mb-3">
          <div className="col">
            <h3 className="text-[14px] font-[500] mb-1 text-black">
              Product Name
            </h3>
            <input
              type="text"
              className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 mb-3">
          <div className="col">
            <h3 className="text-[14px] font-[500] mb-1 text-black">
              Product Description
            </h3>
            <textarea
              type="text"
              className="w-full h-[140px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-4 mb-3 gap-4">
          <div className="col">
            <h3 className="text-[14px] font-[500] mb-1 text-black">
              Product Category
            </h3>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={productcat}
              label="Category"
              size="small"
              onChange={handleChangeProductCat}
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
              Product Sub Category
            </h3>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={productsubcat}
              label="Sub Category"
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
              Product Price
            </h3>
            <input
              type="number"
              className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
            />
          </div>

          <div className="col">
            <h3 className="text-[14px] font-[500] mb-1 text-black">
              Product old Price
            </h3>
            <input
              type="number"
              className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-3">
          <div className="col">
            <h3 className="text-[14px] font-[500] mb-1 text-black">
              Is Featured
            </h3>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={productfeatured}
              label="Category"
              size="small"
              onChange={handleChangeProductFeatured}
              className="w-full"
            >
              <MenuItem value={20}>True</MenuItem>
              <MenuItem value={30}>False</MenuItem>
            </Select>
          </div>

          <div className="col">
            <h3 className="text-[14px] font-[500] mb-1 text-black">
              Product Stock
            </h3>
            <input
              type="number"
              className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
            />
          </div>

          <div className="col">
            <h3 className="text-[14px] font-[500] mb-1 text-black">
              Product Brand
            </h3>
            <input
              type="text"
              className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
            />
          </div>

          <div className="col">
            <h3 className="text-[14px] font-[500] mb-1 text-black">
              Product Discount
            </h3>
            <input
              type="number"
              className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-3">
          <div className="col">
            <h3 className="text-[14px] font-[500] mb-1 text-black">
              Product RAMS
            </h3>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={productRam}
              label="Category"
              size="small"
              onChange={handleChangeProductRam}
              className="w-full"
            >
              <MenuItem value={"4GB"}>4GB</MenuItem>
              <MenuItem value={"6GB"}>6GB</MenuItem>
              <MenuItem value={"6GB"}>8GB</MenuItem>
            </Select>
          </div>

          <div className="col">
            <h3 className="text-[14px] font-[500] mb-1 text-black">
              Product Weight
            </h3>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={productWeight}
              label="Category"
              size="small"
              onChange={handleChangeProductWeight}
              className="w-full"
            >
              <MenuItem value={0}>None</MenuItem>
              <MenuItem value={10}>2KG</MenuItem>
              <MenuItem value={20}>4KG</MenuItem>
              <MenuItem value={30}>5KG</MenuItem>
            </Select>
          </div>

          <div className="col">
            <h3 className="text-[14px] font-[500] mb-1 text-black">
              Product Size
            </h3>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={productSize}
              label="Category"
              size="small"
              onChange={handleChangeProductSize}
              className="w-full"
            >
              <MenuItem value={0}>None</MenuItem>
              <MenuItem value={"S"}>S</MenuItem>
              <MenuItem value={"M"}>M</MenuItem>
              <MenuItem value={"L"}>L</MenuItem>
            </Select>
          </div>

          <div className="col">
            <h3 className="text-[14px] font-[500] mb-1 text-black">
              Product Rating
            </h3>
            <Rating name="size-small" defaultValue={2.5} size="small" />
          </div>
        </div>

        <div className="col w-full p-5 px-0">
          <h3 className="text-[18px] font-[600] mb-2">Media & Images</h3>

          <div className="grid grid-cols-7 gap-4">
            <div className="uploadimagewrapper relative">
              <span className="absolute w-[25px] h-[25px] rounded-full overflow-hidden bg-red-700  -top-[5px] -right-[5px] flex items-center justify-center z-50 cursor-pointer"><IoMdClose className="text-white text-[20px]"/></span>
            <div
              className="uploadimaged p-0 rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)]
                h-[150px] w-full bg-gray-100 cursor-pointer hover:bg-gray-200 flex items-center justify-center flex-col relative"
            >
              <LazyLoadImage
                alt={"image"}
                className="w-full h-full object-cover"
                effect="blur"
                src={img}
                wrapperProps={{
                  // If you need to, you can tweak the effect transition using the wrapper style.
                  style: { transitionDelay: "1s" },
                }}
              />
            </div>
            </div>

            <div className="uploadimagewrapper relative">
              <span className="absolute w-[25px] h-[25px] rounded-full overflow-hidden bg-red-700  -top-[5px] -right-[5px] flex items-center justify-center z-50 cursor-pointer"><IoMdClose className="text-white text-[20px]"/></span>
            <div
              className="uploadimaged p-0 rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)]
                h-[150px] w-full bg-gray-100 cursor-pointer hover:bg-gray-200 flex items-center justify-center flex-col relative"
            >
              <LazyLoadImage
                alt={"image"}
                className="w-full h-full object-cover"
                effect="blur"
                src={img}
                wrapperProps={{
                  // If you need to, you can tweak the effect transition using the wrapper style.
                  style: { transitionDelay: "1s" },
                }}
              />
            </div>
            </div>

            <div className="uploadimagewrapper relative">
              <span className="absolute w-[25px] h-[25px] rounded-full overflow-hidden bg-red-700  -top-[5px] -right-[5px] flex items-center justify-center z-50 cursor-pointer"><IoMdClose className="text-white text-[20px]"/></span>
            <div
              className="uploadimaged p-0 rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)]
                h-[150px] w-full bg-gray-100 cursor-pointer hover:bg-gray-200 flex items-center justify-center flex-col relative"
            >
              <LazyLoadImage
                alt={"image"}
                className="w-full h-full object-cover"
                effect="blur"
                src={img}
                wrapperProps={{
                  // If you need to, you can tweak the effect transition using the wrapper style.
                  style: { transitionDelay: "1s" },
                }}
              />
            </div>
            </div>

            <div className="uploadimagewrapper relative">
              <span className="absolute w-[25px] h-[25px] rounded-full overflow-hidden bg-red-700  -top-[5px] -right-[5px] flex items-center justify-center z-50 cursor-pointer"><IoMdClose className="text-white text-[20px]"/></span>
            <div
              className="uploadimaged p-0 rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)]
                h-[150px] w-full bg-gray-100 cursor-pointer hover:bg-gray-200 flex items-center justify-center flex-col relative"
            >
              <LazyLoadImage
                alt={"image"}
                className="w-full h-full object-cover"
                effect="blur"
                src={img}
                wrapperProps={{
                  // If you need to, you can tweak the effect transition using the wrapper style.
                  style: { transitionDelay: "1s" },
                }}
              />
            </div>
            </div>

            <UploadImages multiple={true} />
          </div>
        </div>

        <br />

        <Button type="submit" className="btn-org btn-lg gap-2 "><FaCloudUploadAlt className="text-[25px] text-white"/>Publish & View</Button>
      </form>
    </section>
  );
}

export default AddProduct;
