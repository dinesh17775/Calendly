import React from "react";
import { NavLink } from "react-router-dom";
function FooterDev({ FooterItems }) {
  return (
    <div className="border-2 border-solid border-red-400 flex flex-col gap-4">
      {FooterItems.map((items) => {
        return (
          <>
            <p className=" first-of-type:font-extrabold first-of-type:text-[#0E3B5D] hover:cursor-pointer first-of-type:hover:underline whitespace-normal">
              <NavLink to={items.link}>{items.title}</NavLink>
            </p>
          </>
        );
      })}
      <hr></hr>
    </div>
  );
}

export default FooterDev;
