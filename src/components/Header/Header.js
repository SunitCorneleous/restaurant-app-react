import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div>
        <h1>Logo</h1>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/orders">Orders</Link>
      </nav>
    </div>
  );
};

export default Header;
