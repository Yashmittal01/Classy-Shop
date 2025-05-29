import React, { useContext, useState } from "react";
import img from "../../assets/pattern.webp";
import logo from "../../assets/logo.jpg";
import logo1 from "../../assets/logo1.jpg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { CgLogIn } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import CircularProgress from "@mui/material/CircularProgress";
import { postData } from "../../../../Client/src/utils/api";
import { MyContext } from "../../App";

function Signup() {
  const [loadingGoogle, setLoadingGoogle] = useState(false);
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [formField, setFormField] = useState({
    name: "",
    email: "",
    password: "",
  });

  const history = useNavigate();
  const context = useContext(MyContext)

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

    if (formField.name === "") {
      context.openAlertBox("error", "Please add full name");
      return false;
    }

    if (formField.email === "") {
      context.openAlertBox("error", "Please enter email id");
      return false;
    }

    if (formField.password === "") {
      context.openAlertBox("error", "Please enter password");
      return false;
    }

    postData("/api/user/register", formField).then((res) => {
      console.log(res);

      if (res?.error !== true) {
        setIsLoading(false);
        context.openAlertBox("success", res?.message);
        localStorage.setItem("userEmail", formField.email);
        setFormField({
          name: "",
          email: "",
          password: "",
        });
        history("/verifyaccount");
      } else {
        context.openAlertBox("error", res?.message);
        setIsLoading(false);
      }
    });
  };

  function handleClickGoogle() {
    setLoadingGoogle(true);
  }

  const [loadingfb, setLoadingFb] = useState(false);
  function handleClickfb() {
    setLoadingFb(true);
  }

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
          Join us today! Get special
          <br />
          benefits and stay up-to-date.
        </h1>

        <div className="flex items-center justify-center w-full mt-5 gap-4">
          <Button
            size="small"
            onClick={handleClickGoogle}
            endIcon={<FcGoogle className="!text-[25px]" />}
            loading={loadingGoogle}
            loadingPosition="end"
            variant="outlined"
            className="!text-[16px] !py-1 !capitalize !px-5 !text-[rgba(0,0,0,0.7)] border !border-[rgba(0,0,0,0.7)]"
          >
            Login with google
          </Button>

          <Button
            size="small"
            onClick={handleClickfb}
            endIcon={<BsFacebook className="!text-[25px]" />}
            loading={loadingfb}
            loadingPosition="end"
            variant="outlined"
            className="!text-[16px] !py-1 !capitalize !px-5 !text-[rgba(0,0,0,0.7)] border !border-[rgba(0,0,0,0.7)]"
          >
            Login with facebook
          </Button>
        </div>

        <br />

        <div className="w-full flex items-center justify-center gap-3">
          <span className="flex items-center w-[100px] h-[1px] bg-[rgba(0,0,0,0.2)]"></span>

          <span className="text-[14px] font-[500]">
            Or, Sign up with your email
          </span>

          <span className="flex items-center w-[100px] h-[1px] bg-[rgba(0,0,0,0.2)]"></span>
        </div>

        <br />

        <form action="" className="w-full px-8 mt-3" onSubmit={handleSubmit}>
          <div className="form-group mb-4 w-full">
            <h4 className="text-[15px] font-[500] mb-1">Full Name</h4>
            <input
              type="text"
              className="w-full h-[50px] border border-[rgba(0,0,0,0.1)] rounded-sm focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3"
              name="name"
              value={formField.name}
              disabled={isLoading === true ? true : false}
              onChange={onChangeInput}
            />
          </div>

          <div className="form-group mb-4 w-full">
            <h4 className="text-[15px] font-[500] mb-1">Email</h4>
            <input
              type="email"
              name="email"
              value={formField.email}
              disabled={isLoading === true ? true : false}
              onChange={onChangeInput}
              className="w-full h-[50px] border border-[rgba(0,0,0,0.1)] rounded-sm focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3"
            />
          </div>

          <div className="form-group mb-4 w-full">
            <h4 className="text-[15px] font-[500] mb-1">Password</h4>
            <div className="relative w-full">
              <input
                type={`${isPasswordShow === false ? "password" : "text"}`}
                name="password"
                value={formField.password}
                disabled={isLoading === true ? true : false}
                onChange={onChangeInput}
                className="w-full h-[50px] border border-[rgba(0,0,0,0.1)] rounded-sm focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3"
              />
              <Button
                className="!absolute top-[7px] right-[10px] z-50 !rounded-full !w-[35px] !h-[35px] !min-w-[40px] !text-gray-600"
                onClick={() => setIsPasswordShow(!isPasswordShow)}
              >
                {isPasswordShow === true ? (
                  <IoEye className="text-[18px]" />
                ) : (
                  <IoEyeOff className="text-[18px]" />
                )}
              </Button>
            </div>
          </div>

          <div className="form-group mb-4 w-full flex items-center justify-between">
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Remember Me"
              />
            </FormGroup>

            <Link
              to="/forgotpassword"
              className="text-[#ff5252] font-[600] text-[15px] hover:underline hover:text-gray-700"
            >
              Forgot Password?
            </Link>
          </div>

          <Button
          type="submit"
            disabled={!validateValue}
            className={`w-full btn-lg btn-org ${
              !validateValue === true ? "!bg-gray-800 !text-white" : "btn-org"
            }`}
          >
            {isLoading === true ? (
              <CircularProgress color="inherit" />
            ) : (
              "Sign Up"
            )}
          </Button>
        </form>
      </div>
    </section>
  );
}

export default Signup;
