import React, { useContext, useEffect, useState } from "react";
import img from "../../assets/shield.png";
import OtpBox from "../../Components/OtpBox/OtpBox";
import { Button } from "@mui/material";
import { postData } from "../../utils/api";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../App";

function Verify() {
  const [otp, setOtp] = useState("");
  const handleOtpChange = (value) => {
    setOtp(value);
  };

  const history = useNavigate();
  const context = useContext(MyContext);

  const verifyOtp = (e) => {
    e.preventDefault();

    const actionType = localStorage.getItem("actionType");

    if(actionType !== "forgot-password"){
      postData("/api/user/verifyEmail", {
      email: localStorage.getItem("userEmail"),
      otp: otp,
    }).then((res) => {
      if (res?.error === false) {
        context.openAlertBox("success", res?.message);
        localStorage.removeItem("userEmail")
        history("/login");
      } else {
        context.openAlertBox("error", res?.message);
      }
    });
    } else{
      postData("/api/user/verify-forgot-password-otp", {
      email: localStorage.getItem("userEmail"),
      otp: otp,
    }).then((res) => {
      if (res?.error === false) {
        context.openAlertBox("success", res?.message);
        history("/forgotpassword");
      } else {
        context.openAlertBox("error", res?.message);
      }
    });
    }

  };

  return (
    <div>
      <section className="section py-10">
        <div className="container">
          <div className="card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-10">
            <div className="text-center flex items-center justify-center">
              <img src={img} alt="" width="80" />
            </div>
            <h3 className="text-center text-black text-[18px] mt-4 mb-1">
              Verify OTP
            </h3>

            <p className="text-center mt-0 mb-4">
              OTP Send to{" "}
              <span className="text-[#ff5252] font-bold">{localStorage.getItem("userEmail")}</span>
            </p>

            <form action="" onSubmit={verifyOtp}>
              <OtpBox length={6} onChange={handleOtpChange} />

              <div className="flex items-center justify-center mt-5 px-3">
                <Button type="submit" className="btn-org btn-lg w-full">
                  Verify OTP
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Verify;
