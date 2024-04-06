import React, { useState } from "react";
import { Faq } from "./index2";
function Faqs() {
  const [questionReveal, IsQuestionReveal] = useState(null);
  const [closeReveal, IsCloseReveal] = useState(false);
  function handleReveal(ID) {
    IsCloseReveal(!closeReveal);
    IsQuestionReveal(ID);
  }
  return (
    <div className="w-full h-auto bg-gray-100 mt-9" id="faq">
      <div className="max border-2 border-solid border-red-500 pb-7 mx-auto">
        <div className="w-1/2 mb-7 flex flex-col mx-auto border-2 border-solid border-green-500">
          <h1 className=" text-3xl my-6 text-[#093557] font-extrabold text-center">
            Frequently Asked Questions
          </h1>
          <p className=" font-light text-[12px] text-center">
            Not seeing what you are looking for <br /> Go to our
            <span> help center</span>
          </p>
          {Faq.map((item) => {
            return (
              <div className=" w-full mt-6 bg-[#fff] border-2 border-solid border-blue-200 flex justify-end">
                <div className="w-full border-2 border-solid border-blue-200 flex flex-col">
                  <h2 className=" p-3">{item.query}</h2>
                  <p
                    className={`p-3 ${
                      questionReveal === item.id && closeReveal
                        ? "block"
                        : "hidden"
                    }`}
                  >
                    {item.answer}
                  </p>
                </div>
                <button
                  type="submit"
                  onClick={() => {
                    return handleReveal(item.id);
                  }}
                  className="border-2 border-solid border-red-400 flex justify-end p-3"
                >
                  {closeReveal ? "-" : "+"}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Faqs;
