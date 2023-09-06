import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Componet/Home";
import Contact from "./Componet/Contact";
import Template from "./Template";
import ErroPage from "./Componet/ErroPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Template/>,
    errorElement:<ErroPage/>,
    children:[
      {
        path: "/home",
        element:<Home/>
      },
      {
        path: "/contact",
        element:<Contact/>
      }
    ]
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
