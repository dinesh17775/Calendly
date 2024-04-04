import React from "react";
import { Faq } from "./index2";
function Faqs() {
  return (
    <div className="faq-section" id="faq">
      <h1>Frequently Asked Questions</h1>
      <p>
        Not seeing what you are looking for Go to our<span>help center</span>
      </p>
      {Faq.map((item) => {
        return (
          <div className="questions">
            <h2>{item.query}</h2>
            <p>{item.answer}</p>
            <button type="submit">reveal</button>
          </div>
        );
      })}
    </div>
  );
}

export default Faqs;
