import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const MiniNavItems = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "Product", link: "#", scrollTo: "products" },
  { id: 3, title: "Integrations", link: "#", scrollTo: "homeheader" },
  { id: 4, title: "FAQs", link: "#", scrollTo: "faq" },
];
function HomeHeader() {
  const [clickID, IsClickID] = useState(null);
  function handleInPageNav(targetID, itemID) {
    const targetItem = document.getElementById(targetID);
    IsClickID(itemID);
    if (targetItem) {
      targetItem.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <section
      id="homeheader"
      className="w-full border-2 bg-gray-100 border-solid border-red-500  h-auto"
    >
      <div className="max border-2 border-solid border-red-500 mx-auto h-auto px-6">
        <div className="w-full flex h-full border-2 border-solid border-green-500">
          <div className="w-1/2 flex flex-col border-2 border-solid border-red-500">
            <nav className="home">
              <ul className="flex">
                {MiniNavItems.map((item) => {
                  return item.id !== 4 ? (
                    <>
                      {item.id !== 1 ? (
                        <>
                          <li
                            className="flex"
                            onClick={() => {
                              return handleInPageNav(item.scrollTo, item.id);
                            }}
                          >
                            <NavLink
                              to={item.link}
                              className={`flex font-semibold ${
                                clickID === item.id
                                  ? "border-gray-400"
                                  : "text-[#006BFF]"
                              }`}
                            >
                              {item.title}
                            </NavLink>
                            <li className="mx-3">/</li>
                          </li>
                        </>
                      ) : (
                        <>
                          <li className="flex">
                            <NavLink
                              to={item.link}
                              className={"font-semibold text-[#006BFF]"}
                            >
                              {item.title}
                            </NavLink>
                            <li className="mx-3">/</li>
                          </li>
                        </>
                      )}
                    </>
                  ) : (
                    <>
                      <li
                        onClick={() => {
                          return handleInPageNav(item.scrollTo, item.id);
                        }}
                      >
                        <NavLink
                          to={item.link}
                          className={`flex font-semibold ${
                            clickID === item.id
                              ? "border-gray-200"
                              : "text-[#006BFF]"
                          }`}
                        >
                          {item.title}
                        </NavLink>
                      </li>
                      ;
                    </>
                  );
                })}
                {/*<li>
                  <NavLink to={"/"} className={"font-semibold text-[#006BFF]"}>
                    Home
                  </NavLink>
                </li>
                <li className="mx-3 ">/</li>
                <li
                  className="home-nav-list-item"
                  onClick={() => {
                    return smoothScrollTo("products");
                  }}
                >
                  <NavLink to={"#"} className={"font-semibold text-[#006BFF]"}>
                    Product
                  </NavLink>
                </li>
                <li className="mx-3">/</li>
                <li
                  className="home-nav-list-item"
                  onClick={() => {
                    return smoothScrollTo("homeheader");
                  }}
                >
                  <NavLink to={"#"} className={"font-semibold text-[#006BFF]"}>
                    Integrations
                  </NavLink>
                </li>
                <li className="mx-3">/</li>
                <li
                  className="home-nav-list-item"
                  onClick={() => {
                    return smoothScrollTo("faq");
                  }}
                >
                  <NavLink to={"#"} className={"font-semibold text-[#006BFF]"}>
                    FAQs
                  </NavLink>
                </li>*/}
              </ul>
            </nav>
            <p className="mt-7 text-[#556C87]">APPS & INTEGRATIONS</p>
            <h1 className="my-7 max-w-screen-md font-extrabold text-[35px] leading-snug pr-20 text-[#093557]">
              Integrate Calendly, boost productivity
            </h1>
            <p className="text-[#556c87] text-xs">
              Smart scheduling automation will change the way you-and your
              tools-work.
            </p>

            <div className="search">
              <input
                type="text"
                name=""
                id=""
                className="w-3/5 mt-8 rounded-3xl h-11 p-4 pl-7 shadow-xl text-sm"
                placeholder="Search for an integration"
              />
              <button type="submit">submit</button>
            </div>
          </div>
          <div className="w-1/2">
            <img
              src="https://images.ctfassets.net/k0lk9kiuza3o/7pnp3ZIJHHNMJEYXSCktL/b04ce26084a30501984a14a2058efa36/Integrations-Calendly__1_.png?q=85&fm=webp"
              alt=""
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeHeader;
