import {
    createBrowserRouter 
  } from "react-router-dom";
import Layouts from "../Layouts/Layouts";
 import Home from "../Components/Home";
import SignUP from "../Components/SignUp";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layouts></Layouts>,
      children:[{
        path: '/',
        element: <Home></Home>
      },
      {
        path:'signup',
        element: <SignUP></SignUP>,
      },
    ]
    },
  ]);


  export default router;