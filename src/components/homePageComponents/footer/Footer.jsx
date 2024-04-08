import React from "react";
import { FooterItems } from "../index2";
import FooterDev from "./FooterDev";
import FootDrop from "./FootDrop";
import FooterIcons from "./FooterIcons";
function Footer() {
  return (
    <section className="w-full h-auto">
      <div className="max         mx-auto px-6 pt-14 xsd:px-2">
        <div className="w-full h-full flex flex-row gap-4 md:flex-col lg:flex-col xsd:flex-col">
          <div className="w-1/3        md:w-full lg:w-full xsd:w-full">
            <h2 className="footer-head">
              <span className="text-[#0C3557] font-extrabold text-4xl xsd:text-2xl">
                Easy
              </span>{" "}
              <span className="text-[#036DFE] font-extrabold text-4xl xsd:text-2xl">
                ahead{" "}
              </span>
            </h2>
            <p className="w-auto text-pretty mt-5 xsd:text-sm">
              we take the work out of connecting with <br /> others so you can
              accomplish more
            </p>
            <div className="block md:hidden lg:hidden xsd:hidden">
              <FootDrop></FootDrop>
              <FooterIcons></FooterIcons>
            </div>
          </div>
          <div className=" grid grid-cols-3 gap-8 lg:grid-cols-2 cm:grid-cols-1 xsd:grid-cols-1 xsd:gap-5">
            {FooterItems.map((items) => {
              return <FooterDev FooterItems={items}></FooterDev>;
            })}
          </div>
        </div>
      </div>
      <div className="hidden md:block md:mx-6 lg:block lg:mx-6 xsd:block">
        <FootDrop></FootDrop>

        <div className=" text-base flex mt-3 text-gray-500 cm:text-xs xsd:hidden">
          <p className="ml-0 hover:cursor-pointer">Legal</p>
          <p className="ml-3 hover:cursor-pointer">Status</p>
          <p className="ml-3 hover:cursor-pointer">Security</p>
          <p className="ml-3 hover:cursor-pointer">Cookie settings</p>
        </div>
        <FooterIcons></FooterIcons>
        <p className="mt-3 text-base text-gray-500 hover:cursor-pointer lg:block xsd:block xsd:text-xs xsd:pl-3">
          Copyright Calendly 2024
        </p>
      </div>
    </section>
  );
}

export default Footer;
