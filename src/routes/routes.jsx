import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/public/Home/Home";
import ErrorPage from "../pages/ErrorPage";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },

  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default routers;
