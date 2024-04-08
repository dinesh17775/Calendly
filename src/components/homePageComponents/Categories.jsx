import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CategoryList, ProductsList } from "./index2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faXmark } from "@fortawesome/free-solid-svg-icons";
function Categories() {
  const [selectedId, IsSelectedId] = useState(2);
  const [ProductsMenu, IsProductsMenu] = useState(false);
  function HandlSelectedID(id) {
    IsSelectedId(id);
  }
  function handleProductsMenu() {
    IsProductsMenu(!ProductsMenu);
  }
  return (
    <section id="products" className="max  h-auto            mx-auto">
      <div className="w-full h-full px-6 py-8           flex gap-7 cm:relative xsd:px-3 xsd:pt-3">
        <div
          className={`          w-1/5 md:w-1/3 lg:w-1/3 ${
            ProductsMenu
              ? "cm:block cm:absolute cm:bg-[#fff] cm:w-full cm:pr-12 cm:pt-3 cm:top-10"
              : "cm:hidden xsd:hidden"
          }`}
        >
          <h2 className="font-extrabold text-xl text-[#093557] cm:hidden">
            Categories
          </h2>
          <ul className="w-full            mt-8">
            {CategoryList.map((item) => {
              return (
                <li
                  className={`w-full rounded hover:cursor-pointer           p-4 ${
                    selectedId === item.id
                      ? " text-[#fff] bg-[#006BFF]"
                      : "bg-[#fff]"
                  } ${"category-list-item" + item.id}`}
                  onClick={() => {
                    return IsSelectedId(item.id);
                  }}
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
        <div className="flex flex-col w-4/5      cm:w-full xsd:w-full">
          <div className=" cm:flex cm:justify-between cm:items-center">
            <p className="view-status text-base xsd:text-sm xsd:pl-3">
              viewing:15 popular
            </p>
            <div
              className="hidden cm:flex cm:px-4 cm:py-2 cm:items-center   border-[#006BFF] cm:z-10"
              onClick={handleProductsMenu}
            >
              <FontAwesomeIcon
                icon={ProductsMenu ? faXmark : faFilter}
              ></FontAwesomeIcon>
              <p className=" cm:ml-2">{ProductsMenu ? "Close" : "Filter"}</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-7 mt-4 md:grid-cols-2 lg:grid-cols-1 xsd:grid-cols-1">
            {ProductsList.map((item) => (
              <div
                key={item.id}
                className={`p-8 hover:cursor-pointer  rounded-lg flex flex-col  ${
                  item.id === 6
                    ? " text-[#fff] bg-[#092640]"
                    : "bg-[#fff] border border-solid border-rgb-212-224-237"
                } xsd:p-3 shadow-lg`}
              >
                <div className="w-full h-10 mb-4       flex items-center justify-start">
                  <img src={item.img_link} alt="" className="w-auto h-full" />
                </div>
                <p className=" text-2xl capitalize">{item.name}</p>
                {item.id === 6 ? (
                  <div className="flex flex-col w-full h-full justify-between ">
                    <div className="w-full h-auto mt-4">
                      <p>{item.text1}</p>
                      <p className=" text-gray-400">{item.text2}</p>
                    </div>
                    <div className="w-full h-auto mt-3">
                      <p>
                        <NavLink to={"/"} className={"text-[#006BFF]"}>
                          Learn more &gt;
                        </NavLink>
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full flex flex-col justify-between">
                    <div className="w-full h-auto mt-4">
                      <p className="text-gray-400">{item.text}</p>
                    </div>
                    <div className="w-full h-auto mt-3">
                      <p>
                        <NavLink to={"/"} className={"text-[#006BFF]"}>
                          Learn more &gt;
                        </NavLink>
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Categories;
