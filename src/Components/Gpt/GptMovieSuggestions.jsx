import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../../utils/constants";
import { addMovies } from "../../utils/Slices/suggestionsSlice";
import MovieList from "../Secondary/MovieList";
import GptMovieList from "./GptMovieList";

const GptMovieSuggestions = () => {
  const movieNames = useSelector((store) => store.suggestions.movieNames);
  const movies = useSelector((store) => store.suggestions.movies);

  console.log(movieNames);

  const dispatch = useDispatch();

  useEffect(() => {
    if (movieNames) {
    }
  }, []);

  if (!movies) return;

  return (
    <div className="">
      <GptMovieList movies={movies} title={"Top 10 movies"} />
    </div>
  );
};

export default GptMovieSuggestions;
