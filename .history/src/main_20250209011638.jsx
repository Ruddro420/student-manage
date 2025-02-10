import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/MainRouter.jsx";
import MainLayout from "./Layout/MainLayout.jsx";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <RouterProvider router={router}>
      <MainLayout />
      <Toaster />
    </RouterProvider>

  </React.StrictMode>
);
