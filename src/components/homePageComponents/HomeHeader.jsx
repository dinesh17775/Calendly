import React from "react";
import { NavLink } from "react-router-dom";
function smoothScrollTo(targetID) {
  const targetItem = document.getElementById(targetID);
  if (targetItem) {
    targetItem.scrollIntoView({ behavior: "smooth" });
  }
}
function HomeHeader() {
  return (
    <section id="homeheader">
      <nav className="home-nav">
        <ul className="home-nav-list">
          <li className="home-nav-list-item">
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li
            className="home-nav-list-item"
            onClick={() => {
              return smoothScrollTo("products");
            }}
          >
            <NavLink to={"#"}>Product</NavLink>
          </li>
          <li
            className="home-nav-list-item"
            onClick={() => {
              return smoothScrollTo("homeheader");
            }}
          >
            <NavLink to={"#"}>Integrations</NavLink>
          </li>
          <li
            className="home-nav-list-item"
            onClick={() => {
              return smoothScrollTo("faq");
            }}
          >
            <NavLink to={"#"}>FAQs</NavLink>
          </li>
        </ul>
      </nav>
      <p className="home-head">APPS & INTEGRATIONS</p>
      <h2 className="text-xl text-blue-400">
        Integrate Calendly boost productivity
      </h2>
      <p className="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        reprehenderit nisi beatae neque eligendi, assumenda facilis placeat
        quibusdam reiciendis? Inventore.
      </p>

      <div className="search">
        <button type="submit">submit</button>
        <input type="text" name="" id="" />
      </div>
    </section>
  );
}

export default HomeHeader;
