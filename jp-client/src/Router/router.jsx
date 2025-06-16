import {
    createBrowserRouter 
  } from "react-router-dom";
import Layouts from "../Layouts/Layouts";
 import Home from "../Components/Home";
import SignUP from "../Components/SignUp";
import SignIn from "../Components/SignIn";
import Users from "../Components/Users";
import JobsCards from "../Components/JobsCards";


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
      {path: 'signin',
        element: <SignIn></SignIn>,
      },
      {path:'users',
        element: <Users></Users>,
        loader: ()=>fetch('http://localhost:5000/users'),
      },
      {
        path:'jobs',
        element:<JobsCards></JobsCards>,
      },
    ]
    },
  ]);


  export default router;