import React from "react";
import { Link, Outlet } from "react-router-dom";
import AccountLayout from "./AccountLayout";
const Sidebar = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Navigation Menu{" "}
        </label>
        <Outlet />
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-60 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li className="text-lg text-fuchsia-600 font-semibold">
            <Link to="/">Connect to Wallet</Link>
          </li>
          <li className="text-lg text-fuchsia-600 font-semibold">
            <Link to="/account">Account</Link>
          </li>
          <li className="text-lg text-fuchsia-600 font-semibold">
            <Link to="/all-account">All Account</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
