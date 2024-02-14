import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, title }) => {
  console.log(movies);
  return (
    <div className="mx-2">
      <h1 className="text-2xl font-semibold p-4">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex">
          {movies.map((movie) => {
            return <MovieCard poster_path={movie.poster_path} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
