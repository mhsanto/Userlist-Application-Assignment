import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./components/pages/home.tsx";
import NotFoundPage from "./components/pages/not-found.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <NotFoundPage />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>
);
