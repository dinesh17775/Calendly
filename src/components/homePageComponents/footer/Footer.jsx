import React from "react";
import { FooterItems } from "../index2";
import FooterDev from "./FooterDev";
function Footer() {
  return (
    <section className="footer-wrapper">
      <div className="media-wrapper">
        <h2 className="footer-head">Easy ahead</h2>
        <p>
          we take the work out of connecting with others so you can accomplish
          more
        </p>
        <input type="search" name="" id="" />
      </div>
      <div className="footerLinks">
        {FooterItems.map((items) => {
          return <FooterDev FooterItems={items}></FooterDev>;
        })}
      </div>
    </section>
  );
}

export default Footer;
