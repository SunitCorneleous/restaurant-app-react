import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import { Bars3Icon, XCircleIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className=" py-5 bg-lime-600">
      <div className="container w-5/6 flex justify-between items-center mx-auto">
        <div className="w-1/5">
          <h1 className="text-4xl font-bold text-white">Food</h1>
        </div>
        <NavBar navOptions={open}></NavBar>
        <Bars3Icon
          className={`h-10 w-10 md:hidden text-white ${
            open ? "hidden" : "static"
          }`}
          onClick={() => setOpen(!open)}
        />
        <XCircleIcon
          className={`h-10 w-10 md:hidden text-white ${
            open ? "static" : "hidden"
          }`}
          onClick={() => setOpen(!open)}
        />
      </div>
    </div>
  );
};

export default Header;
