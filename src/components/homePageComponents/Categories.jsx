import React from "react";
import { NavLink } from "react-router-dom";
import { CategoryList, ProductsList } from "./index2";
function Categories() {
  return (
    <section id="products">
      <div className="products-nav">
        <h2 className="products-head"></h2>
        <ul className="m-6">
          {CategoryList.map((item) => {
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
        <div className="products-list">
          {ProductsList.map((item) => (
            <div key={item.id}>
              <p>{item.name}</p>
              {item.id === 6 ? (
                <>
                  <p>{item.text1}</p>
                  <p>{item.text2}</p>
                  <button type="submit">Get started</button>
                </>
              ) : (
                <>
                  <p>{item.text}</p>
                  <button type="submit">Submit</button>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
