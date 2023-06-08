import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routers from "./routes/routes";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./providers/AuthProvider";
import {Dots} from 'react-preloaders';

ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <React.StrictMode>
      <AuthProvider>
        <React.Fragment>
          <div className="font-space-grotesk">
            <RouterProvider router={routers}></RouterProvider>
          </div>
          <Dots  />
        </React.Fragment>
      </AuthProvider>
    </React.StrictMode>
  </HelmetProvider>
);
