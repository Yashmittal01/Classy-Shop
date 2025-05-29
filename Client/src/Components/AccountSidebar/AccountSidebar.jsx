import React, { useContext, useEffect, useState } from "react";
import user from "../../assets/images.png";
import { FaCloudUploadAlt } from "react-icons/fa";
import { Button, CircularProgress } from "@mui/material";
import { FaRegUser } from "react-icons/fa";
import { IoBagCheckOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import { NavLink } from "react-router";
import { MyContext } from "../../App";
import { uploadImage } from "../../utils/api";

function AccountSidebar() {
  const [preview, setPreview] = useState([]);
  const [uploading, setUploading] = useState(false);

  const context = useContext(MyContext);

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
    <div className="card bg-white shadow-md rounded-md sticky top-[10px]">
      <div className="w-full p-5 flex items-center justify-center flex-col">
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

        <h3>{context?.userData?.name}</h3>
        <h6 className="text-[13px] font-[500]">{context?.userData?.email}</h6>
      </div>

      <ul className="list-none pb-5 bg-[#f1f1f1] myaccount-tabs">
        <li className="w-full">
          <NavLink to="/myaccount" exact={true} activeclassName="isActive">
            <Button className="flex items-center gap-2 w-full !justify-start !text-left !py-2 !px-5 !text-[rgba(0,0,0,0.7)] !capitalize !rounded-none">
              <FaRegUser className="text-[15px]" />
              My Profile
            </Button>
          </NavLink>
        </li>

        <li className="w-full">
          <NavLink to="/mylist" exact={true} activeclassName="isActive">
            <Button className="flex items-center gap-2 w-full !justify-start !text-left !px-5 !py-2 !text-[rgba(0,0,0,0.7)] !capitalize !rounded-none">
              <IoMdHeartEmpty className="text-[17px]" />
              My List
            </Button>
          </NavLink>
        </li>

        <li className="w-full">
          <NavLink to="/myorder" exact={true} activeclassName="isActive">
            <Button className="flex items-center gap-2 w-full !justify-start !text-left !px-5 !py-2 !text-[rgba(0,0,0,0.7)] !capitalize !rounded-none">
              <IoBagCheckOutline className="text-[17px]" />
              My Order
            </Button>
          </NavLink>
        </li>

        <li className="w-full">
          <Button className="flex items-center gap-2 w-full !justify-start !text-left !px-5 !py-2 !text-[rgba(0,0,0,0.7)] !capitalize !rounded-none">
            <IoIosLogOut className="text-[18px]" />
            Logout
          </Button>
        </li>
      </ul>
    </div>
  );
}

export default AccountSidebar;
