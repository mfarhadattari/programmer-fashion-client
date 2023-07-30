import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./router/router";
import ThemeProvider from "./providers/ThemeProvider";
import AuthProvider from "./providers/AuthProvider";
import QueryProvider from "./providers/QueryProvider";
import { Toaster } from "react-hot-toast";
import {HelmetProvider} from 'react-helmet-async'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
    <ThemeProvider>
      <AuthProvider>
        <QueryProvider>
          <div className="max-w-7xl mx-auto font-space-grotesk">
            <RouterProvider router={router}></RouterProvider>
          </div>
          <Toaster />
        </QueryProvider>
      </AuthProvider>
    </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>
);
