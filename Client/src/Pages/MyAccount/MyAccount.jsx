import React, { useContext, useEffect, useState } from "react";
import { Button, CircularProgress } from "@mui/material";
import TextField from "@mui/material/TextField";
import AccountSidebar from "../../Components/AccountSidebar/AccountSidebar";
import { MyContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { editData, postData } from "../../utils/api";
import { Collapse } from "react-collapse";

function MyAccount() {
  const context = useContext(MyContext);
  const history = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const [userId, setUserId] = useState("");
  const [isChangePasswordFormShow, setIsChangePasswordFormShow] =
    useState(false);

  const [formField, setFormField] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const [changePassword, setChangePassword] = useState({
    email: "",
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("accesstoken");
    if (token === null) {
      history("/login");
    }
  }, [context?.isLogin]);

  useEffect(() => {
    if (context?.userData?._id !== "" && context?.userData?._id !== undefined) {
      setUserId(context?.userData._id);
      setFormField({
        name: context?.userData?.name,
        email: context?.userData?.email,
        mobile: context?.userData?.mobile,
      });

      setChangePassword({
        email: context?.userData?.email,
      });
    }
  }, [context?.userData]);

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setFormField(() => {
      return {
        ...formField,
        [name]: value,
      };
    });

    setChangePassword(() => {
      return {
        ...formField,
        [name]: value,
      };
    });
  };

  const validateValue = Object.values(formField).every((el) => el);

  const validateValue2 = Object.values(formField).every((el) => el);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);

    if (formField.name === "") {
      context.openAlertBox("error", "Please enter full name");
      return false;
    }

    if (formField.email === "") {
      context.openAlertBox("error", "Please enter email id");
      return false;
    }

    if (formField.mobile === "") {
      context.openAlertBox("error", "Please enter mobile number");
      return false;
    }

    editData(`/api/user/${userId}`, formField, { withCredentials: true }).then(
      (res) => {
        if (res?.error !== true) {
          setIsLoading(false);
          context.openAlertBox("success", res?.data?.message);
        } else {
          context.openAlertBox("error", res?.message);
          setIsLoading(false);
        }
      }
    );
  };

  const handleSubmitChangePassword = (e) => {
    e.preventDefault();

    setIsLoading2(true);

    if (changePassword.oldPassword === "") {
      context.openAlertBox("error", "Please enter oldPassword");
      return false;
    }

    if (changePassword.newPassword === "") {
      context.openAlertBox("error", "Please enter newPassword");
      return false;
    }

    if (changePassword.confirmPassword === "") {
      context.openAlertBox("error", "Please enter confirmPassword");
      return false;
    }

    if (changePassword.confirmPassword !== changePassword.confirmPassword) {
      context.openAlertBox(
        "error",
        "new password and confirm password not match"
      );
      return false;
    }

    postData(`/api/user/reset-password`, changePassword, {
      withCredentials: true,
    }).then((res) => {
      if (res?.error !== true) {
        setIsLoading2(false);
        context.openAlertBox("success", res?.message);
      } else {
        context.openAlertBox("error", res?.message);
        setIsLoading2(false);
      }
    });
  };

  return (
    <section className="py-10 w-full">
      <div className="container flex gap-5">
        <div className="col1 w-[20%]">
          <AccountSidebar />
        </div>
        <div className="col2 w-[70%]">
          <div className="card bg-white shadow-md rounded-md p-5 mb-5">
            <div className="flex items-center pb-0">
              <h2 className="pb-0">My Profile</h2>
              <Button
                className="!ml-auto"
                onClick={() =>
                  setIsChangePasswordFormShow(!isChangePasswordFormShow)
                }
              >
                Change Password
              </Button>
            </div>

            <form action="" className="mt-8" onSubmit={handleSubmit}>
              <div className="flex items-center gap-5">
                <div className="w-[50%]">
                  <TextField
                    label="Full Name"
                    variant="outlined"
                    size="small"
                    className="w-full"
                    onChange={onChangeInput}
                    disabled={isLoading === true ? true : false}
                    value={formField.name}
                    name="name"
                  />
                </div>

                <div className="w-[50%]">
                  <TextField
                    label="Email"
                    type="email"
                    variant="outlined"
                    size="small"
                    className="w-full"
                    onChange={onChangeInput}
                    disabled={true}
                    value={formField.email}
                    name="email"
                  />
                </div>
              </div>

              <div className="flex items-center mt-4 gap-5">
                <div className="w-[50%]">
                  <TextField
                    label="Phone Number"
                    variant="outlined"
                    size="small"
                    className="w-full"
                    onChange={onChangeInput}
                    disabled={isLoading === true ? true : false}
                    value={formField.mobile}
                    name="mobile"
                  />
                </div>
              </div>

              <br />

              <div className="flex items-center w-full mt-3 mb-3">
                <Button
                  type="submit"
                  disabled={!validateValue}
                  className={` btn-lg flex gap-3 ${
                    !validateValue === true
                      ? "!bg-gray-800 !text-white"
                      : "btn-org"
                  }`}
                >
                  {isLoading === true ? (
                    <CircularProgress color="inherit" />
                  ) : (
                    "Update Profile"
                  )}
                </Button>
              </div>
            </form>
          </div>

          {/* {isChangePasswordFormShow === true && ( */}
          <Collapse isOpened={isChangePasswordFormShow}>
            <div className="card bg-white shadow-md rounded-md p-5">
              <div className="flex items-center pb-0">
                <h2 className="pb-0">Change Password</h2>
              </div>

              <form
                action=""
                className="mt-8"
                onSubmit={handleSubmitChangePassword}
              >
                <div className="flex items-center gap-5">
                  <div className="w-[50%]">
                    <TextField
                      label="Old Password"
                      variant="outlined"
                      size="small"
                      className="w-full"
                      onChange={onChangeInput}
                      disabled={isLoading2 === true ? true : false}
                      value={changePassword.oldPassword}
                      name="oldPassword"
                    />
                  </div>

                  <div className="w-[50%]">
                    <TextField
                      label="New Password"
                      type="text"
                      variant="outlined"
                      size="small"
                      className="w-full"
                      onChange={onChangeInput}
                      disabled={isLoading2 === true ? true : false}
                      value={changePassword.newPassword}
                      name="newPassword"
                    />
                  </div>
                </div>

                <div className="flex items-center mt-4 gap-5">
                  <div className="w-[50%]">
                    <TextField
                      label="Confirm Password"
                      variant="outlined"
                      size="small"
                      className="w-full"
                      onChange={onChangeInput}
                      disabled={isLoading2 === true ? true : false}
                      value={changePassword.confirmPassword}
                      name="confirmPassword"
                    />
                  </div>
                </div>

                <br />

                <div className="flex items-center w-full mt-3 mb-3">
                  <Button
                    type="submit"
                    disabled={!validateValue2}
                    className={` btn-lg flex gap-3 ${
                      !validateValue2 === true
                        ? "!bg-gray-800 !text-white"
                        : "btn-org"
                    }`}
                  >
                    {isLoading2 === true ? (
                      <CircularProgress color="inherit" />
                    ) : (
                      "Change Password"
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </Collapse>
          {/* )} */}
        </div>
      </div>
    </section>
  );
}

export default MyAccount;
