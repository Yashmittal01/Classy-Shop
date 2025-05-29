import { Button, Checkbox, MenuItem } from "@mui/material";
import React, { useState, useContext } from "react";
import { IoMdAdd } from "react-icons/io";
import { MyContext } from "../../App";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Select from "@mui/material/Select";
import { Link } from "react-router-dom";
import product1 from "../../assets/product-1.jpg";
import Progress from "../../Components/ProgressBar/Progress";
import TooltipMUI from "@mui/material/Tooltip";
import { AiOutlineEdit } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa6";
import { GoTrash } from "react-icons/go";
import SearchBox from "../../Components/SearchBox/SearchBox";

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

function Products() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

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
    <>
      <div
        className={`py-5 p-5 ${
          context.isSidebarOpen === false ? "w-full" : "w-full pl-72"
        }`}
      >
        <div className="flex items-center justify-between px-1 py-0">
          <h2 className="text-[20px] font-[600]">Products</h2>

          <div className="col w-[30%] ml-auto flex items-center justify-end gap-3">
            <Button className="btn-sm !bg-green-600 !text-white">Export</Button>
            <Button className="btn-sm !text-white !bg-[#ff5252] whitespace-nowrap gap-1" onClick={()=>context.setIsOpenFullScreenPanel({
              open: true,
              model: "Add Product"
            })}>
              <IoMdAdd className="!text-[20px]"/>Add Product
            </Button>
          </div>
        </div>

        <div className="card my-5 pt-5 shadow-md sm:rounded-lg bg-white">
          <div className="flex items-center w-full px-5 justify-between ">
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

            <div className="col w-[20%] ml-auto">
              <SearchBox />
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
      </div>
    </>
  );
}

export default Products;
