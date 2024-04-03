import React from "react";
import { Outlet, NavLink } from "react-router-dom";

function RootLayOut() {
  return (
    <header className="header">
      <nav>
        <div className="app-logo-container">
          <h2 className="logo">
            <NavLink to={"/"}>Calendly</NavLink>
          </h2>
        </div>
        <div className="nav-bar">
          <ul className="nav-list">
            <li className="list-item">
              <NavLink to={"/individuals"}>Individuals</NavLink>
              {/*we can add seperate route when we furthur develop this web page*/}
            </li>
            <li className="list-item">
              <NavLink to={"/teams"}>Teams</NavLink>
            </li>
            <li className="list-item">
              <NavLink to={"/enterprise"}>Enterprise</NavLink>
            </li>
            <li className="list-item">
              <NavLink to={"/product"}>Product</NavLink>
            </li>
            <li className="list-item">
              <NavLink to={"/pricing"}>Pricing</NavLink>
            </li>
            <li className="list-item">
              <NavLink to={"/resources"}>Resources</NavLink>
            </li>
          </ul>
          <ul className="log-in-list">
            <li className="list-item">
              <NavLink to={"/login"}>Login</NavLink>
            </li>
            <li className="list-item">
              <NavLink to={"/signup"}>GetStarted</NavLink>
            </li>
          </ul>
        </div>
        <Outlet />
        {/*we use this incase if we develop the web page  with nested routing*/}
      </nav>
    </header>
  );
}

export default RootLayOut;
