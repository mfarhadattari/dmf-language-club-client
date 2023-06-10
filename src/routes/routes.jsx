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
import InstructorRoute from './InstructorRoute';

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
      {
        path: "add-class",
        element: (
          <InstructorRoute>
            <AddClass></AddClass>
          </InstructorRoute>
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
