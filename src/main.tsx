import React from 'react'
import App from './App.tsx'
import './index.css'
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home/Home.tsx';
import Order from './components/Order/Order.tsx';
import ManageLibrary from './components/ManageLibrary/ManageLibrary.tsx';
import Login from './components/Login/Login.tsx';
import OrderReview from './components/OrderReview/OrderReview.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/order",
        element: <Order />,
      },
      {
        path: "/order-review",
        element: <OrderReview />,
      },
      {
        path: "/manage-library",
        element: <ManageLibrary />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
