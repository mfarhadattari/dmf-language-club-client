import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/public/Home/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/public/Account/Login";
import Register from "../pages/public/Account/Register";

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
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default routers;
