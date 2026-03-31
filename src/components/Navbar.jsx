import React from "react";
import logo from "../assets/logo.svg";

const Navbar = ({ cart }) => {
  return (
    <div className=" ">
      <div className=" navbar flex flex-col md:flex-row justify-around bg-base-200  shadow-sm fixed top-0 z-50 ">
        <div className="">
          <a className="btn btn-ghost text-xl">
            <img src={logo} alt="" />
          </a>
        </div>

        <div>
          <ul className="menu flex-wrap menu-horizontal bg-base-200 rounded-box">
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Testimonials</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
          </ul>
        </div>

        <div className="flex items-center">
          <div className="flex-none mr-1">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {" "}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />{" "}
                  </svg>
                  <span className="badge badge-sm indicator-item">
                    {cart.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <button className="btn btn-ghost">Login</button>
          <button className="btn bg-linear-to-r from-[#3628AB] to-[#9514FA] text-white rounded-full">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
