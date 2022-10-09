import { createBrowserRouter, Link } from "react-router-dom";
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
        element: (
          <div>
            <h1 className="text-5xl my-14 font-semibold text-red-600">
              Page Not Found
            </h1>
            <Link to="/" className="hover:underline text-2xl">
              Back to Home
            </Link>
          </div>
        ),
      },
    ],
  },
]);
