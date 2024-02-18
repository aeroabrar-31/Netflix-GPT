import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, title }) => {
  console.log(movies);
  return (
    <div className="mx-2">
      <h1 className="text-3xl font-bold px-6  pt-6 pb-2 text-red-600">
        {title}
      </h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex">
          {movies.map((movie) => {
            return <MovieCard poster_path={movie.poster_path} id={movie.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
