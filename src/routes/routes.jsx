import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/public/Home/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/public/Account/Login";
import Register from "../pages/public/Account/Register";
import Instructors from "../pages/public/Instuctors/Instructors";
import Classes from "../pages/public/Classes/Classes";
import Dashboard from "../layout/Dashboard";
import PrivateRoute from "./PrivateRoute";
import ManageUser from "../pages/Admin/ManageUser";
import AdminRoute from "./AdminRoute";
import ManageClass from "../pages/Admin/ManageClass";
import AddClass from "../pages/Instructor/AddClass";
import InstructorRoute from "./InstructorRoute";
import MyClass from "../pages/Instructor/MyClass";
import SelectedClass from "../pages/Student/SelectedClass";
import Payment from "../pages/Student/Payment";
import EnrolledClasses from "../pages/Student/EnrolledClasses";
import PaymentHistory from "../pages/Student/PaymentHistory";
import StudentRoute from "./StudentRoute";
import StudentHome from "./../pages/Student/StudentHome";
import InstructorHome from "./../pages/Instructor/InstructorHome";
import AdminHome from "./../pages/Admin/AdminHome";
import Profile from "../pages/public/Account/Profile";
import InstructorClass from "../pages/public/Instuctors/InstructorClass";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "/instructors/:id",
        element: <InstructorClass></InstructorClass>,
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      // ! Student Route
      {
        path: "student-home",
        element: (
          <StudentRoute>
            <StudentHome></StudentHome>
          </StudentRoute>
        ),
      },
      {
        path: "selected-class",
        element: (
          <StudentRoute>
            <SelectedClass></SelectedClass>
          </StudentRoute>
        ),
      },
      {
        path: "enrolled-class",
        element: (
          <StudentRoute>
            <EnrolledClasses></EnrolledClasses>
          </StudentRoute>
        ),
      },
      {
        path: "payment/:id",
        element: (
          <StudentRoute>
            <Payment></Payment>
          </StudentRoute>
        ),
      },
      {
        path: "payment-history",
        element: (
          <StudentRoute>
            <PaymentHistory></PaymentHistory>
          </StudentRoute>
        ),
      },
      // ! Instructor Route
      {
        path: "instructor-home",
        element: (
          <InstructorRoute>
            <InstructorHome></InstructorHome>
          </InstructorRoute>
        ),
      },
      {
        path: "add-class",
        element: (
          <InstructorRoute>
            <AddClass></AddClass>
          </InstructorRoute>
        ),
      },
      {
        path: "my-class",
        element: (
          <InstructorRoute>
            <MyClass></MyClass>
          </InstructorRoute>
        ),
      },
      // ! Admin Route
      {
        path: "admin-home",
        element: (
          <AdminRoute>
            <AdminHome></AdminHome>
          </AdminRoute>
        ),
      },
      {
        path: "manage-user",
        element: (
          <AdminRoute>
            <ManageUser></ManageUser>
          </AdminRoute>
        ),
      },
      {
        path: "manage-class",
        element: (
          <AdminRoute>
            <ManageClass></ManageClass>
          </AdminRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default routers;
