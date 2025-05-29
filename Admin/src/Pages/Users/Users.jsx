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
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import SearchBox from "../../Components/SearchBox/SearchBox";
import { SlCalender } from "react-icons/sl";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const columns = [
  { id: "userimg", label: "USER IMAGE", minWidth: 80 },
  { id: "username", label: "USER NAME", minWidth: 100 },
  {
    id: "useremail",
    label: "USER EMAIL",
    minWidth: 150,
  },
  {
    id: "userphone",
    label: "USER PHONE NO",
    minWidth: 100,
  },
  {
    id: "createddate",
    label: "CREATED",
    minWidth: 100,
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

function Users() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

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
        className={`py-6 p-5 ${
          context.isSidebarOpen === false ? "w-full" : "w-full pl-72"
        }`}
      >
        <div className="card pt-5 shadow-md sm:rounded-lg bg-white">
          <div className="flex items-center w-full px-5 justify-between ">
            <div className="col w-[20%]">
            <h2 className="text-[20px] font-[600]">Users List</h2>
            </div>

            <div className="col w-[30%] ml-auto">
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
                    <div className="flex items-center gap-4 w-[70px]">
                      <div className="img w-[50px] h-[50px] rounded-md overflow-hidden group">
                        <Link to="/product/id">
                          <img
                            src={product1}
                            alt=""
                            className="w-full transition-all group-hover:scale-105"
                          />
                        </Link>
                      </div>
                    </div>
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
                    Bikram Shah
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
                    <span className="flex items-center gap-2"><MdOutlineMarkEmailRead />bir12@gmail.com</span>
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
                    <span className="flex items-center gap-2"><MdLocalPhone />+977 9832435422</span>
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
                    <span className="flex items-center gap-2"><SlCalender />10-01-2025</span>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell style={{ minWidth: columns.minWidth }}>
                    <Checkbox {...label} size="small" />
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
                    <div className="flex items-center gap-4 w-[70px]">
                      <div className="img w-[50px] h-[50px] rounded-md overflow-hidden group">
                        <Link to="/product/id">
                          <img
                            src={product1}
                            alt=""
                            className="w-full transition-all group-hover:scale-105"
                          />
                        </Link>
                      </div>
                    </div>
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
                    Bikram Shah
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
                    <span className="flex items-center gap-2"><MdOutlineMarkEmailRead />bir12@gmail.com</span>
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
                    <span className="flex items-center gap-2"><MdLocalPhone />+977 9832435422</span>
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
                    <span className="flex items-center gap-2"><SlCalender />10-01-2025</span>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell style={{ minWidth: columns.minWidth }}>
                    <Checkbox {...label} size="small" />
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
                    <div className="flex items-center gap-4 w-[70px]">
                      <div className="img w-[50px] h-[50px] rounded-md overflow-hidden group">
                        <Link to="/product/id">
                          <img
                            src={product1}
                            alt=""
                            className="w-full transition-all group-hover:scale-105"
                          />
                        </Link>
                      </div>
                    </div>
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
                    Bikram Shah
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
                    <span className="flex items-center gap-2"><MdOutlineMarkEmailRead />bir12@gmail.com</span>
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
                    <span className="flex items-center gap-2"><MdLocalPhone />+977 9832435422</span>
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
                    <span className="flex items-center gap-2"><SlCalender />10-01-2025</span>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell style={{ minWidth: columns.minWidth }}>
                    <Checkbox {...label} size="small" />
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
                    <div className="flex items-center gap-4 w-[70px]">
                      <div className="img w-[50px] h-[50px] rounded-md overflow-hidden group">
                        <Link to="/product/id">
                          <img
                            src={product1}
                            alt=""
                            className="w-full transition-all group-hover:scale-105"
                          />
                        </Link>
                      </div>
                    </div>
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
                    Bikram Shah
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
                    <span className="flex items-center gap-2"><MdOutlineMarkEmailRead />bir12@gmail.com</span>
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
                    <span className="flex items-center gap-2"><MdLocalPhone />+977 9832435422</span>
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
                    <span className="flex items-center gap-2"><SlCalender />10-01-2025</span>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell style={{ minWidth: columns.minWidth }}>
                    <Checkbox {...label} size="small" />
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
                    <div className="flex items-center gap-4 w-[70px]">
                      <div className="img w-[50px] h-[50px] rounded-md overflow-hidden group">
                        <Link to="/product/id">
                          <img
                            src={product1}
                            alt=""
                            className="w-full transition-all group-hover:scale-105"
                          />
                        </Link>
                      </div>
                    </div>
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
                    Bikram Shah
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
                    <span className="flex items-center gap-2"><MdOutlineMarkEmailRead />bir12@gmail.com</span>
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
                    <span className="flex items-center gap-2"><MdLocalPhone />+977 9832435422</span>
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
                    <span className="flex items-center gap-2"><SlCalender />10-01-2025</span>
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

export default Users;
