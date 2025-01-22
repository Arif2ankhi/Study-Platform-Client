import {
    createBrowserRouter,
 
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import SignUp from "../pages/SignUp/SignUp";

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
          path:"signup",
          element:<SignUp></SignUp>
        },
        {
          path:"login",
          element:<Login></Login>

        }
      ]
    },
  ]);
// export default Routes;