import React, { useContext, useState, PureComponent } from "react";
import DashboardBoxes from "../../Components/DashboardBoxes/DashboardBoxes";
import hlo from "../../assets/wave.png";
import img from "../../assets/shop-illustration.webp";
import { Button, MenuItem } from "@mui/material";
import { FaPlus } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import Badges from "../../Components/Badges/Badges";
import Checkbox from "@mui/material/Checkbox";
import product1 from "../../assets/product-1.jpg";
import { Link } from "react-router-dom";
import Progress from "../../Components/ProgressBar/Progress";
import { AiOutlineEdit } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa6";
import { GoTrash } from "react-icons/go";
import TooltipMUI from "@mui/material/Tooltip";
import Pagination from "@mui/material/Pagination";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { MyContext } from "../../App";
import Select from "@mui/material/Select";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const columns = [
  { id: "product", label: "PRODUCT", minWidth: 150 },
  { id: "category", label: "CATEGORY", minWidth: 100 },
  {
    id: "subcategory",
    label: "SUB CATEGORY",
    minWidth: 150,
  },
  {
    id: "price",
    label: "PRICE",
    minWidth: 100,
  },
  {
    id: "sales",
    label: "SALES",
    minWidth: 100,
  },
  {
    id: "action",
    label: "ACTION",
    minWidth: 120,
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

function Dashboard() {
  const [isOpenOrderedProduct, setIsOpenOrderedProduct] = useState(null);

  const isShowOrderedProduct = (index) => {
    if (isOpenOrderedProduct === index) {
      setIsOpenOrderedProduct(null);
    } else {
      setIsOpenOrderedProduct(index);
    }
  };

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [chart1Data, setChart1Data] = useState(
    [
      {
        name: 'JAN',
        TotalSales: 4000,
        TotalUsers: 2400,
        amt: 2400,
      },
      {
        name: 'FEB',
        TotalSales: 3000,
        TotalUsers: 1398,
        amt: 2210,
      },
      {
        name: 'MARCH',
        TotalSales: 2000,
        TotalUsers: 9800,
        amt: 2290,
      },
      {
        name: 'APRIL',
        TotalSales: 2780,
        TotalUsers: 3908,
        amt: 2000,
      },
      {
        name: 'MAY',
        TotalSales: 1890,
        TotalUsers: 4800,
        amt: 2181,
      },
      {
        name: 'JUNE',
        TotalSales: 2390,
        TotalUsers: 3800,
        amt: 2500,
      },
      {
        name: 'JULY',
        TotalSales: 3490,
        TotalUsers: 4300,
        amt: 2100,
      },
      {
        name: 'AUG',
        TotalSales: 3490,
        TotalUsers: 2400,
        amt: 2100,
      },
      {
        name: 'SEP',
        TotalSales: 3490,
        TotalUsers: 4900,
        amt: 2100,
      },
      {
        name: 'OCT',
        TotalSales: 3490,
        TotalUsers: 6520,
        amt: 2100,
      },
      {
        name: 'NOV',
        TotalSales: 3490,
        TotalUsers: 2300,
        amt: 2100,
      },
      {
        name: 'DEC',
        TotalSales: 3490,
        TotalUsers: 1300,
        amt: 2100,
      },
    ]
  )

  const [categoryfilterval, setCategoryFilterVal] = useState("");

  const handleChangeCatFilter = (event) => {
    setCategoryFilterVal(event.target.value);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const context = useContext(MyContext);

  return (
    <div
      className={`contentright py-5 px-5 ${
        context.isSidebarOpen === false ? "w-[100%]" : "w-full pl-72"
      } transition-all`}
    >
      <div className="bg-[#f6ede9] w-full px-5 py-1 border border-[rgba(0,0,0,0.1)] flex items-center gap-8 mb-5 justify-between rounded-md">
        <div className="info">
          <h1 className="text-[35px] font-bold leading-10 mb-3">
            Good Morning,
            <br />
            <span className="flex gap-2">
              Cameron
              <img src={hlo} alt="" className="h-[40px] w-[40px]" />
            </span>
          </h1>
          <p>
            Here’s What happening on your store today. See the statistics at
            once.
          </p>

          <br />

          <Button className="btn-org !capitalize gap-2"  onClick={()=>context.setIsOpenFullScreenPanel({
              open: true,
              model: "Add Product"
            })}>
            <FaPlus />
            Add Product
          </Button>
        </div>

        <img src={img} alt="" className="w-[300px]" />
      </div>

      <DashboardBoxes />

      {/* Products table from tailwind*/}
      <div className="card my-5 shadow-md sm:rounded-lg bg-white">
        <div className="flex items-center justify-between px-5 py-5">
          <h2 className="text-[20px] font-[600]">Products</h2>
        </div>

        <div className="flex items-center w-full pl-5 justify-between pr-7">
          <div className="col w-[20%]">
            <h4 className="font-[600] text-[13px] mb-2">Category By</h4>

            <Select
              className="w-full"
              size="small"
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={categoryfilterval}
              onChange={handleChangeCatFilter}
              label="Category"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Men</MenuItem>
              <MenuItem value={20}>Women</MenuItem>
              <MenuItem value={30}>Kids</MenuItem>
            </Select>
          </div>

          <div className="col w-[28%] ml-auto flex items-center gap-3">
            <Button className="btn-sm !bg-green-600 !text-white">Export</Button>
            <Button className="btn-sm !text-white !bg-[#ff5252] whitespace-nowrap gap-2"  onClick={()=>context.setIsOpenFullScreenPanel({
              open: true,
              model: "Add Product"
            })}>
              <FaPlus />Add Product
            </Button>
          </div>
        </div>

        <div className="relative overflow-x-auto mt-5 pb-5">
          <table className="w-full text-sm text-left rtl:text-right text-gray-700">
            <thead className="text-xs text-gray-950 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-3 py-3 md:px-6">
                  <Checkbox {...label} size="small" />
                </th>
                <th scope="col" className="px-3 py-3 md:px-6 whitespace-nowrap">
                  Product
                </th>
                <th scope="col" className="px-3 py-3 md:px-6 whitespace-nowrap">
                  Category
                </th>
                <th scope="col" className="px-3 py-3 md:px-6 whitespace-nowrap">
                  Sub Category
                </th>
                <th scope="col" className="px-3 py-3 md:px-6 whitespace-nowrap">
                  Price
                </th>
                <th scope="col" className="px-3 py-3 md:px-6 whitespace-nowrap">
                  Sales
                </th>
                <th scope="col" className="px-3 py-3 md:px-6 whitespace-nowrap">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b border-[rgba(0,0,0,0.1)]">
                <td className="px-3 py-2 md:px-6">
                  <Checkbox {...label} size="small" />
                </td>

                <td className="px-3 py-2 md:px-6">
                  <div className="flex items-center gap-4 w-[300px]">
                    <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
                      <Link to="/product/id">
                        <img
                          src={product1}
                          alt=""
                          className="w-full transition-all group-hover:scale-105"
                        />
                      </Link>
                    </div>

                    <div className="info w-[75%]">
                      <h3 className="font-[600] text-[13px] leading-4 transition-all hover:text-[#ff5252]">
                        <Link to="/product/id">
                          VNED Women Embroidered Rayon Kurta Pant Set | Kurta
                          Set For Women
                        </Link>
                      </h3>

                      <span className="text-[12px]">Lorem</span>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-2">Electronics</td>

                <td className="px-6 py-2">Women</td>

                <td className="px-6 py-2">
                  <div className="flex items-center gap-1 flex-col">
                    <span className="oldprice line-through text-gray-500 text-[14px] font-[500] whitespace-nowrap">
                      Rs 500
                    </span>
                    <span className="price text-[#ff5252] text-[14px] font-[600] whitespace-nowrap">
                      Rs 460
                    </span>
                  </div>
                </td>

                <td className="px-6 py-2">
                  <p className="text-[14px] w-[100px] mb-1">
                    234 <span className="font-[600]">sales</span>
                  </p>
                  <Progress value={20} type="success" />
                </td>

                <td className="px-6 py-2">
                  <div className="flex items-center gap-1">
                    <TooltipMUI title="Edit Product" placement="top">
                      <Button className="!w-[35px] !h-[35px] !bg-[#f1f1f1] !text-black !border !border-[rgba(0,0,0,0.1)] !rounded-full hover:!bg-[#ccc] !min-w-[35px]">
                        <AiOutlineEdit className="!text-[rgba(0,0,0,0.7)] !text-[20px]" />
                      </Button>
                    </TooltipMUI>

                    <TooltipMUI title="View Product Details" placement="top">
                      <Button className="!w-[35px] !h-[35px] !bg-[#f1f1f1] !text-black !border !border-[rgba(0,0,0,0.1)] !rounded-full hover:!bg-[#ccc] !min-w-[35px]">
                        <FaRegEye className="!text-[rgba(0,0,0,0.7)] !text-[20px]" />
                      </Button>
                    </TooltipMUI>

                    <TooltipMUI title="Remove Product" placement="top">
                      <Button className="!w-[35px] !h-[35px] !bg-[#f1f1f1] !text-black !border !border-[rgba(0,0,0,0.1)] !rounded-full hover:!bg-[#ccc] !min-w-[35px]">
                        <GoTrash className="!text-[rgba(0,0,0,0.7)] !text-[20px]" />
                      </Button>
                    </TooltipMUI>
                  </div>
                </td>
              </tr>

              <tr className="bg-white border-b border-[rgba(0,0,0,0.1)]">
                <td className="px-3 py-2 md:px-6">
                  <Checkbox {...label} size="small" />
                </td>

                <td className="px-3 py-2 md:px-6">
                  <div className="flex items-center gap-4 w-[300px]">
                    <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
                      <Link to="/product/id">
                        <img
                          src={product1}
                          alt=""
                          className="w-full transition-all group-hover:scale-105"
                        />
                      </Link>
                    </div>

                    <div className="info w-[75%]">
                      <h3 className="font-[600] text-[13px] leading-4 transition-all hover:text-[#ff5252]">
                        <Link to="/product/id">
                          VNED Women Embroidered Rayon Kurta Pant Set | Kurta
                          Set For Women
                        </Link>
                      </h3>

                      <span className="text-[12px]">Lorem</span>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-2">Electronics</td>

                <td className="px-6 py-2">Women</td>

                <td className="px-6 py-2">
                  <div className="flex items-center gap-1 flex-col">
                    <span className="oldprice line-through text-gray-500 text-[14px] font-[500] whitespace-nowrap">
                      Rs 500
                    </span>
                    <span className="price text-[#ff5252] text-[14px] font-[600] whitespace-nowrap">
                      Rs 460
                    </span>
                  </div>
                </td>

                <td className="px-6 py-2">
                  <p className="text-[14px] w-[100px] mb-1">
                    234 <span className="font-[600]">sales</span>
                  </p>
                  <Progress value={60} type="error" />
                </td>

                <td className="px-6 py-2">
                  <div className="flex items-center gap-1">
                    <TooltipMUI title="Edit Product" placement="top">
                      <Button className="!w-[35px] !h-[35px] !bg-[#f1f1f1] !text-black !border !border-[rgba(0,0,0,0.1)] !rounded-full hover:!bg-[#ccc] !min-w-[35px]">
                        <AiOutlineEdit className="!text-[rgba(0,0,0,0.7)] !text-[20px]" />
                      </Button>
                    </TooltipMUI>

                    <TooltipMUI title="View Product Details" placement="top">
                      <Button className="!w-[35px] !h-[35px] !bg-[#f1f1f1] !text-black !border !border-[rgba(0,0,0,0.1)] !rounded-full hover:!bg-[#ccc] !min-w-[35px]">
                        <FaRegEye className="!text-[rgba(0,0,0,0.7)] !text-[20px]" />
                      </Button>
                    </TooltipMUI>

                    <TooltipMUI title="Remove Product" placement="top">
                      <Button className="!w-[35px] !h-[35px] !bg-[#f1f1f1] !text-black !border !border-[rgba(0,0,0,0.1)] !rounded-full hover:!bg-[#ccc] !min-w-[35px]">
                        <GoTrash className="!text-[rgba(0,0,0,0.7)] !text-[20px]" />
                      </Button>
                    </TooltipMUI>
                  </div>
                </td>
              </tr>

              <tr className="bg-white border-b border-[rgba(0,0,0,0.1)]">
                <td className="px-3 py-2 md:px-6">
                  <Checkbox {...label} size="small" />
                </td>

                <td className="px-3 py-2 md:px-6">
                  <div className="flex items-center gap-4 w-[300px]">
                    <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
                      <Link to="/product/id">
                        <img
                          src={product1}
                          alt=""
                          className="w-full transition-all group-hover:scale-105"
                        />
                      </Link>
                    </div>

                    <div className="info w-[75%]">
                      <h3 className="font-[600] text-[13px] leading-4 transition-all hover:text-[#ff5252]">
                        <Link to="/product/id">
                          VNED Women Embroidered Rayon Kurta Pant Set | Kurta
                          Set For Women
                        </Link>
                      </h3>

                      <span className="text-[12px]">Lorem</span>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-2">Electronics</td>

                <td className="px-6 py-2">Women</td>

                <td className="px-6 py-2">
                  <div className="flex items-center gap-1 flex-col">
                    <span className="oldprice line-through text-gray-500 text-[14px] font-[500] whitespace-nowrap">
                      Rs 500
                    </span>
                    <span className="price text-[#ff5252] text-[14px] font-[600] whitespace-nowrap">
                      Rs 460
                    </span>
                  </div>
                </td>

                <td className="px-6 py-2">
                  <p className="text-[14px] w-[100px] mb-1">
                    234 <span className="font-[600]">sales</span>
                  </p>
                  <Progress value={60} type="error" />
                </td>

                <td className="px-6 py-2">
                  <div className="flex items-center gap-1">
                    <TooltipMUI title="Edit Product" placement="top">
                      <Button className="!w-[35px] !h-[35px] !bg-[#f1f1f1] !text-black !border !border-[rgba(0,0,0,0.1)] !rounded-full hover:!bg-[#ccc] !min-w-[35px]">
                        <AiOutlineEdit className="!text-[rgba(0,0,0,0.7)] !text-[20px]" />
                      </Button>
                    </TooltipMUI>

                    <TooltipMUI title="View Product Details" placement="top">
                      <Button className="!w-[35px] !h-[35px] !bg-[#f1f1f1] !text-black !border !border-[rgba(0,0,0,0.1)] !rounded-full hover:!bg-[#ccc] !min-w-[35px]">
                        <FaRegEye className="!text-[rgba(0,0,0,0.7)] !text-[20px]" />
                      </Button>
                    </TooltipMUI>

                    <TooltipMUI title="Remove Product" placement="top">
                      <Button className="!w-[35px] !h-[35px] !bg-[#f1f1f1] !text-black !border !border-[rgba(0,0,0,0.1)] !rounded-full hover:!bg-[#ccc] !min-w-[35px]">
                        <GoTrash className="!text-[rgba(0,0,0,0.7)] !text-[20px]" />
                      </Button>
                    </TooltipMUI>
                  </div>
                </td>
              </tr>

              <tr className="bg-white border-b border-[rgba(0,0,0,0.1)]">
                <td className="px-3 py-2 md:px-6">
                  <Checkbox {...label} size="small" />
                </td>

                <td className="px-3 py-2 md:px-6">
                  <div className="flex items-center gap-4 w-[300px]">
                    <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
                      <Link to="/product/id">
                        <img
                          src={product1}
                          alt=""
                          className="w-full transition-all group-hover:scale-105"
                        />
                      </Link>
                    </div>

                    <div className="info w-[75%]">
                      <h3 className="font-[600] text-[13px] leading-4 transition-all hover:text-[#ff5252]">
                        <Link to="/product/id">
                          VNED Women Embroidered Rayon Kurta Pant Set | Kurta
                          Set For Women
                        </Link>
                      </h3>

                      <span className="text-[12px]">Lorem</span>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-2">Electronics</td>

                <td className="px-6 py-2">Women</td>

                <td className="px-6 py-2">
                  <div className="flex items-center gap-1 flex-col">
                    <span className="oldprice line-through text-gray-500 text-[14px] font-[500] whitespace-nowrap">
                      Rs 500
                    </span>
                    <span className="price text-[#ff5252] text-[14px] font-[600] whitespace-nowrap">
                      Rs 460
                    </span>
                  </div>
                </td>

                <td className="px-6 py-2">
                  <p className="text-[14px] w-[100px] mb-1">
                    234 <span className="font-[600]">sales</span>
                  </p>
                  <Progress value={60} type="error" />
                </td>

                <td className="px-6 py-2">
                  <div className="flex items-center gap-1">
                    <TooltipMUI title="Edit Product" placement="top">
                      <Button className="!w-[35px] !h-[35px] !bg-[#f1f1f1] !text-black !border !border-[rgba(0,0,0,0.1)] !rounded-full hover:!bg-[#ccc] !min-w-[35px]">
                        <AiOutlineEdit className="!text-[rgba(0,0,0,0.7)] !text-[20px]" />
                      </Button>
                    </TooltipMUI>

                    <TooltipMUI title="View Product Details" placement="top">
                      <Button className="!w-[35px] !h-[35px] !bg-[#f1f1f1] !text-black !border !border-[rgba(0,0,0,0.1)] !rounded-full hover:!bg-[#ccc] !min-w-[35px]">
                        <FaRegEye className="!text-[rgba(0,0,0,0.7)] !text-[20px]" />
                      </Button>
                    </TooltipMUI>

                    <TooltipMUI title="Remove Product" placement="top">
                      <Button className="!w-[35px] !h-[35px] !bg-[#f1f1f1] !text-black !border !border-[rgba(0,0,0,0.1)] !rounded-full hover:!bg-[#ccc] !min-w-[35px]">
                        <GoTrash className="!text-[rgba(0,0,0,0.7)] !text-[20px]" />
                      </Button>
                    </TooltipMUI>
                  </div>
                </td>
              </tr>

              <tr className="bg-white border-b border-[rgba(0,0,0,0.1)]">
                <td className="px-3 py-2 md:px-6">
                  <Checkbox {...label} size="small" />
                </td>

                <td className="px-3 py-2 md:px-6">
                  <div className="flex items-center gap-4 w-[300px]">
                    <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
                      <Link to="/product/id">
                        <img
                          src={product1}
                          alt=""
                          className="w-full transition-all group-hover:scale-105"
                        />
                      </Link>
                    </div>

                    <div className="info w-[75%]">
                      <h3 className="font-[600] text-[13px] leading-4 transition-all hover:text-[#ff5252]">
                        <Link to="/product/id">
                          VNED Women Embroidered Rayon Kurta Pant Set | Kurta
                          Set For Women
                        </Link>
                      </h3>

                      <span className="text-[12px]">Lorem</span>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-2">Electronics</td>

                <td className="px-6 py-2">Women</td>

                <td className="px-6 py-2">
                  <div className="flex items-center gap-1 flex-col">
                    <span className="oldprice line-through text-gray-500 text-[14px] font-[500] whitespace-nowrap">
                      Rs 500
                    </span>
                    <span className="price text-[#ff5252] text-[14px] font-[600] whitespace-nowrap">
                      Rs 460
                    </span>
                  </div>
                </td>

                <td className="px-6 py-2">
                  <p className="text-[14px] w-[100px] mb-1">
                    234 <span className="font-[600]">sales</span>
                  </p>
                  <Progress value={60} type="error" />
                </td>

                <td className="px-6 py-2">
                  <div className="flex items-center gap-1">
                    <TooltipMUI title="Edit Product" placement="top">
                      <Button className="!w-[35px] !h-[35px] !bg-[#f1f1f1] !text-black !border !border-[rgba(0,0,0,0.1)] !rounded-full hover:!bg-[#ccc] !min-w-[35px]">
                        <AiOutlineEdit className="!text-[rgba(0,0,0,0.7)] !text-[20px]" />
                      </Button>
                    </TooltipMUI>

                    <TooltipMUI title="View Product Details" placement="top">
                      <Button className="!w-[35px] !h-[35px] !bg-[#f1f1f1] !text-black !border !border-[rgba(0,0,0,0.1)] !rounded-full hover:!bg-[#ccc] !min-w-[35px]">
                        <FaRegEye className="!text-[rgba(0,0,0,0.7)] !text-[20px]" />
                      </Button>
                    </TooltipMUI>

                    <TooltipMUI title="Remove Product" placement="top">
                      <Button className="!w-[35px] !h-[35px] !bg-[#f1f1f1] !text-black !border !border-[rgba(0,0,0,0.1)] !rounded-full hover:!bg-[#ccc] !min-w-[35px]">
                        <GoTrash className="!text-[rgba(0,0,0,0.7)] !text-[20px]" />
                      </Button>
                    </TooltipMUI>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-end pt-5 pb-5 px-4">
          <Pagination count={10} color="primary" />
        </div>
      </div>

      {/* product table from material ui */}
      <div className="card my-5 shadow-md sm:rounded-lg bg-white">
        <div className="flex items-center justify-between px-5 py-5">
          <h2 className="text-[20px] font-[600]">Products</h2>
        </div>

        <div className="flex items-center w-full pl-5 justify-between pr-7">
          <div className="col w-[20%]">
            <h4 className="font-[600] text-[13px] mb-2">Category By</h4>

            <Select
              className="w-full"
              size="small"
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={categoryfilterval}
              onChange={handleChangeCatFilter}
              label="Category"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Men</MenuItem>
              <MenuItem value={20}>Women</MenuItem>
              <MenuItem value={30}>Kids</MenuItem>
            </Select>
          </div>

          <div className="col w-[28%] ml-auto flex items-center gap-3">
            <Button className="btn-sm !bg-green-600 !text-white">Export</Button>
            <Button className="btn-sm !text-white !bg-[#ff5252] whitespace-nowrap gap-2" onClick={()=>context.setIsOpenFullScreenPanel({
              open: true,
              model: "Add Product"
            })}>
              <FaPlus />Add Product
            </Button>
          </div>
        </div>

        <br />

        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <Checkbox {...label} size="small" />
                </TableCell>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <Checkbox {...label} size="small" />
                </TableCell>

                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className="flex items-center gap-4 w-[300px]">
                    <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
                      <Link to="/product/id">
                        <img
                          src={product1}
                          alt=""
                          className="w-full transition-all group-hover:scale-105"
                        />
                      </Link>
                    </div>

                    <div className="info w-[75%]">
                      <h3 className="font-[600] text-[13px] leading-4 transition-all hover:text-[#ff5252]">
                        <Link to="/product/id">
                          VNED Women Embroidered Rayon Kurta Pant Set | Kurta
                          Set For Women
                        </Link>
                      </h3>

                      <span className="text-[12px]">Lorem</span>
                    </div>
                  </div>
                </TableCell>

                <TableCell style={{ minWidth: columns.minWidth }}>
                  Electronics
                </TableCell>

                <TableCell style={{ minWidth: columns.minWidth }}>
                  Women
                </TableCell>

                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className="flex items-center gap-1 flex-col">
                    <span className="oldprice line-through text-gray-500 text-[14px] font-[500] whitespace-nowrap">
                      Rs 500
                    </span>
                    <span className="price text-[#ff5252] text-[14px] font-[600] whitespace-nowrap">
                      Rs 460
                    </span>
                  </div>
                </TableCell>

                <TableCell style={{ minWidth: columns.minWidth }}>
                  <p className="text-[14px] w-[100px] mb-1">
                    234 <span className="font-[600]">sales</span>
                  </p>
                  <Progress value={40} type="error" />
                </TableCell>

                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className="flex items-center gap-1">
                    <TooltipMUI title="Edit Product" placement="top">
                      <Button className="!w-[35px] !h-[35px] !bg-[#f1f1f1] !text-black !border !border-[rgba(0,0,0,0.1)] !rounded-full hover:!bg-[#ccc] !min-w-[35px]">
                        <AiOutlineEdit className="!text-[rgba(0,0,0,0.7)] !text-[20px]" />
                      </Button>
                    </TooltipMUI>

                    <TooltipMUI title="View Product Details" placement="top">
                      <Button className="!w-[35px] !h-[35px] !bg-[#f1f1f1] !text-black !border !border-[rgba(0,0,0,0.1)] !rounded-full hover:!bg-[#ccc] !min-w-[35px]">
                        <FaRegEye className="!text-[rgba(0,0,0,0.7)] !text-[20px]" />
                      </Button>
                    </TooltipMUI>

                    <TooltipMUI title="Remove Product" placement="top">
                      <Button className="!w-[35px] !h-[35px] !bg-[#f1f1f1] !text-black !border !border-[rgba(0,0,0,0.1)] !rounded-full hover:!bg-[#ccc] !min-w-[35px]">
                        <GoTrash className="!text-[rgba(0,0,0,0.7)] !text-[20px]" />
                      </Button>
                    </TooltipMUI>
                  </div>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <Checkbox {...label} size="small" />
                </TableCell>

                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className="flex items-center gap-4 w-[300px]">
                    <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
                      <Link to="/product/id">
                        <img
                          src={product1}
                          alt=""
                          className="w-full transition-all group-hover:scale-105"
                        />
                      </Link>
                    </div>

                    <div className="info w-[75%]">
                      <h3 className="font-[600] text-[13px] leading-4 transition-all hover:text-[#ff5252]">
                        <Link to="/product/id">
                          VNED Women Embroidered Rayon Kurta Pant Set | Kurta
                          Set For Women
                        </Link>
                      </h3>

                      <span className="text-[12px]">Lorem</span>
                    </div>
                  </div>
                </TableCell>

                <TableCell style={{ minWidth: columns.minWidth }}>
                  Electronics
                </TableCell>

                <TableCell style={{ minWidth: columns.minWidth }}>
                  Women
                </TableCell>

                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className="flex items-center gap-1 flex-col">
                    <span className="oldprice line-through text-gray-500 text-[14px] font-[500] whitespace-nowrap">
                      Rs 500
                    </span>
                    <span className="price text-[#ff5252] text-[14px] font-[600] whitespace-nowrap">
                      Rs 460
                    </span>
                  </div>
                </TableCell>

                <TableCell style={{ minWidth: columns.minWidth }}>
                  <p className="text-[14px] w-[100px] mb-1">
                    234 <span className="font-[600]">sales</span>
                  </p>
                  <Progress value={40} type="error" />
                </TableCell>

                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className="flex items-center gap-1">
                    <TooltipMUI title="Edit Product" placement="top">
                      <Button className="!w-[35px] !h-[35px] !bg-[#f1f1f1] !text-black !border !border-[rgba(0,0,0,0.1)] !rounded-full hover:!bg-[#ccc] !min-w-[35px]">
                        <AiOutlineEdit className="!text-[rgba(0,0,0,0.7)] !text-[20px]" />
                      </Button>
                    </TooltipMUI>

                    <TooltipMUI title="View Product Details" placement="top">
                      <Button className="!w-[35px] !h-[35px] !bg-[#f1f1f1] !text-black !border !border-[rgba(0,0,0,0.1)] !rounded-full hover:!bg-[#ccc] !min-w-[35px]">
                        <FaRegEye className="!text-[rgba(0,0,0,0.7)] !text-[20px]" />
                      </Button>
                    </TooltipMUI>

                    <TooltipMUI title="Remove Product" placement="top">
                      <Button className="!w-[35px] !h-[35px] !bg-[#f1f1f1] !text-black !border !border-[rgba(0,0,0,0.1)] !rounded-full hover:!bg-[#ccc] !min-w-[35px]">
                        <GoTrash className="!text-[rgba(0,0,0,0.7)] !text-[20px]" />
                      </Button>
                    </TooltipMUI>
                  </div>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <Checkbox {...label} size="small" />
                </TableCell>

                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className="flex items-center gap-4 w-[300px]">
                    <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
                      <Link to="/product/id">
                        <img
                          src={product1}
                          alt=""
                          className="w-full transition-all group-hover:scale-105"
                        />
                      </Link>
                    </div>

                    <div className="info w-[75%]">
                      <h3 className="font-[600] text-[13px] leading-4 transition-all hover:text-[#ff5252]">
                        <Link to="/product/id">
                          VNED Women Embroidered Rayon Kurta Pant Set | Kurta
                          Set For Women
                        </Link>
                      </h3>

                      <span className="text-[12px]">Lorem</span>
                    </div>
                  </div>
                </TableCell>

                <TableCell style={{ minWidth: columns.minWidth }}>
                  Electronics
                </TableCell>

                <TableCell style={{ minWidth: columns.minWidth }}>
                  Women
                </TableCell>

                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className="flex items-center gap-1 flex-col">
                    <span className="oldprice line-through text-gray-500 text-[14px] font-[500] whitespace-nowrap">
                      Rs 500
                    </span>
                    <span className="price text-[#ff5252] text-[14px] font-[600] whitespace-nowrap">
                      Rs 460
                    </span>
                  </div>
                </TableCell>

                <TableCell style={{ minWidth: columns.minWidth }}>
                  <p className="text-[14px] w-[100px] mb-1">
                    234 <span className="font-[600]">sales</span>
                  </p>
                  <Progress value={40} type="error" />
                </TableCell>

                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className="flex items-center gap-1">
                    <TooltipMUI title="Edit Product" placement="top">
                      <Button className="!w-[35px] !h-[35px] !bg-[#f1f1f1] !text-black !border !border-[rgba(0,0,0,0.1)] !rounded-full hover:!bg-[#ccc] !min-w-[35px]">
                        <AiOutlineEdit className="!text-[rgba(0,0,0,0.7)] !text-[20px]" />
                      </Button>
                    </TooltipMUI>

                    <TooltipMUI title="View Product Details" placement="top">
                      <Button className="!w-[35px] !h-[35px] !bg-[#f1f1f1] !text-black !border !border-[rgba(0,0,0,0.1)] !rounded-full hover:!bg-[#ccc] !min-w-[35px]">
                        <FaRegEye className="!text-[rgba(0,0,0,0.7)] !text-[20px]" />
                      </Button>
                    </TooltipMUI>

                    <TooltipMUI title="Remove Product" placement="top">
                      <Button className="!w-[35px] !h-[35px] !bg-[#f1f1f1] !text-black !border !border-[rgba(0,0,0,0.1)] !rounded-full hover:!bg-[#ccc] !min-w-[35px]">
                        <GoTrash className="!text-[rgba(0,0,0,0.7)] !text-[20px]" />
                      </Button>
                    </TooltipMUI>
                  </div>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <Checkbox {...label} size="small" />
                </TableCell>

                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className="flex items-center gap-4 w-[300px]">
                    <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
                      <Link to="/product/id">
                        <img
                          src={product1}
                          alt=""
                          className="w-full transition-all group-hover:scale-105"
                        />
                      </Link>
                    </div>

                    <div className="info w-[75%]">
                      <h3 className="font-[600] text-[13px] leading-4 transition-all hover:text-[#ff5252]">
                        <Link to="/product/id">
                          VNED Women Embroidered Rayon Kurta Pant Set | Kurta
                          Set For Women
                        </Link>
                      </h3>

                      <span className="text-[12px]">Lorem</span>
                    </div>
                  </div>
                </TableCell>

                <TableCell style={{ minWidth: columns.minWidth }}>
                  Electronics
                </TableCell>

                <TableCell style={{ minWidth: columns.minWidth }}>
                  Women
                </TableCell>

                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className="flex items-center gap-1 flex-col">
                    <span className="oldprice line-through text-gray-500 text-[14px] font-[500] whitespace-nowrap">
                      Rs 500
                    </span>
                    <span className="price text-[#ff5252] text-[14px] font-[600] whitespace-nowrap">
                      Rs 460
                    </span>
                  </div>
                </TableCell>

                <TableCell style={{ minWidth: columns.minWidth }}>
                  <p className="text-[14px] w-[100px] mb-1">
                    234 <span className="font-[600]">sales</span>
                  </p>
                  <Progress value={40} type="error" />
                </TableCell>

                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className="flex items-center gap-1">
                    <TooltipMUI title="Edit Product" placement="top">
                      <Button className="!w-[35px] !h-[35px] !bg-[#f1f1f1] !text-black !border !border-[rgba(0,0,0,0.1)] !rounded-full hover:!bg-[#ccc] !min-w-[35px]">
                        <AiOutlineEdit className="!text-[rgba(0,0,0,0.7)] !text-[20px]" />
                      </Button>
                    </TooltipMUI>

                    <TooltipMUI title="View Product Details" placement="top">
                      <Button className="!w-[35px] !h-[35px] !bg-[#f1f1f1] !text-black !border !border-[rgba(0,0,0,0.1)] !rounded-full hover:!bg-[#ccc] !min-w-[35px]">
                        <FaRegEye className="!text-[rgba(0,0,0,0.7)] !text-[20px]" />
                      </Button>
                    </TooltipMUI>

                    <TooltipMUI title="Remove Product" placement="top">
                      <Button className="!w-[35px] !h-[35px] !bg-[#f1f1f1] !text-black !border !border-[rgba(0,0,0,0.1)] !rounded-full hover:!bg-[#ccc] !min-w-[35px]">
                        <GoTrash className="!text-[rgba(0,0,0,0.7)] !text-[20px]" />
                      </Button>
                    </TooltipMUI>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={20}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>

      {/* Recent orders */}
      <div className="card my-5 shadow-md sm:rounded-lg bg-white">
        <div className="flex items-center justify-between px-5 py-5">
          <h2 className="text-[20px] font-[600]">Recent Orders</h2>
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

      {/* Chart */}
      <div className="card my-5 shadow-md sm:rounded-lg bg-white">
      <div className="flex items-center justify-between px-5 py-5 pb-0">
          <h2 className="text-[20px] font-[600]">Total Users and Total Sales</h2>
        </div>

        <div className="flex items-center gap-5 px-5 py-5 pt-1">
          <span className="flex items-center gap-1 text-[15px]">
            <span className="bock w-[10px] h-[10px] rounded-full bg-green-600"></span>
            Total Users
          </span>

          <span className="flex items-center gap-1 text-[15px]">
            <span className="bock w-[10px] h-[10px] rounded-full bg-[#ff5252]"></span>
            Total Sales
          </span>
        </div>
      <LineChart
          width={900}
          height={500}
          data={chart1Data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="none"/>
          <XAxis dataKey="name" tick={{ fontSize: 14 }}/>
          <YAxis tick={{fontSize: 14}}/>
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="TotalSales" stroke="#8884d8" activeDot={{ r: 8 }} strokeWidth={3} />
          <Line type="monotone" dataKey="TotalUsers" stroke="#82ca9d" strokeWidth={3} />
        </LineChart>
      </div>
    </div>
  );
}

export default Dashboard;
