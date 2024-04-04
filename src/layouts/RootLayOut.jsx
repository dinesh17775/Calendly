import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import "../styles/style.css";
const NavList = [
  { id: 1, title: "Individuals", path: "/individuals" },
  { id: 2, title: "Teams", path: "/teams" },
  { id: 3, title: "Enterprise", path: "/enterprise" },
  { id: 4, title: "Product", path: "/product" },
  { id: 5, title: "Pricing", path: "/pricing" },
  { id: 6, title: "Resources", path: "/resources" },
];

function RootLayOut() {
  return (
    <header className="w-full h-20 border-2 border-solid border-red-500 fixed bg-[#fff]">
      <nav className="max h-full flex items-center border-2 border-solid border-red-500 mx-auto">
        <div className="flex items-center mx-auto justify-between w-11/12 h-full border-2 border-solid border-green-500">
          <div className="w-auto border-2 border-solid border-red-500 h-3/5 items-center">
            <NavLink to={"/"}>
              <img
                className="w-full h-full"
                src="https://marketing-assets.calendly.com/media/logo.svg"
                alt="Calendly Logo"
              />
            </NavLink>
          </div>
          <ul className="w-auto flex border-2 border-solid border-black">
            {NavList.map((item) => (
              <li key={item.id} className="mx-5">
                <NavLink to={item.path} className={"font-medium"}>
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
          <ul className="flex items-center  border-2 border-solid border-red-500">
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
