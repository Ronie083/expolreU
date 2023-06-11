import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import NotPage from "../Pages/NotPage/NotPage";
import Dashboard from "../Layout/Dashboard";
import CourseCart from "../Pages/Dashboard/CourseCart/CourseCart";
import ManageUser from "../Pages/Dashboard/ManageUser/ManageUser";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: "instructors",
          element: <Instructors></Instructors>
        },
        {
          path: "classes",
          element: <PrivateRoute><Classes></Classes></PrivateRoute>
        },
        {
          path: "login",
          element: <Login></Login>
        },
        {
          path: "register",
          element: <Register></Register>
        }
      ]
    },
    {
      path: "dashboard",
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: "coursecart",
          element: <CourseCart></CourseCart>
        },
        {
          path: "manageuser",
          element: <ManageUser></ManageUser>
        }
      ]
    },
    {
      path: "*",
      element: <NotPage></NotPage>
    }
  ]);