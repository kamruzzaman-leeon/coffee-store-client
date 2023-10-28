import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import AddCoffee from "./component/AddCoffee";
import UpdateCoffee from "./component/UpdateCoffee";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>
  },
  {
    path:"/addCoffee",
    element:<AddCoffee></AddCoffee>
  },
  {
    path:"/updateCoffee",
    element:<UpdateCoffee></UpdateCoffee>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);