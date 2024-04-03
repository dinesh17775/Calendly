import React from "react";
import { NavLink } from "react-router-dom";
const categoryList = [
  { id: 1, title: "ALl" },
  { id: 2, title: "Popular" },
  { id: 3, title: "Extensions & Apps" },
  { id: 4, title: "Calenders" },
  { id: 5, title: "Sales &CRM" },
  { id: 6, title: "Video Conferencing" },
  { id: 7, title: "Marketing" },
  { id: 8, title: "Recruting & ATS" },
  { id: 9, title: "Payments" },
  { id: 10, title: "Analytics" },
  { id: 11, title: "API & Connectors" },
  { id: 12, title: "Email Messaging" },
  { id: 13, title: "Embed Calendly" },
  { id: 14, title: "Other Integrations" },
];
function Categories() {
  return (
    <section id="products">
      <div className="products-nav">
        <h2 className="products-head"></h2>
        <ul className="categoy-list">
          {categoryList.map((item) => {
            return (
              <li
                className={`category-list-item ${
                  "category-list-item" + item.id
                }`}
              >
                <NavLink>{item.title}</NavLink>
              </li>
            );
          })}
          {/*<li className="category-list-item">
            <NavLink>All</NavLink>
          </li>
          <li className="category-list-item">
            <NavLink>Popular</NavLink>
          </li>
          <li className="category-list-item">
            <NavLink>Extensions & Apps</NavLink>
          </li>
          <li className="category-list-item">
            <NavLink>Calenders</NavLink>
          </li>
          <li className="category-list-item">
            <NavLink>Sales & CRM</NavLink>
          </li>
          <li className="category-list-item">
            <NavLink>Video Conferencing</NavLink>
          </li>
          <li className="category-list-item">
            <NavLink>All</NavLink>
          </li>
          <li className="category-list-item">
            <NavLink>All</NavLink>
          </li>
          <li className="category-list-item">
            <NavLink>All</NavLink>
          </li>
          <li className="category-list-item">
            <NavLink>All</NavLink>
          </li>
          <li className="category-list-item">
            <NavLink>All</NavLink>
          </li>
          <li className="category-list-item">
            <NavLink>All</NavLink>
          </li>
          <li className="category-list-item">
            <NavLink>All</NavLink>
          </li>
          <li className="category-list-item">
            <NavLink>All</NavLink>
          </li>*/}
        </ul>
      </div>
      <div className="products-group">
        <p className="view-status">viewing:15 popular</p>
        <div className="products-list"></div>
      </div>
    </section>
  );
}

export default Categories;
