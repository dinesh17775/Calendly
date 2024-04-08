import React, { useState } from "react";
import { Languages } from "../index2";
function FootDrop() {
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const handleChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  return (
    <div className="hover:cursor-pointer w-4/5 border-2 border-solid border-gray-300 h-auto p-3 mt-4 flex md:w-2/5 lg:w-2/5 xsd:w-2/5">
      <select
        value={selectedLanguage}
        onChange={handleChange}
        className="hover:text-[#036DFE] hover:cursor-pointer w-full h-full"
      >
        {Languages.map((item) => {
          return (
            <option
              value={item.title}
              className="w-full h-full text-base xsd:text-xs"
            >
              {item.title}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default FootDrop;
