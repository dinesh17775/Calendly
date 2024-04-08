import React from "react";

function Booking() {
  return (
    <div className="w-full bg-[#092640] py-12">
      <div className="max text-[#fff]       mx-auto">
        <div className="w-1/2 mx-auto flex flex-col gap-6       text-center md:w-full lg:w-full xsd:w-full xsd:px-1">
          <div>
            <h2 className="text-4xl font-bold mt-3 xsd:text-xl">
              Easy access for easy bookings
            </h2>
            <div className="font-light mt-3 px-3">
              <p className=" font-light text-base xsd:text-xs">
                Share your Calendly link right from your browser, so you can
                schedule meetings without the back-and-forth
              </p>
            </div>
          </div>
          <div className="flex        mb-5 gap-4 items-center justify-center cm:flex-col cm:px-3 xsd:flex-col">
            <button
              type="submit"
              className=" px-6 py-3 hover:cursor-pointer rounded-full bg-[#006BFE] text-[12px] cm:w-full cm:rounded-md xsd:rounded-md"
            >
              start for free
            </button>
            <button
              type="submit"
              className=" px-6 py-3 rounded-full   hover:cursor-pointer border-[1px] border-solid border-[#fff] text-[12px] cm:w-full cm:mx-3 cm:rounded-md xsd:rounded-md xsd:px-4"
            >
              Talk with sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
