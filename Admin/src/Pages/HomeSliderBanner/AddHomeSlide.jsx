import React from "react";
import UploadImages from "../../Components/UploadImages/UploadImages";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { IoMdClose } from "react-icons/io";
import img from "../../assets/product-1.jpg";
import { Button } from "@mui/material";
import { FaCloudUploadAlt } from "react-icons/fa";

function AddHomeSlide() {
  return (
    <section className="p-5 bg-gray-50">
      <form
        action=""
        className="form p-8 py-3 max-h-[75vh] overflow-y-scroll"
      >
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

export default AddHomeSlide;
