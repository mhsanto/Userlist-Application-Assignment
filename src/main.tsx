import React from "react";
import ReactDOM from "react-dom/client";
import  { loader as rootLoader } from "./components/pages/root";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./components/pages/home.tsx";
import NotFoundPage from "./components/pages/not-found.tsx";
import User from "./components/pages/user.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    loader: rootLoader,
    element: <Homepage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/user/:userId",
    element: <User />,
    errorElement: <NotFoundPage />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>
);
