import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { IoMdEyeOff } from "react-icons/io";
import { IoMdEye } from "react-icons/io";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { postData } from "../../utils/api";
import { MyContext } from "../../App";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";

function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const [showpassword, setShowPassword] = useState(false);
  const [formField, setFormField] = useState({
    name: "",
    email: "",
    password: "",
  });

  const context = useContext(MyContext);
  const history = useNavigate();

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
        localStorage.setItem("userEmail", formField.email)
        setFormField({
          name: "",
          email: "",
          password: "",
        });
        history('/verify')
      } else {
        context.openAlertBox("error", res?.message);
        setIsLoading(false)
      }
    });
  };

  return (
    <div>
      <section className="section py-10">
        <div className="container">
          <div className="card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-10">
            <h3 className="text-center text-black text-[18px]">
              Register with a new account
            </h3>

            <form action="" className="w-full mt-5" onSubmit={handleSubmit}>
              <div className="form-group w-full mb-5">
                <TextField
                  id="name"
                  name="name"
                  value={formField.name}
                  label="Full Name *"
                  type=""
                  variant="outlined"
                  className="w-full"
                  disabled={isLoading === true ? true : false}
                  onChange={onChangeInput}
                />
              </div>

              <div className="form-group w-full mb-5">
                <TextField
                  id="email"
                  label="Email Id *"
                  type="email"
                  name="email"
                  value={formField.email}
                  variant="outlined"
                  className="w-full"
                  disabled={isLoading === true ? true : false}
                  onChange={onChangeInput}
                />
              </div>

              <div className="form-group w-full mb-5 relative">
                <TextField
                  id="password"
                  name="password"
                  value={formField.password}
                  type={showpassword === true ? "text" : "password"}
                  label="Password *"
                  variant="outlined"
                  className="w-full"
                  disabled={isLoading === true ? true : false}
                  onChange={onChangeInput}
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
                    "Register"
                  )}
                </Button>
              </div>

              <p className="text-center">
                Already have an account?{" "}
                <Link
                  className="text-[#ff5252] text-[14px] font-[600]"
                  to="/login"
                >
                  Login
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

export default Register;
