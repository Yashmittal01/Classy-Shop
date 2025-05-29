import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import { createContext, useState } from "react";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Products from "./Pages/Products/Products";

import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Slide from "@mui/material/Slide";
import { IoMdClose } from "react-icons/io";
import AddProduct from "./Pages/Products/AddProduct";
import HomeSliderBanner from "./Pages/HomeSliderBanner/HomeSliderBanner";
import AddHomeSlide from "./Pages/HomeSliderBanner/AddHomeSlide";
import Category from "./Pages/Category/Category";
import AddCategory from "./Pages/Category/AddCategory";
import SubCatList from "./Pages/Category/SubCatList";
import AddSubCategory from "./Pages/Category/AddSubCategory";
import Users from "./Pages/Users/Users";
import Orders from "./Pages/Orders/Orders";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import VerifyAccount from "./Pages/VerifyAccount/VerifyAccount";
import ChangePassword from "./Pages/ChangePassword/ChangePassword";
import toast, { Toaster } from "react-hot-toast";
import { fetchDataFromApi } from "./utils/api";
import Profile from "./Pages/Profile/Profile";
import AddAddress from "./Pages/Address/addAddress";

const MyContext = createContext();

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  const [userData, setUserData] = useState(null)

  const [isOpenFullScreenPanel, setIsOpenFullScreenPanel] = useState({
    open: false,
    model: "",
  });

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <section className="main">
          <Header />
          <div className="contentmain flex ">
            <Sidebar />

            <Dashboard />
          </div>
        </section>
      ),
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/forgotpassword",
      element: <ForgotPassword />,
    },
    {
      path: "/verifyaccount",
      element: <VerifyAccount />,
    },
    {
      path: "/changepassword",
      element: <ChangePassword />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/products",
      element: (
        <section className="main">
          <Header />
          <div className="contentmain flex ">
            <Sidebar />

            <Products />
          </div>
        </section>
      ),
    },
    {
      path: "/homeslider/list",
      element: (
        <section className="main">
          <Header />
          <div className="contentmain flex ">
            <Sidebar />

            <HomeSliderBanner />
          </div>
        </section>
      ),
    },
    {
      path: "/category/list",
      element: (
        <section className="main">
          <Header />
          <div className="contentmain flex ">
            <Sidebar />

            <Category />
          </div>
        </section>
      ),
    },
    {
      path: "/subcategory/list",
      element: (
        <section className="main">
          <Header />
          <div className="contentmain flex ">
            <Sidebar />

            <SubCatList />
          </div>
        </section>
      ),
    },
    {
      path: "/users",
      element: (
        <section className="main">
          <Header />
          <div className="contentmain flex ">
            <Sidebar />

            <Users />
          </div>
        </section>
      ),
    },
    {
      path: "/orders",
      element: (
        <section className="main">
          <Header />
          <div className="contentmain flex ">
            <Sidebar />

            <Orders />
          </div>
        </section>
      ),
    },
     {
      path: "/profile",
      element: (
        <section className="main">
          <Header />
          <div className="contentmain flex ">
            <Sidebar />

            <Profile />
          </div>
        </section>
      ),
    },
  ]);

  const openAlertBox = (status, msg) => {
    if (status === "success") {
      toast.success(msg);
    }
    if (status === "error") {
      toast.error(msg);
    }
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
    }, [isLogin]);

  const values = {
    isSidebarOpen,
    setIsSidebarOpen,
    isLogin,
    setIsLogin,
    isOpenFullScreenPanel,
    setIsOpenFullScreenPanel,
    openAlertBox,
    setUserData,
    userData
  };

  return (
    <MyContext.Provider value={values}>
      <RouterProvider router={router} />

      <Dialog
        fullScreen
        open={isOpenFullScreenPanel.open}
        onClose={() =>
          setIsOpenFullScreenPanel({
            open: false,
          })
        }
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={() =>
                setIsOpenFullScreenPanel({
                  open: false,
                })
              }
              aria-label="close"
            >
              <IoMdClose className="text-gray-800" />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              <span className="text-gray-800">
                {isOpenFullScreenPanel.model}
              </span>
            </Typography>
          </Toolbar>
        </AppBar>

        {isOpenFullScreenPanel.model === "Add Product" && <AddProduct />}

        {isOpenFullScreenPanel.model === "Add Home Slide" && <AddHomeSlide />}

        {isOpenFullScreenPanel.model === "Add New Category" && <AddCategory />}

        {isOpenFullScreenPanel.model === "Add New Sub Category" && (
          <AddSubCategory />
        )}

        {isOpenFullScreenPanel.model === "Add New Address" && (
          <AddAddress />
        )}
      </Dialog> 

      <Toaster />
      
    </MyContext.Provider>
  );
}

export default App;

export { MyContext };
