import React, { useContext, useState } from "react";
import img from "../../assets/pattern.webp";
import logo from "../../assets/logo.jpg";
import logo1 from "../../assets/shield.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { CgLogIn } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import OtpBox from "../../Components/OtpBox/OtpBox";
import { MyContext } from "../../App";
import { postData } from "../../../../Client/src/utils/api";
import CircularProgress from "@mui/material/CircularProgress";

function VerifyAccount() {
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const context = useContext(MyContext);

  const history = useNavigate();

  const handleOtpChange = (value) => {
    setOtp(value);
  };

  const verifyOtp = (e) => {
    e.preventDefault();

    if (otp !== "") {
      setIsLoading(true);
      const actionType = localStorage.getItem("actionType");

      if (actionType !== "forgot-password") {
        postData("/api/user/verifyEmail", {
          email: localStorage.getItem("userEmail"),
          otp: otp,
        }).then((res) => {
          if (res?.error === false) {
            context.openAlertBox("success", res?.message);
            localStorage.removeItem("userEmail");
            setIsLoading(false);
            history("/login");
          } else {
            context.openAlertBox("error", res?.message);
             setIsLoading(false);
          }
        });
      } else {
        postData("/api/user/verify-forgot-password-otp", {
          email: localStorage.getItem("userEmail"),
          otp: otp,
        }).then((res) => {
          if (res?.error === false) {
            context.openAlertBox("success", res?.message);
            history("/changepassword");
          } else {
            context.openAlertBox("error", res?.message);
             setIsLoading(false);
          }
        });
      }
    } else {
      context.openAlertBox("error", "Please enter otp");
    }
  };

  return (
    <section className="bg-[#fff] w-full h-[100vh]">
      <header className="w-full fixed top-0 left-0 px-4 py-3 flex items-center justify-between z-50">
        <Link to="/">
          <img src={logo} alt="" className="w-[200px]" />
        </Link>

        <div className="flex items-center gap-0">
          <NavLink to="/login" exact={true} activeClassName="isActive">
            <Button className="!rounded-full !text-[rgba(0,0,0,0.8)] !px-5 flex gap-2">
              <CgLogIn className="text-[18px]" />
              Login
            </Button>
          </NavLink>

          <NavLink to="/signup" exact={true} activeClassName="isActive">
            <Button className="!rounded-full !text-[rgba(0,0,0,0.8)] !px-5 flex gap-1">
              <FaRegUser className="!text-[15px]" /> Sign up
            </Button>
          </NavLink>
        </div>
      </header>

      {/* <img src={img} alt="" className="w-full fixed top-0 left-0 opacity-5" /> */}

      <div className="loginbox card w-[600px] h-auto pb-20 mx-auto pt-20 relative z-50">
        <div className="text-center">
          <img src={logo1} alt="" className="w-[100px] m-auto" />
        </div>

        <h1 className="text-[35px] text-center font-[700] mt-4">
          Welcome Back! <br />
          Please Verify your Email
        </h1>

        <p className="text-center text-[15px] mt-5">
          OTP sent to &nbsp;
          <span className="font-bold text-[#ff5252]">
            {localStorage.getItem("userEmail")}
          </span>
        </p>

        <form action="" onSubmit={verifyOtp}>
          <div className="flex items-center justify-center flex-col text-center">
            <OtpBox length={6} onChange={handleOtpChange} />
          </div>

          <div className="m-auto mt-5 w-[300px]">
            <Button
              type="submit"
              className="w-full btn-lg btn-org"
            >
              {isLoading === true ? (
                <CircularProgress color="inherit" />
              ) : (
                "Verify OTP"
              )}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default VerifyAccount;
