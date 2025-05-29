import { Button, Divider } from "@mui/material";
import React, { useContext, useState } from "react";
import { RiMenu2Line } from "react-icons/ri";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { FaRegBell } from "react-icons/fa";
import img from "../../assets/pic1.jpg";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { FaRegUser } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { MyContext } from "../../App";
import { Link, useNavigate } from "react-router-dom";
import { fetchDataFromApi } from "../../utils/api";

function Header() {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: 2,
      top: 4,
      border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  const [anchorMyAcc, setAnchorMyAcc] = useState(null);
  const openMyAcc = Boolean(anchorMyAcc);
  const handleClickMyAcc = (event) => {
    setAnchorMyAcc(event.currentTarget);
  };
  const handleCloseMyAcc = () => {
    setAnchorMyAcc(null);
  };

  const context = useContext(MyContext);
  const history = useNavigate();

  const logout = () => {
    setAnchorMyAcc(null);

    fetchDataFromApi(
      `/api/user/logout?token=${localStorage.getItem("accesstoken")}`,
      { withCredentials: true }
    ).then((res) => {
      if (res?.error === false) {
        context.setIsLogin(false);
        localStorage.removeItem("accesstoken");
        localStorage.removeItem("refreshtoken");
        history("/");
      }
    });
  };

  return (
    <header
      className={`w-full h-auto shadow-md py-3 ${
        context.isSidebarOpen === true ? "pl-70" : "pl-5"
      } pr-7 bg-[#fff] flex items-center justify-between`}
    >
      <div className="part1">
        <Button
          className="!w-[40px] !min-w-[40px] !h-[40px] !rounded-full !text-black"
          onClick={() => context.setIsSidebarOpen(!context.isSidebarOpen)}
        >
          <RiMenu2Line className="text-[22px] text-[rgba(0,0,0,0.8)]" />
        </Button>
      </div>

      <div className="part2 w-[40%] flex items-center justify-end gap-5">
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={4} color="secondary">
            <FaRegBell className="text-[rgba(0,0,0,0.8)]" />
          </StyledBadge>
        </IconButton>

        {context.isLogin === true ? (
          <div className="relative">
            <div
              className="!rounded-full w-[35px] h-[35px] overflow-hidden cursor-pointer"
              onClick={handleClickMyAcc}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </div>

            <Menu
              anchorEl={anchorMyAcc}
              id="account-menu"
              open={openMyAcc}
              onClose={handleCloseMyAcc}
              onClick={handleCloseMyAcc}
              slotProps={{
                paper: {
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&::before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem onClick={handleCloseMyAcc} className="!bg-white">
                <div className="flex items-center gap-3">
                  <div className="!rounded-full w-[35px] h-[35px] overflow-hidden cursor-pointer">
                    <img
                      src={img}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="info">
                    <h3 className="text-[15px] font-[500]">
                      {context?.userData?.name}
                    </h3>
                    <p className="text-[12px] font-[400] opacity-70">
                      {context?.userData?.email}
                    </p>
                  </div>
                </div>
              </MenuItem>
              <Divider />

              <Link to="/profile">
                <MenuItem
                  onClick={handleCloseMyAcc}
                  className="flex items-center gap-3"
                >
                  <FaRegUser className="text-[16px]" />{" "}
                  <span className="text-[14px]">Profile</span>
                </MenuItem>
              </Link>

              <MenuItem onClick={logout} className="flex items-center gap-3">
                <IoMdLogOut className="text-[18px]" />{" "}
                <span className="text-[14px]">Sign Out</span>
              </MenuItem>
            </Menu>
          </div>
        ) : (
          <Link to="/login">
            <Button className="btn-org btn-sm !rounded-full">Login</Button>
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;
