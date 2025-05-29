import React from "react";
import UploadImages from "../../Components/UploadImages/UploadImages";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { IoMdClose } from "react-icons/io";
import img from "../../assets/product-1.jpg";
import { Button } from "@mui/material";
import { FaCloudUploadAlt } from "react-icons/fa";

function AddCategory() {
  return (
    <section className="p-5 bg-gray-50">
      <form
        action=""
        className="form p-8 py-3 max-h-[75vh] overflow-y-scroll"
      >

<div className="grid grid-cols-1 mb-3">
          <div className="col w-[25%]">
            <h3 className="text-[14px] font-[500] mb-1 text-black">
              Category Name
            </h3>
            <input
              type="text"
              className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
            />
          </div>
        </div>

        <br />

        <h3 className="text-[18px] font-[600] mb-1 text-black">
              Category Image
            </h3>

            <br />

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

            <UploadImages multiple={true} />
          </div>

          <br />

        <Button type="submit" className="btn-org btn-lg gap-2 "><FaCloudUploadAlt className="text-[25px] text-white"/>Publish & View</Button>
      </form>
    </section>
  );
}

export default AddCategory;
