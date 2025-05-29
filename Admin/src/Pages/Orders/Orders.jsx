import React, { useContext, useState } from "react";
import Badges from "../../Components/Badges/Badges";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { Button } from "@mui/material";
import { MyContext } from "../../App";
import SearchBox from "../../Components/SearchBox/SearchBox";
import img from "../../assets/shop-illustration.webp";

function Orders() {
  const [isOpenOrderedProduct, setIsOpenOrderedProduct] = useState(null);

  const isShowOrderedProduct = (index) => {
    if (isOpenOrderedProduct === index) {
      setIsOpenOrderedProduct(null);
    } else {
      setIsOpenOrderedProduct(index);
    }
  };

  const context = useContext(MyContext)

  return (
    <div
      className={`py-5 p-5 ${
        context.isSidebarOpen === false ? "w-full" : "w-full pl-72"
      }`}
    >
      <div className="card my-2 shadow-md sm:rounded-lg bg-white">
        <div className="flex items-center justify-between px-5 py-5">
          <h2 className="text-[20px] font-[600]">Recent Orders</h2>
          <div className="w-[30%]">
          <SearchBox />
          </div>
        </div>
        <div className="relative overflow-x-auto mt-5 pb-5">
          <table className="w-full text-sm text-left rtl:text-right text-gray-700">
            <thead className="text-xs text-gray-950 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-3 py-3 md:px-6">
                  &nbsp;
                </th>
                <th scope="col" className="px-3 py-3 md:px-6 whitespace-nowrap">
                  Order Id
                </th>
                <th scope="col" className="px-3 py-3 md:px-6 whitespace-nowrap">
                  Payment Id
                </th>
                <th scope="col" className="px-3 py-3 md:px-6 whitespace-nowrap">
                  Name
                </th>
                <th scope="col" className="px-3 py-3 md:px-6 whitespace-nowrap">
                  Phone Number
                </th>
                <th scope="col" className="px-3 py-3 md:px-6 whitespace-nowrap">
                  Address
                </th>
                <th scope="col" className="px-3 py-3 md:px-6 whitespace-nowrap">
                  Pincode
                </th>
                <th scope="col" className="px-3 py-3 md:px-6 whitespace-nowrap">
                  Total Amount
                </th>
                <th scope="col" className="px-3 py-3 md:px-6 whitespace-nowrap">
                  Email
                </th>
                <th scope="col" className="px-3 py-3 md:px-6 whitespace-nowrap">
                  User Id
                </th>
                <th scope="col" className="px-3 py-3 md:px-6 whitespace-nowrap">
                  Order Status
                </th>
                <th scope="col" className="px-3 py-3 md:px-6 whitespace-nowrap">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b border-[rgba(0,0,0,0.1)]">
                <td className="px-6 py-4 font-[500]">
                  <Button
                    className="!w-[35px] !h-[35px] !min-w-[40px] !rounded-full !bg-[#f1f1f1] !text-black"
                    onClick={() => isShowOrderedProduct(0)}
                  >
                    {isOpenOrderedProduct === 0 ? (
                      <FaAngleUp className="text-[18px] text-[rgba(0,0,0,0.7)]" />
                    ) : (
                      <FaAngleDown className="text-[18px] text-[rgba(0,0,0,0.7)]" />
                    )}
                  </Button>
                </td>
                <td className="px-6 py-4 font-[500]">
                  <span className="text-[#ff5252]">6788478bvbb</span>
                </td>
                <td className="px-6 py-4 font-[500]">
                  <span className="text-[#ff5252]">pay_574jfdhg</span>
                </td>
                <td className="px-6 py-4 font-[500] whitespace-nowrap">
                  Raj shah
                </td>
                <td className="px-6 py-4 font-[500]">9865465465</td>
                <td className="px-6 py-4 font-[500]">
                  <span className="block w-[250px]">
                    H No 222 Street No 6 Adarshnagar kathmandu near shivam
                    hospital
                  </span>
                </td>
                <td className="px-6 py-4 font-[500]">36000</td>
                <td className="px-6 py-4 font-[500]">4500</td>
                <td className="px-6 py-4 font-[500]">raj12@gmail.com</td>
                <td className="px-6 py-4 font-[500]">
                  <span className="text-[#ff5252]">67nv76gdjk7</span>
                </td>
                <td className="px-6 py-4 font-[500]">
                  <Badges status="pending" />
                </td>
                <td className="px-6 py-4 font-[500] whitespace-nowrap">
                  2025-01-23
                </td>
              </tr>

              {isOpenOrderedProduct === 0 && (
                <tr>
                  <td className="pl-20" colSpan="6">
                    <div className="relative overflow-x-auto ">
                      <table className="w-full text-sm text-left rtl:text-right text-gray-700">
                        <thead className="text-xs text-gray-950 uppercase bg-gray-50">
                          <tr>
                            <th
                              scope="col"
                              className="px-3 py-3 md:px-6 whitespace-nowrap"
                            >
                              Product Id
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3 md:px-6 whitespace-nowrap"
                            >
                              Product Title
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3 md:px-6 whitespace-nowrap"
                            >
                              Image
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3 md:px-6 whitespace-nowrap"
                            >
                              Quantity
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3 md:px-6 whitespace-nowrap"
                            >
                              Price
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3 md:px-6 whitespace-nowrap"
                            >
                              SubTotal
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="bg-white border-b border-[rgba(0,0,0,0.1)]">
                            <td className="px-6 py-4 font-[500]">
                              <span className="text-gray-600">6788478bvbb</span>
                            </td>
                            <td className="px-6 py-4 font-[500]">
                              A-Line Kurti with Sharara & Du..
                            </td>
                            <td className="px-6 py-4 font-[500] whitespace-nowrap">
                              <img
                                src={img}
                                alt=""
                                className="w-[50px] h-[50px] rounded-md"
                              />
                            </td>
                            <td className="px-6 py-4 font-[500]">2</td>
                            <td className="px-6 py-4 font-[500]">1300</td>
                            <td className="px-6 py-4 font-[500]">1500</td>
                          </tr>

                          <tr className="bg-white border-b border-[rgba(0,0,0,0.1)]">
                            <td className="px-6 py-4 font-[500]">
                              <span className="text-gray-600">6788478bvbb</span>
                            </td>
                            <td className="px-6 py-4 font-[500]">
                              A-Line Kurti with Sharara & Du..
                            </td>
                            <td className="px-6 py-4 font-[500] whitespace-nowrap">
                              <img
                                src={img}
                                alt=""
                                className="w-[50px] h-[50px] rounded-md"
                              />
                            </td>
                            <td className="px-6 py-4 font-[500]">2</td>
                            <td className="px-6 py-4 font-[500]">1300</td>
                            <td className="px-6 py-4 font-[500]">1500</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
              )}

              <tr className="bg-white border-b border-[rgba(0,0,0,0.1)]">
                <td className="px-6 py-4 font-[500]">
                  <Button
                    className="!w-[35px] !h-[35px] !min-w-[40px] !rounded-full !bg-[#f1f1f1] !text-black"
                    onClick={() => isShowOrderedProduct(1)}
                  >
                    {isOpenOrderedProduct === 1 ? (
                      <FaAngleUp className="text-[18px] text-[rgba(0,0,0,0.7)]" />
                    ) : (
                      <FaAngleDown className="text-[18px] text-[rgba(0,0,0,0.7)]" />
                    )}
                  </Button>
                </td>
                <td className="px-6 py-4 font-[500]">
                  <span className="text-[#ff5252]">6788478bvbb</span>
                </td>
                <td className="px-6 py-4 font-[500]">
                  <span className="text-[#ff5252]">pay_574jfdhg</span>
                </td>
                <td className="px-6 py-4 font-[500] whitespace-nowrap">
                  Raj shah
                </td>
                <td className="px-6 py-4 font-[500]">9865465465</td>
                <td className="px-6 py-4 font-[500]">
                  <span className="block w-[250px]">
                    H No 222 Street No 6 Adarshnagar kathmandu near shivam
                    hospital
                  </span>
                </td>
                <td className="px-6 py-4 font-[500]">36000</td>
                <td className="px-6 py-4 font-[500]">4500</td>
                <td className="px-6 py-4 font-[500]">raj12@gmail.com</td>
                <td className="px-6 py-4 font-[500]">
                  <span className="text-[#ff5252]">67nv76gdjk7</span>
                </td>
                <td className="px-6 py-4 font-[500]">
                  <Badges status="pending" />
                </td>
                <td className="px-6 py-4 font-[500] whitespace-nowrap">
                  2025-01-23
                </td>
              </tr>

              {isOpenOrderedProduct === 1 && (
                <tr>
                  <td className="pl-20" colSpan="6">
                    <div className="relative overflow-x-auto ">
                      <table className="w-full text-sm text-left rtl:text-right text-gray-700">
                        <thead className="text-xs text-gray-950 uppercase bg-gray-50">
                          <tr>
                            <th
                              scope="col"
                              className="px-3 py-3 md:px-6 whitespace-nowrap"
                            >
                              Product Id
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3 md:px-6 whitespace-nowrap"
                            >
                              Product Title
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3 md:px-6 whitespace-nowrap"
                            >
                              Image
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3 md:px-6 whitespace-nowrap"
                            >
                              Quantity
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3 md:px-6 whitespace-nowrap"
                            >
                              Price
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3 md:px-6 whitespace-nowrap"
                            >
                              SubTotal
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="bg-white border-b border-[rgba(0,0,0,0.1)]">
                            <td className="px-6 py-4 font-[500]">
                              <span className="text-gray-600">6788478bvbb</span>
                            </td>
                            <td className="px-6 py-4 font-[500]">
                              A-Line Kurti with Sharara & Du..
                            </td>
                            <td className="px-6 py-4 font-[500] whitespace-nowrap">
                              <img
                                src={img}
                                alt=""
                                className="w-[50px] h-[50px] rounded-md"
                              />
                            </td>
                            <td className="px-6 py-4 font-[500]">2</td>
                            <td className="px-6 py-4 font-[500]">1300</td>
                            <td className="px-6 py-4 font-[500]">1500</td>
                          </tr>

                          <tr className="bg-white border-b border-[rgba(0,0,0,0.1)]">
                            <td className="px-6 py-4 font-[500]">
                              <span className="text-gray-600">6788478bvbb</span>
                            </td>
                            <td className="px-6 py-4 font-[500]">
                              A-Line Kurti with Sharara & Du..
                            </td>
                            <td className="px-6 py-4 font-[500] whitespace-nowrap">
                              <img
                                src={img}
                                alt=""
                                className="w-[50px] h-[50px] rounded-md"
                              />
                            </td>
                            <td className="px-6 py-4 font-[500]">2</td>
                            <td className="px-6 py-4 font-[500]">1300</td>
                            <td className="px-6 py-4 font-[500]">1500</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Orders;
