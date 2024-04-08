import React, { useState } from "react";
import { Faq } from "./index2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
function Faqs() {
  const [questionReveal, IsQuestionReveal] = useState(null);
  const [closeReveal, IsCloseReveal] = useState(false);
  function handleReveal(ID) {
    IsCloseReveal(!closeReveal);
    IsQuestionReveal(ID);
  }
  return (
    <div className="w-full h-auto bg-gray-100 mt-9" id="faq">
      <div className="max      pb-7 mx-auto">
        <div className="w-1/2 mb-7 px-0 flex flex-col mx-auto       md:px-4 md:w-full  lg:w-full lg:px-4 xsd:w-full">
          <h1 className=" text-3xl my-6 text-[#093557] font-extrabold text-center xsd:text-2xl">
            Frequently Asked Questions
          </h1>
          <p className=" font-light text-[12px] text-center">
            Not seeing what you are looking for <br /> Go to our
            <span> help center</span>
          </p>
          {Faq.map((item) => {
            return (
              <div className=" w-full mt-6 bg-[#fff]      flex justify-end border border-solid border-rgb-212-224-237 rounded-md">
                <div className="w-full      flex flex-col">
                  <h2 className=" p-3">{item.query}</h2>
                  <div
                    className={`            pl-3 grid overflow-hidden transition-all duration-300 ease-in-out ${
                      questionReveal === item.id && closeReveal
                        ? " grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <p className=" overflow-hidden">{item.answer}</p>
                  </div>
                </div>
                <button
                  type="submit"
                  onClick={() => {
                    return handleReveal(item.id);
                  }}
                  className="     flex justify-end p-3"
                >
                  {questionReveal === item.id && closeReveal ? (
                    <FontAwesomeIcon icon={faMinus} />
                  ) : (
                    <FontAwesomeIcon icon={faPlus} />
                  )}
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
