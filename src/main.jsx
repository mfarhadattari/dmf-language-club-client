import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routers from "./routes/routes";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./providers/AuthProvider";
import QueryProvider from "./providers/QueryProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <React.StrictMode>
      <QueryProvider>
        <AuthProvider>
          <div className="font-space-grotesk">
            <RouterProvider router={routers}></RouterProvider>
          </div>
        </AuthProvider>
      </QueryProvider>
    </React.StrictMode>
  </HelmetProvider>
);
