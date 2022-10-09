import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import ReviewOrder from "../components/ReviewOrder/ReviewOrder";
import Main from "../layouts/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/orders", element: <ReviewOrder></ReviewOrder> },
    ],
  },
]);
