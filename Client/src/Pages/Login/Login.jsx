import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import { Button, CircularProgress } from "@mui/material";
import { IoMdEyeOff } from "react-icons/io";
import { IoMdEye } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { MyContext } from "../../App";
import { postData } from "../../utils/api";

function Login() {
  const [showpassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formField, setFormField] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const context = useContext(MyContext);

  const forgotPassword = () => {
    if (formField.email === "") {
      context.openAlertBox("error", "Please enter email id");
      return false;
    } else {
      console.log("calling api now...")
      context.openAlertBox("success", `OTP send to ${formField.email}`);
      localStorage.setItem("userEmail", formField.email);
      localStorage.setItem("actionType", "forgot-password");

      postData("/api/user/forgot-password", {
        email: formField.email,
      })
        .then((res) => {
           console.log("API Response:", res);
          if (res?.error === false) {
            context.openAlertBox("success", res?.message);
          } else {
            context.openAlertBox("error", res?.message);
          }
        })
        .catch((err) => {
          console.error("API Error:", err);
          context.openAlertBox("error", "Something went wrong");
        });
    }

    navigate("/verify");
  };

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

    if (formField.email === "") {
      context.openAlertBox("error", "Please enter email id");
      return false;
    }

    if (formField.password === "") {
      context.openAlertBox("error", "Please enter password");
      return false;
    }

    postData("/api/user/login", formField, { withCredentials: true }).then(
      (res) => {
        console.log(res);

        if (res?.error !== true) {
          setIsLoading(false);
          context.openAlertBox("success", res?.message);
          setFormField({
            email: "",
            password: "",
          });

          localStorage.setItem("accesstoken", res?.data?.accesstoken);
          localStorage.setItem("refreshtoken", res?.data?.refreshtoken);

          context.setIsLogin(true);

          navigate("/");
        } else {
          context.openAlertBox("error", res?.message);
          setIsLoading(false);
        }
      }
    );
  };

  return (
    <div>
      <section className="section py-10">
        <div className="container">
          <div className="card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-10">
            <h3 className="text-center text-black text-[18px]">
              Login to your account{" "}
            </h3>

            <form action="" className="w-full mt-5" onSubmit={handleSubmit}>
              <div className="form-group w-full mb-5">
                <TextField
                  id="outlined-basic"
                  value={formField.email}
                  name="email"
                  label="Email Id *"
                  type="email"
                  variant="outlined"
                  className="w-full"
                  onChange={onChangeInput}
                  disabled={isLoading === true ? true : false}
                />
              </div>

              <div className="form-group w-full mb-5 relative">
                <TextField
                  id="outlined-basic"
                  value={formField.password}
                  name="password"
                  type={showpassword === true ? "text" : "password"}
                  label="Password *"
                  variant="outlined"
                  className="w-full"
                  onChange={onChangeInput}
                  disabled={isLoading === true ? true : false}
                />

                <Button
                  className="!absolute top-[10px] right-[10px] z-50 !w-[35px] !h-[35px] !min-w-[35px] !text-black !rounded-full"
                  onClick={() => setShowPassword(!showpassword)}
                >
                  {showpassword === true ? (
                    <IoMdEye className="text-[20px] opacity-75" />
                  ) : (
                    <IoMdEyeOff className="text-[20px] opacity-75" />
                  )}
                </Button>
              </div>

              <a
                href=""
                className="link cursor-pointer text-[14px] font-[600]"
                onClick={forgotPassword}
              >
                Forgot Password
              </a>

              <div className="flex items-center w-full mt-3 mb-3">
                <Button
                  type="submit"
                  disabled={!validateValue}
                  className={`w-full btn-lg flex gap-3 ${
                    !validateValue === true
                      ? "!bg-gray-800 !text-white"
                      : "btn-org"
                  }`}
                >
                  {isLoading === true ? (
                    <CircularProgress color="inherit" />
                  ) : (
                    "Login"
                  )}
                </Button>
              </div>

              <p className="text-center">
                Not Registered?{" "}
                <Link
                  className="text-[#ff5252] text-[14px] font-[600]"
                  to="/register"
                >
                  Sign Up
                </Link>
              </p>

              <p className="text-center font-[500]">
                Or continue with social account
              </p>

              <Button className="flex gap-3 w-full !bg-[#f1f1f1] btn-lg !text-black">
                <FcGoogle className="text-[20px]" /> Login with google
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
