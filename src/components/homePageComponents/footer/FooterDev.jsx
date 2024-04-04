import React from "react";
import { NavLink } from "react-router-dom";
function FooterDev({ FooterItems }) {
  return (
    <div>
      {FooterItems.map((items) => {
        return (
          <>
            <p>
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
