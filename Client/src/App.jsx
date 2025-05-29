import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import ProductListing from "./Pages/ProductListing/ProductListing";
import Footer from "./Components/Footer/Footer";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import React, { createContext, useEffect, useState } from "react";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import ProductZoom from "./Components/ProductZoom/ProductZoom";
import { Button } from "@mui/material";
import { IoCloseSharp } from "react-icons/io5";
import ProductDetailsComp from "./Components/ProductDetailsComp/ProductDetailsComp";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Cart from "./Pages/Cart/Cart";
import Verify from "./Pages/Verify/Verify";
import toast, { Toaster } from "react-hot-toast";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import Checkout from "./Pages/Checkout/Checkout";
import MyAccount from "./Pages/MyAccount/MyAccount";
import MyList from "./Pages/MyList/MyList";
import Orders from "./Pages/Orders/Orders";
import { fetchDataFromApi } from "./utils/api";

// const alertBox = (msg, type)=>{
// if(type==="success"){
//   toast.success(msg)
// }
// if(type==="error"){
//   toast.error(msg)
// }
// }

const MyContext = createContext();

function App() {
  const [openproductdetailmodal, setOpenProductDetailModal] = useState(false);
  const [maxWidth, setMaxWidth] = useState("lg");
  const [fullWidth, setFullWidth] = useState(true);
  const apiUrl = import.meta.env.VITE_API_URL;
  const [userData, setUserData] = useState(null)

  const [opencartpannel, setOpenCartPannel] = useState(false);

  const [Islogin, setIsLogin] = useState(false);

  const toggleCartPannel = (newOpen) => () => {
    setOpenCartPannel(newOpen);
  };

  useEffect(() => {
    const token = localStorage.getItem("accesstoken");
    if (token !== undefined && token !== null && token !== "") {
      setIsLogin(true);

      fetchDataFromApi(`/api/user/user-details`).then((res)=>{
        setUserData(res.data)
        // if(res?.response?.data?.error===true){
          if(res?.response?.data?.message==="You have not login"){
            localStorage.removeItem('accesstoken')
            localStorage.removeItem('refreshtoken')
            openAlertBox('error',"Your session is closed please login again")
            window.location.href= "/login"
            setIsLogin(false)
          }
        // }
      })
    } else {
      setIsLogin(false);
    }
  }, [Islogin]);

  const openAlertBox = (status, msg) => {
    if (status === "success") {
      toast.success(msg);
    }
    if (status === "error") {
      toast.error(msg);
    }
  };

  const handleClose = () => {
    setOpenProductDetailModal(false);
  };

  const values = {
    setOpenProductDetailModal,
    setOpenCartPannel,
    toggleCartPannel,
    opencartpannel,
    openAlertBox,
    Islogin,
    setIsLogin,
    setUserData,
    userData,
  };

  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={values}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productlisting" element={<ProductListing />} />
            <Route path="/productDetails/:id" element={<ProductDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/verify" element={<Verify />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/myaccount" element={<MyAccount />} />
            <Route path="/mylist" element={<MyList />} />
            <Route path="/myorder" element={<Orders />} />
          </Routes>
          <Footer />
        </MyContext.Provider>
      </BrowserRouter>

      <Toaster />

      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={openproductdetailmodal}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="productdetailmodal"
      >
        <DialogContent>
          <div className="flex items-center w-full productdetailmodalcontainer relative">
            <Button
              className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-black !absolute !top-[0px] !right-[0px] !bg-[#f1f1f1]"
              onClick={handleClose}
            >
              <IoCloseSharp className="text-[20px]" />
            </Button>
            <div className="col1 w-[40%] px-3">
              <ProductZoom />
            </div>

            <div className="col2 w-[60%] py-8 px-8  productcontent">
              <ProductDetailsComp />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default App;

export { MyContext };
