import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer = (id) => {
  const [videoUrl, setVideoUrl] = useState(null);

  const getMovieTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US",
      API_OPTIONS
    );
    const jsondata = await data.json();
    // console.log(jsondata);
    // console.log("movie id " + id);

    const filterData = jsondata?.results?.filter(
      (movie) => movie?.type === "Trailer"
    );
    console.log(filterData[0]?.key);
    if (filterData[0]?.key)
      setVideoUrl(
        "https://www.youtube.com/embed/" +
          filterData[0]?.key +
          "?playlist=" +
          filterData[0]?.key +
          "&rel=0&loop=1&autoplay=1&mute=1"
      );
  };

  useEffect(() => {
    getMovieTrailer();
  }, []);

  return videoUrl;
};

export default useMovieTrailer;
