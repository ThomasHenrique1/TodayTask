/* eslint-disable no-unused-vars */
import React from "react"; // 🔥 Certifique-se de importar o React
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import TaskPage from "./page/TaskPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/task/:id",
    element: <TaskPage />, // 🔥 Removemos a passagem de props
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} /> {/* 🔥 Definir o roteador uma única vez */}
  </StrictMode>
);
