import { createBrowserRouter } from "react-router-dom";
import Error from "../components/Error/Error";
import Home from "../components/Home/Home";
import ReviewOrder from "../components/ReviewOrder/ReviewOrder";
import Main from "../layouts/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=beef"),
      },
      { path: "/orders", element: <ReviewOrder></ReviewOrder> },
      {
        path: "/*",
        element: <Error></Error>,
      },
    ],
  },
]);
