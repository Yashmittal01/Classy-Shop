import React, { useState } from "react";
import logo from "../../assets/logo.jpg";
import logo1 from "../../assets/logo1.jpg";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import { CgLogIn } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa6";

function ForgotPassword() {
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
          <img src={logo1} alt="" className="m-auto" />
        </div>

        <h1 className="text-[35px] text-center font-[700] mt-4">
          Having trouble to sign in?
          <br />
          Reset your password.
        </h1>

        <br />

        <form action="" className="w-full px-8 mt-3">
          <div className="form-group mb-4 w-full">
            <h4 className="text-[15px] font-[500] mb-1">Email</h4>
            <input
              type="email"
              className="w-full h-[50px] border border-[rgba(0,0,0,0.1)] rounded-sm focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3"
              placeholder="Enter your email"
            />
          </div>

          <Link to="/verifyaccount">
            <Button className="btn-org btn-lg w-full">Reset Password</Button>
          </Link>

          <div className="text-center flex items-center justify-center gap-4 mt-5">
            <span>Don't want to reset?</span>
            <Link
              to="/login"
              className="text-[#ff5252] font-[600] text-[15px] hover:underline hover:text-gray-700"
            >
              Login?
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ForgotPassword;
