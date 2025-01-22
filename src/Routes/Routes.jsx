import {
    createBrowserRouter,
 
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Register from "../pages/Register/Register";
import SignIn from "../pages/Signin/Signin";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
           path: "/",
           element: <Home></Home> 
        },
        {
          path:"register",
          element:<Register></Register>
        },
        {
          path:"signin",
          element:<SignIn></SignIn>

        }
      ]
    },
  ]);
// export default Routes;