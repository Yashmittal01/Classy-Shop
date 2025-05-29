import React, { useContext } from "react";
import { MyContext } from "../../App";
import user from "../../assets/user.png";
import { useState } from "react";
import { useEffect } from "react";
import { Button, CircularProgress, TextField, Checkbox } from "@mui/material";
import { FaCloudUploadAlt } from "react-icons/fa";
import {
  editData,
  fetchDataFromApi,
  postData,
  uploadImage,
} from "../../utils/api";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { Collapse } from "react-collapse";
import { useNavigate } from "react-router-dom";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function Profile() {
  const context = useContext(MyContext);

  const [preview, setPreview] = useState([]);
  const [uploading, setUploading] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const [userId, setUserId] = useState("");
  const [isChangePasswordFormShow, setIsChangePasswordFormShow] =
    useState(false);
  const [phone, setPhone] = useState("");

  const history = useNavigate()

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
      fetchDataFromApi(`api/address/get?userId=${context?.userData?._id}`).then(
        (res) => {
          console.log(res);
        }
      );

      setUserId(context?.userData._id);
      setFormField({
        name: context?.userData?.name,
        email: context?.userData?.email,
        mobile: context?.userData?.mobile,
      });
      const ph = `${context?.userData?.mobile}`;
      setPhone(ph);

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

  useEffect(() => {
    const userAvatar = [];
    if (
      context?.userData?.avatar !== "" &&
      context?.userData?.avatar !== undefined
    ) {
      userAvatar.push(context?.userData?.avatar);
      setPreview(userAvatar);
    }
  }, [context?.userData]);

  let img_arr = [];
  let uniqueArray = [];
  let selectedImages = [];
  const formdata = new FormData();

  const onChangeFile = async (e, apiEndPoint) => {
    try {
      setPreview([]);
      const files = e.target.files;
      setUploading(true);
      console.log(files);

      for (var i = 0; i < files.length; i++) {
        if (
          files[i] &&
          (files[i].type === "image/jpeg" ||
            files[i].type === "image/jpg" ||
            files[i].type === "image/png" ||
            files[i].type === "image/webp")
        ) {
          const file = files[i];
          selectedImages.push(file);
          formdata.append("avatar", file);
        } else {
          context.openAlertBox(
            "error",
            "Please select a valid jpg , png , webp image file"
          );
          setUploading(false);
          return false;
        }
      }

      uploadImage("/api/user/user-avatar", formdata).then((res) => {
        setUploading(false);
        let avatar = [];
        avatar.push(res?.data?.avtar);
        context.openAlertBox("success", res?.data?.message);
        setPreview(avatar);
        console.log(res);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={`py-6 p-5 ${
        context.isSidebarOpen === false ? "w-full" : "w-full pl-72"
      }`}
    >
      <div className="card w-[70%] pt-5 px-5 pb-5 shadow-md sm:rounded-lg bg-white">
        <div className="flex items-center justify-between">
          <h2 className="text-[20px] font-[600]">User Profile</h2>

          <Button
            className="!ml-auto !text-[#ff5252]"
            onClick={() =>
              setIsChangePasswordFormShow(!isChangePasswordFormShow)
            }
          >
            Change Password
          </Button>
        </div>

        <br />

        <div className="w-[110px] h-[110px] rounded-full overflow-hidden mb-4 relative group flex items-center justify-center bg-gray-200">
          {uploading === true ? (
            <CircularProgress color="inherit" />
          ) : (
            <>
              {preview?.length !== 0 ? (
                preview?.map((img, index) => {
                  return (
                    <img
                      src={img}
                      key={index}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  );
                })
              ) : (
                <img src={user} alt="" className="w-full h-full object-cover" />
              )}
            </>
          )}

          <div className="overlay w-[100%] h-[100%] absolute top-0 left-0 z-50 bg-[rgba(0,0,0,0.6)] flex items-center justify-center opacity-0 transition-all group-hover:opacity-100">
            <FaCloudUploadAlt className="text-white text-[25px]" />
            <input
              type="file"
              accept="image/*"
              className="absolute top-0 left-0 h-full w-full opacity-0 cursor-pointer"
              onChange={(e) => onChangeFile(e, "/api/user/user-avatar")}
              name="avatar"
            />
          </div>
        </div>

        <form action="" className="form mt-8" onSubmit={handleSubmit}>
          <div className="flex items-center gap-5">
            <div className="w-[50%]">
              <input
                type="text"
                className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
                onChange={onChangeInput}
                disabled={isLoading === true ? true : false}
                value={formField.name}
                name="name"
              />
            </div>

            <div className="w-[50%]">
              <input
                type="email"
                className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
                onChange={onChangeInput}
                disabled={true}
                value={formField.email}
                name="email"
              />
            </div>
          </div>

          <div className="flex items-center mt-4 gap-5">
            <div className="w-[48.5%]">
              <PhoneInput
                defaultCountry="np"
                value={phone}
                onChange={(phone) => {
                  setPhone(phone);
                  setFormField({
                    mobile: phone,
                  });
                }}
                disabled={isLoading === true ? true : false}
              />
            </div>
          </div>

          <br />

          <div
            className="flex items-center justify-center p-3 border border-dashed border-[rgba(0,0,0,0.2)] bg-[#F6EDE9] hover:bg-[#faeae4] cursor-pointer"
            onClick={() =>
              context.setIsOpenFullScreenPanel({
                open: true,
                model: "Add New Address",
              })
            }
          >
            <span className="text-[14px] font-[500]">Add Address</span>
          </div>

          <br />

          <label className="addressBox w-full flex items-center justify-center cursor-pointer bg-[#f1f1f1] p-3 rounded-md">
            <Checkbox {...label} defaultChecked />
          </label>

          <br />

          <div className="flex items-center w-full mt-3 mb-3">
            <Button
              type="submit"
              disabled={!validateValue}
              className={` btn-lg flex w-full ${
                !validateValue === true ? "!bg-gray-800 !text-white" : "btn-org"
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
        <div className="card bg-white shadow-md rounded-md p-5 w-[70%] mt-5">
          <div className="flex items-center pb-0">
            <h2 className="pb-0 text-[18px] font-[600]">Change Password</h2>
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
                className={` btn-lg flex w-full ${
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
    </div>
  );
}

export default Profile;
