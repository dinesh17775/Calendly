import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
function FooterDev({ FooterItems }) {
  const [showFooterMenu, IsShowFooterMenu] = useState(true);
  function handleFooterMenu() {
    IsShowFooterMenu(!showFooterMenu);
  }
  return (
    <div className="        flex flex-col gap-4 xsd:gap-2">
      {FooterItems.map((items) => {
        return (
          <>
            <p
              className={`first-of-type:font-extrabold first-of-type:text-[#0E3B5D] hover:cursor-pointer first-of-type:hover:underline whitespace-normal transition-all duration-300 ease-in-out grid grid-rows-1 ${
                items.id !== 1 && showFooterMenu
                  ? " cm:grid-rows-0 cm:hidden xsd:grid-rows-0 xsd:hidden"
                  : "cm:flex cm:items-center xsd:flex xsd:items-center"
              } `}
              onClick={handleFooterMenu}
            >
              <NavLink to={items.link} className={"text-base xsd:text-sm"}>
                {items.title}
              </NavLink>
              {items.id === 1 ? (
                <FontAwesomeIcon
                  icon={showFooterMenu ? faAngleDown : faAngleUp}
                  className="hidden cm:block cm:ml-2 xsd:block xsd:ml-2"
                ></FontAwesomeIcon>
              ) : (
                ""
              )}
            </p>
          </>
        );
      })}
      <hr></hr>
    </div>
  );
}

export default FooterDev;
