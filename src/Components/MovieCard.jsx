import React from "react";
import { POSTER_IMG_URL } from "../utils/constants";

const MovieCard = ({ poster_path }) => {
  return (
    <div className="w-48 p-2 mx-2">
      <img
        src={POSTER_IMG_URL + poster_path}
        alt="img broken"
        className="rounded-md"
      />
    </div>
  );
};

export default MovieCard;
