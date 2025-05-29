import React, { useContext, useState } from "react";
// import img from "../../assets/pattern.webp";
import logo from "../../assets/logo.jpg";
import logo1 from "../../assets/logo1.jpg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Button, CircularProgress } from "@mui/material";
import { CgLogIn } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa6";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { postData } from "../../utils/api";
import { MyContext } from "../../App";

function ChangePassword() {
  const [isNewPasswordShow, setIsNewPasswordShow] = useState(false);

  const [isConfirmPasswordShow, setIsConfirmPasswordShow] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const [formField, setFormField] = useState({
    email: localStorage.getItem("userEmail"),
    newPassword: "",
    confirmPassword: "",
  });

  // console.log(localStorage.getItem("userEmail"))

  const history = useNavigate();

  const context = useContext(MyContext);

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setFormField(() => {
      return {
        ...formField,
        [name]: value,
      };
    });
  };

  const validateValue = Object.values(formField).every((el) => el);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);

    if (formField.newPassword === "") {
      context.openAlertBox("error", "Please enter new password");
      setIsLoading(false);
      return false;
    }

    if (formField.confirmPassword === "") {
      context.openAlertBox("error", "Please enter confirm password");
      setIsLoading(false);
      return false;
    }

    if (formField.confirmPassword !== formField.newPassword) {
      context.openAlertBox(
        "error",
        "New password and confirm password not match"
      );
      setIsLoading(false);
      return false;
    }

    // console.log(formField)

    postData(`/api/user/reset-password`, formField).then((res) => {
      console.log(res);
      if (res?.error === false) {
        localStorage.removeItem("userEmail");
        localStorage.removeItem("actionType");
        context.openAlertBox("success", res?.message);
        setIsLoading(false);
        history("/login");
      } else {
        context.openAlertBox("error", res?.message);
      }
    });
  };

  return (
    <section className="bg-[#fff] w-full">
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
          Welcome Back!
          <br />
          You can change your password <br /> from here.
        </h1>

        <br />

        <form action="" className="w-full px-8 mt-3" onSubmit={handleSubmit}>
          <div className="form-group mb-4 w-full">
            <h4 className="text-[15px] font-[500] mb-1"> New Password</h4>
            <div className="relative w-full">
              <input
                type={`${isNewPasswordShow === false ? "password" : "text"}`}
                className="w-full h-[50px] border border-[rgba(0,0,0,0.1)] rounded-sm focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3"
                name="newPassword"
                onChange={onChangeInput}
                value={formField.newPassword}
                disabled={isLoading === true ? true : false}
              />
              <Button
                className="!absolute top-[7px] right-[10px] z-50 !rounded-full !w-[35px] !h-[35px] !min-w-[40px] !text-gray-600"
                onClick={() => setIsNewPasswordShow(!isNewPasswordShow)}
              >
                {isNewPasswordShow === true ? (
                  <IoEye className="text-[18px]" />
                ) : (
                  <IoEyeOff className="text-[18px]" />
                )}
              </Button>
            </div>
          </div>

          <div className="form-group mb-4 w-full">
            <h4 className="text-[15px] font-[500] mb-1"> Confirm Password</h4>
            <div className="relative w-full">
              <input
                type={`${
                  isConfirmPasswordShow === false ? "password" : "text"
                }`}
                className="w-full h-[50px] border border-[rgba(0,0,0,0.1)] rounded-sm focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3"
                name="confirmPassword"
                onChange={onChangeInput}
                value={formField.confirmPassword}
                disabled={isLoading === true ? true : false}
              />
              <Button
                className="!absolute top-[7px] right-[10px] z-50 !rounded-full !w-[35px] !h-[35px] !min-w-[40px] !text-gray-600"
                onClick={() => setIsConfirmPasswordShow(!isConfirmPasswordShow)}
              >
                {isConfirmPasswordShow === true ? (
                  <IoEye className="text-[18px]" />
                ) : (
                  <IoEyeOff className="text-[18px]" />
                )}
              </Button>
            </div>
          </div>

          <Button
            type="submit"
            disabled={!validateValue}
            className={`w-full btn-lg ${
              !validateValue === true ? "!bg-gray-800 !text-white" : "btn-org"
            }`}
          >
            {isLoading === true ? (
              <CircularProgress color="inherit" />
            ) : (
              "Change Password"
            )}
          </Button>
        </form>
      </div>
    </section>
  );
}

export default ChangePassword;
