import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/MainRouter.jsx";
import { Toaster } from "react-hot-toast";
import { StudentProvider } from "./StudentContext.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StudentProvider>
      <RouterProvider router={router} />
      <Toaster />
    </StudentProvider>
  </React.StrictMode>
);
