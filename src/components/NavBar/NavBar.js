import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ navOptions }) => {
  return (
    <ul
      className={`bg-lime-700 text-white z-10 md:bg-lime-600 w-3/5 md:w-1/5 md:flex absolute  md:static ease-in duration-300 ${
        navOptions ? "left-0 top-0 h-full" : "left-[-240px] top-0 h-full"
      }`}
    >
      <li className="md:mx-1 text-xl md:my-0 my-20 px-7 md:px-2">
        <Link to="/">Home</Link>
      </li>
      <li className="md:mx-1 text-xl md:my-0 my-20 px-7 md:px-2">
        <Link to="/orders">Orders</Link>
      </li>
    </ul>
  );
};

export default NavBar;
