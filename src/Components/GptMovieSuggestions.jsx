import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMovies } from "../utils/suggestionsSlice";
import MovieList from "./MovieList";

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
    <div>
      <MovieList movies={movies} title={"Top 10 movies"} />
    </div>
  );
};

export default GptMovieSuggestions;
