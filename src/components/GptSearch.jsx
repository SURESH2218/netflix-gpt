import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <>
      <img
        className="fixed w-full object-cover h-screen"
        src={BG_URL}
        alt="bgImg"
      />
      <div className="pt-[30%] sm:pt-[17%] md:pt-[0%]">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearch;
