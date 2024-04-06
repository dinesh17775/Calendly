import React from "react";
import { FooterItems } from "../index2";
import FooterDev from "./FooterDev";
function Footer() {
  return (
    <section className="w-full h-auto">
      <div className="max border-2 border-solid border-red-400 mx-auto px-6 pt-14">
        <div className="w-full h-full flex gap-4">
          <div className="w-1/3 border-2 border-solid border-green-400 ">
            <h2 className="footer-head">
              <span className="text-[#0C3557] font-extrabold text-4xl">
                Easy
              </span>{" "}
              <span className="text-[#036DFE] font-extrabold text-4xl">
                ahead{" "}
              </span>
            </h2>
            <p className="w-auto text-pretty mt-5">
              we take the work out of connecting with <br /> others so you can
              accomplish more
            </p>
            <input type="search" name="" id="" />
          </div>
          <div className=" grid grid-cols-3 gap-8">
            {FooterItems.map((items) => {
              return <FooterDev FooterItems={items}></FooterDev>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
