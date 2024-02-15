import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";

const GptMovieSuggestions = () => {
  const movies = useSelector((store) => store.suggestions.movies);
  console.log(movies);

  const fetchMovieDetails = async (moviename) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" + moviename,
      API_OPTIONS
    );

    const jsondata = await data.json();

    // console.log("====================================");
    // console.log(jsondata);
    // console.log("====================================");
    return jsondata.results;
  };

  useEffect(() => {
    if (movies) {
      const promisearray = movies.map((movie) => {
        return fetchMovieDetails(movie);
      });
      fullfillPromises(promisearray);
    }
  }, []);

  const fullfillPromises = async (prom) => {
    const res = await Promise.all(prom);
    console.log(res);

    const actualResult = res.map((movie) => {
      return movie[0];
    });
    console.log("====================================");
    console.log(actualResult);
    console.log("====================================");
  };

  return <div>GptMovieSuggestions</div>;
};

export default GptMovieSuggestions;
