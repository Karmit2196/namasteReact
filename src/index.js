import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Error from "./components/Error";
import About from "./components/About";
import Body from "./components/Body";
import Contact from "./components/Contact";
import RestrauntMenu from "./components/RestrauntMenu";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./components/Cart";

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path:"/restraunts/:resId",
        element:<RestrauntMenu/>,
      },
      {
        path:"/cart",
        element:<Cart/>,
      }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
