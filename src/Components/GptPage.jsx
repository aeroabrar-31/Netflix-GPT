import React from "react";
import { netflix_bg_img } from "../utils/constants";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";

const GptPage = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img src={netflix_bg_img} alt="bgimage" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptPage;
