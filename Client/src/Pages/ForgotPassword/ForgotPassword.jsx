import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import { Button, CircularProgress } from "@mui/material";
import { IoMdEyeOff } from "react-icons/io";
import { IoMdEye } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { MyContext } from "../../App";
import { postData } from "../../utils/api";

function ForgotPassword() {
  const [showpassword, setShowPassword] = useState(false);
  const [showpassword2, setShowPassword2] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [formField, setFormField] = useState({
    email: localStorage.getItem("userEmail"),
    newPassword: "",
    confirmPassword: "",
  });

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

    postData(`/api/user/reset-password`,formField).then((res)=>{
      console.log(res)
      if(res?.error === false){
      localStorage.removeItem('userEmail')
      localStorage.removeItem('actionType')
      context.openAlertBox('success', res?.message)
      setIsLoading(false);
      history('/login')
      } else {
        context.openAlertBox('error', res?.message)
      }

    })

  };

  return (
    <div>
      <section className="section py-10">
        <div className="container">
          <div className="card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-10">
            <h3 className="text-center text-black text-[18px]">
              Forgot Password
            </h3>

            <form action="" className="w-full mt-5" onSubmit={handleSubmit}>
              <div className="form-group w-full mb-5 relative">
                <TextField
                  id="password"
                  name="newPassword"
                  label="New Password *"
                  type={showpassword === true ? "text" : "password"}
                  variant="outlined"
                  className="w-full"
                  onChange={onChangeInput}
                  value={formField.newPassword}
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

              <div className="form-group w-full mb-5 relative">
                <TextField
                  id="confirmpassword"
                  name="confirmPassword"
                  type={showpassword2 === true ? "text" : "password"}
                  label="Confirm Password *"
                  variant="outlined"
                  className="w-full"
                  onChange={onChangeInput}
                  value={formField.confirmPassword}
                  disabled={isLoading === true ? true : false}
                />

                <Button
                  className="!absolute top-[10px] right-[10px] z-50 !w-[35px] !h-[35px] !min-w-[35px] !text-black !rounded-full"
                  onClick={() => setShowPassword2(!showpassword2)}
                >
                  {showpassword2 === true ? (
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
                    "Change Password"
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ForgotPassword;
