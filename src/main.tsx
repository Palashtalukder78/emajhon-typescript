import React from 'react'
import App from './App.tsx'
import './index.css'
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home/Home.tsx';
import ManageLibrary from './components/ManageLibrary/ManageLibrary.tsx';
import Login from './components/Login/Login.tsx';
import OrderReview from './components/OrderReview/OrderReview.tsx';
import Products from './components/Products/Products.tsx';
import CartProductLoader from "./loaders/CartProducts.js";
import Register from './components/Register/Register.tsx';
import ForgotPassword from './components/ForgotPassword/ForgotPassword.tsx';

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
        path: "/products",
        element: <Products />,
      },
      {
        path: "/order-review",
        element: <OrderReview />,
        loader: CartProductLoader,
      },
      {
        path: "/manage-library",
        element: <ManageLibrary />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
