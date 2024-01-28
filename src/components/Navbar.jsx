import React from "react";
import { contractAddress } from "../ether-connections/constants";

const Navbar = () => {
  const handleLogout = () => {
    window.open(
      "https://metamask.io/settings/general/connected-sites/",
      "_blank"
    );
  };
  return (
    <div className="navbar bg-[#2B3440]">
      <div className="flex-1">
        <a className="btn btn-ghost text-2xl text-fuchsia-400">
          Decentralized Bank
        </a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                {/* Profile */}
                {contractAddress}
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              {/* <a>Logout</a> */}
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
