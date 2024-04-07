import React, { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import "../styles/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faBars,
  faXmark,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
const NavList = [
  { id: 1, title: "Individuals", path: "/individuals" },
  { id: 2, title: "Teams", path: "/teams" },
  { id: 3, title: "Enterprise", path: "/enterprise" },
  { id: 4, title: "Product", path: "/product" },
  { id: 5, title: "Pricing", path: "/pricing" },
  { id: 6, title: "Resources", path: "/resources" },
];

function RootLayOut() {
  const [showNav, IsShowNav] = useState(false);
  function handleMenu() {
    IsShowNav(!showNav);
  }
  return (
    <header className="w-full h-20 border-2 border-solid border-red-500 fixed z-50 bg-[#fff]">
      <nav className="max h-full flex items-center border-2 border-solid border-red-500 mx-auto px-5 md:px-0 lg:px-0">
        <div className="flex items-center justify-between w-full  h-full border-2 border-solid border-green-500 md:flex md:flex-row md:flex-wrap lg:flex lg:flex-row lg:flex-wrap">
          <div className="w-auto px-0 mt-0 border-2 border-solid border-red-500 h-3/5 items-center md:px-4 md:mt-2 md:w-full md:flex md:justify-between lg:px-4 lg:mt-2 lg:w-full lg:flex lg:justify-between ">
            <NavLink
              to={"/"}
              className={
                "w-full h-full md:w-auto border-2 border-solid border-red-500 lg:w-auto"
              }
            >
              <img
                className="w-full h-full md:w-full  lg:w-full"
                src="https://marketing-assets.calendly.com/media/logo.svg"
                alt="Calendly Logo"
              />
            </NavLink>
            <div className="hidden md:block lg:block">
              <ul className="flex items-center border-2 border-solid border-red-500">
                <li className="ml-custom md:block lg:hidden">
                  <NavLink to={"/login"}>Login</NavLink>
                </li>
                <li className="h-10 bg-[#004EBA] text-[#fff] flex items-center px-4 py-2 rounded-md md:block lg:hidden">
                  <NavLink to={"/signup"}>Get Started</NavLink>
                </li>
                <div className="block ml-6 text-3xl">
                  {showNav ? (
                    <FontAwesomeIcon
                      icon={faXmark}
                      onClick={handleMenu}
                    ></FontAwesomeIcon>
                  ) : (
                    <FontAwesomeIcon
                      icon={faBars}
                      onClick={handleMenu}
                    ></FontAwesomeIcon>
                  )}
                </div>
              </ul>
            </div>
          </div>
          <ul
            className={`w-auto h-auto p-0 flex ${
              showNav ? "md:block lg:block" : "md:hidden lg:hidden"
            } border-2 border-solid border-black  md:w-screen md:h-screen md:p-5 md:bg-[#fff] lg:w-screen lg:h-screen lg:p-5 lg:bg-[#fff]`}
          >
            {NavList.map((item) =>
              item.id === 4 || item.id === 6 ? (
                <>
                  <div className="mx-5 flex items-center p-0 nm:mx-2 md:mx-0 border-2 border-solid border-red-400 md:py-4 lg:py-4 lg:mx-0 md:justify-between lg:justify-between md:pr-8 lg:pr-8">
                    <li key={item.id}>
                      <NavLink to={item.path} className={"font-medium"}>
                        {item.title}
                      </NavLink>
                    </li>
                    {item.id === 4 || item.id === 6 ? (
                      <>
                        <FontAwesomeIcon
                          icon={faAngleDown}
                          className=" block md:hidden lg:hidden"
                        ></FontAwesomeIcon>
                        <FontAwesomeIcon
                          icon={faAngleRight}
                          className="hidden md:block lg:block"
                        ></FontAwesomeIcon>
                      </>
                    ) : null}
                  </div>
                </>
              ) : (
                <>
                  <li
                    key={item.id}
                    className="mx-5 p-0 nm:mx-2 md:mx-0 border-2 border-solid border-red-400 md:py-4 lg:py-4 lg:mx-0"
                  >
                    <NavLink to={item.path} className={"font-medium"}>
                      {item.title}
                    </NavLink>
                  </li>
                </>
              )
            )}
            <ul className="items-center hidden md:hidden lg:flex lg:flex-col lg:items-center  lg:justify-center border-2 border-solid border-red-500">
              <li className="ml-custom lg:w-full border-2 border-solid border-red-400 lg:py-2 lg:px-0 lg:ml-10 lg:flex lg:justify-center">
                <NavLink to={"/login"}>Login</NavLink>
              </li>
              <li className="h-10 bg-[#004EBA] text-[#fff] flex items-center px-4 py-2 rounded-md lg:flex justify-center lg:w-full ">
                <NavLink to={"/signup"}>Get Started</NavLink>
              </li>
            </ul>
          </ul>
          <ul className="flex items-center md:hidden lg:hidden border-2 border-solid border-red-500">
            <li className="ml-custom">
              <NavLink to={"/login"}>Login</NavLink>
            </li>
            <li className="h-10 bg-[#004EBA] text-[#fff] flex items-center px-4 py-2 rounded-md">
              <NavLink to={"/signup"}>Get Started</NavLink>
            </li>
          </ul>
        </div>
        <Outlet />
      </nav>
    </header>
  );
}

export default RootLayOut;
