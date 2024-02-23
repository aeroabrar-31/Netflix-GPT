import React from "react";
import { netflix_bg_img } from "../../utils/constants";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";

const GptPage = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          className="h-screen object-cover  md:h-full"
          src={netflix_bg_img}
          alt="bgimage"
        />
      </div>
      <div className="pt-[30%] md:pt-0">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptPage;
