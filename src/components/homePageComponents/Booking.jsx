import React from "react";

function Booking() {
  return (
    <div className="w-full bg-[#092640] py-12">
      <div className="max text-[#fff] border-2 border-solid border-white mx-auto">
        <div className="w-1/2 mx-auto flex flex-col gap-6 border-2 border-solid border-white text-center">
          <h2 className="text-4xl font-bold mt-3">
            Easy access for easy bookings
          </h2>
          <div className="font-light">
            <p className=" font-light">
              Share your Calendly link right from your browser, so you can
              schedule meetings without the back-and-forth
            </p>
          </div>
          <div className="flex border-2 border-solid border-red-400 mb-5 gap-4 items-center justify-center">
            <button
              type="submit"
              className=" px-6 py-3 hover:cursor-pointer rounded-full bg-[#006BFE] text-[12px]"
            >
              start for free
            </button>
            <button
              type="submit"
              className=" px-6 py-3 rounded-full border-2 hover:cursor-pointer  border-solid  border-[#fff] text-[12px]"
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
