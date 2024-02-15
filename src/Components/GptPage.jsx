import React from "react";
import { netflix_bg_img } from "../utils/constants";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";

const GptPage = () => {
  return (
    <div>
      <img className="absolute w-screen" src={netflix_bg_img} alt="bgimage" />
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptPage;
