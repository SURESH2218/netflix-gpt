import React from "react";
import lang from "../utils/langugageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const language = useSelector((store) => store.config.lang);
  return (
    <div className="flex pt-[3%] justify-center">
      <div className="bg-black relative z-20p p-6 flex  gap-2 rounded-lg">
        <input
          type="text"
          className="py-2 px-4 rounded-lg"
          placeholder={lang[language].getSearchPlaceholder}
        />
        <button className="py-2 px-4 bg-red-700 text-white rounded-lg ">
          {lang[language].search}
        </button>
      </div>
    </div>
  );
};

export default GptSearchBar;
