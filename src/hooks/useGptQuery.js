import React from "react";

export const useGptQuery = (msg) => {
  return (
    "Act as movie recommendation system and give 10 movie suggestions for " +
    msg +
    " and only give me names of the movies in comma separated values like the example: Hera Pheri, God Father, Spider Man, Oppenheimer, Marvels etc."
  );
};
