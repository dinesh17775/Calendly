import React from "react";
import { FooterItems } from "../index2";
import FooterDev from "./FooterDev";
import FootDrop from "./FootDrop";
import FooterIcons from "./FooterIcons";
function Footer() {
  return (
    <section className="w-full h-auto">
      <div className="max border-2 border-solid border-red-400 mx-auto px-6 pt-14">
        <div className="w-full h-full flex flex-row gap-4 md:flex-col lg:flex-col">
          <div className="w-1/3 border-2 border-solid border-green-400 md:w-full lg:w-full">
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
            <div className="block md:hidden lg:hidden">
              <FootDrop></FootDrop>
              <FooterIcons></FooterIcons>
            </div>
          </div>
          <div className=" grid grid-cols-3 gap-8 lg:grid-cols-2 cm:grid-cols-1">
            {FooterItems.map((items) => {
              return <FooterDev FooterItems={items}></FooterDev>;
            })}
          </div>
        </div>
      </div>
      <div className="hidden md:block md:mx-6 lg:block lg:mx-6">
        <FootDrop></FootDrop>

        <div className=" text-base flex mt-3 text-gray-500 cm:text-xs">
          <p className="ml-0 hover:cursor-pointer">Legal</p>
          <p className="ml-3 hover:cursor-pointer">Status</p>
          <p className="ml-3 hover:cursor-pointer">Security</p>
          <p className="ml-3 hover:cursor-pointer">Cookie settings</p>
        </div>
        <FooterIcons></FooterIcons>
        <p className="mt-3 text-base text-gray-500 hover:cursor-pointer">
          Copyright Calendly 2024
        </p>
      </div>
    </section>
  );
}

export default Footer;
