import React, { useState } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import ProductZoom from "../ProductZoom/ProductZoom";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import "./ProductDetails.css";
import img1 from "../../assets/product1.jpg";
import TextField from "@mui/material/TextField";
import ProductSlider from "../ProductSlider/ProductSlider";
import ProductDetailsComp from "../ProductDetailsComp/ProductDetailsComp";

function ProductDetails() {
  const [activetab, setActiveTab] = useState(0);

  return (
    <>
      <div className="py-5">
        <div className="container px-4 md:px-6">
          <Breadcrumbs aria-label="breadcrumb" className="overflow-x-auto whitespace-nowrap">
            <Link
              underline="hover"
              color="inherit"
              href="/"
              className="link transition"
            >
              Home
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/"
              className="link transition"
            >
              Fashion
            </Link>
            <Link underline="hover" color="inherit" className="link transition">
              Embroidered Satin Saree
            </Link>
          </Breadcrumbs>
        </div>
      </div>

      <section className="bg-white py-5">
        <div className="container px-4 md:px-6">
          {/* Product main section - Stack on mobile, side by side on larger screens */}
          <div className="flex flex-col md:flex-row md:gap-8 items-start md:items-center">
            <div className="productzoomcontainer w-full md:w-1/2 lg:w-2/5 mb-6 md:mb-0">
              <ProductZoom />
            </div>

            <div className="productcontent w-full md:w-1/2 lg:w-3/5 px-0 md:pl-6">
              <ProductDetailsComp />
            </div>
          </div>

          {/* Tabs Section */}
          <div className="py-10">
            <div className="flex flex-wrap items-center gap-4 overflow-x-auto mb-4">
              <span
                className={`link text-base md:text-lg cursor-pointer font-medium ${
                  activetab === 0 && "text-[#ff5252]"
                }`}
                onClick={() => setActiveTab(0)}
              >
                Description
              </span>

              <span
                className={`link text-base md:text-lg cursor-pointer font-medium ${
                  activetab === 1 && "text-[#ff5252]"
                }`}
                onClick={() => setActiveTab(1)}
              >
                Product
              </span>

              <span
                className={`link text-base md:text-lg cursor-pointer font-medium ${
                  activetab === 2 && "text-[#ff5252]"
                }`}
                onClick={() => setActiveTab(2)}
              >
                Reviews (5)
              </span>
            </div>

            {activetab === 0 && (
              <div className="shadow-md w-full rounded-md py-4 px-4 md:px-8">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a galley
                  of type and scrambled it to make a type specimen book.
                </p>

                <h4 className="mt-4 text-lg font-medium">Lightweight Design</h4>

                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a galley
                  of type and scrambled it to make a type specimen book.
                </p>

                <h4 className="mt-4 text-lg font-medium">Free Shipping & Return</h4>

                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry.
                </p>

                <h4 className="mt-4 text-lg font-medium">Money Back Gurantee</h4>

                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry.
                </p>

                <h4 className="mt-4 text-lg font-medium">Online Support</h4>

                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry.
                </p>
              </div>
            )}

            {activetab === 1 && (
              <div className="shadow-md w-full rounded-md py-4 px-4 md:px-8">
                <div className="relative overflow-x-auto">
                  <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead className="text-xs text-gray-950 uppercase bg-gray-50">
                      <tr>
                        <th scope="col" className="px-3 py-3 md:px-6">
                          Stand up
                        </th>
                        <th scope="col" className="px-3 py-3 md:px-6">
                          folded (w/o wheels)
                        </th>
                        <th scope="col" className="px-3 py-3 md:px-6">
                          folded (w/wheels)
                        </th>
                        <th scope="col" className="px-3 py-3 md:px-6">
                          door pass through
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b border-opacity-10">
                        <th
                          scope="row"
                          className="px-3 py-3 md:px-6 md:py-4 font-medium text-gray-900 whitespace-nowrap"
                        >
                          Apple MacBook Pro 17"
                        </th>
                        <td className="px-3 py-3 md:px-6 md:py-4">Silver</td>
                        <td className="px-3 py-3 md:px-6 md:py-4">Laptop</td>
                        <td className="px-3 py-3 md:px-6 md:py-4">$2999</td>
                      </tr>
                      <tr className="bg-white border-b border-opacity-10">
                        <th
                          scope="row"
                          className="px-3 py-3 md:px-6 md:py-4 font-medium text-gray-900 whitespace-nowrap"
                        >
                          Microsoft Surface Pro
                        </th>
                        <td className="px-3 py-3 md:px-6 md:py-4">White</td>
                        <td className="px-3 py-3 md:px-6 md:py-4">Laptop PC</td>
                        <td className="px-3 py-3 md:px-6 md:py-4">$1999</td>
                      </tr>
                      <tr className="bg-white border-b border-opacity-10">
                        <th
                          scope="row"
                          className="px-3 py-3 md:px-6 md:py-4 font-medium text-gray-900 whitespace-nowrap"
                        >
                          Magic Mouse 2
                        </th>
                        <td className="px-3 py-3 md:px-6 md:py-4">Black</td>
                        <td className="px-3 py-3 md:px-6 md:py-4">Accessories</td>
                        <td className="px-3 py-3 md:px-6 md:py-4">$99</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activetab === 2 && (
              <div className="shadow-md w-full rounded-md py-4 px-4 md:px-8">
                <div className="w-full productreviewcont">
                  <h2 className="text-lg md:text-xl font-medium">Customer question & answer</h2>

                  <div className="scroll w-full max-h-[300px] overflow-y-auto overflow-x-hidden mt-5 pr-0 md:pr-5">
                    {/* Review Item */}
                    {[1, 2, 3, 4].map((_, index) => (
                      <div key={index} className="review pt-4 pb-4 border-b border-opacity-10 w-full flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <div className="info w-full sm:w-3/5 flex flex-col sm:flex-row sm:items-center gap-3 mb-3 sm:mb-0">
                          <div className="img w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 overflow-hidden rounded-full">
                            <img src={img1} alt="" className="w-full" />
                          </div>

                          <div className="w-full sm:w-4/5">
                            <h4 className="text-base md:text-lg">Raman Viru</h4>
                            <h5 className="text-xs md:text-sm mb-0">2025-03-14</h5>
                            <p className="mt-0 mb-0">Nice Product</p>
                          </div>
                        </div>

                        <Rating name="size-small" defaultValue={2} readOnly />
                      </div>
                    ))}
                  </div>

                  <div className="mt-6">
                    <div className="reviewform bg-[#fafafa] p-4 rounded-md">
                      <h2 className="text-lg md:text-xl font-medium">Add a review</h2>

                      <form action="" className="w-full mt-4">
                        <TextField
                          id="outlined-multiline-flexible"
                          label="write a review"
                          className="w-full"
                          multiline
                          rows={5}
                        />
                        <div className="raring mt-4">
                          <Rating name="size-small" defaultValue={2} />
                        </div>

                        <div className="flex items-center mt-4">
                          <Button className="!bg-[#ff5252] hover:!bg-[#000] !py-2 !text-white !px-4">
                            Submit Review
                          </Button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Related Products Section */}
          <div>
            <h2 className="text-lg md:text-xl font-semibold mb-4">Related Product</h2>
            <ProductSlider items={5} />
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductDetails;