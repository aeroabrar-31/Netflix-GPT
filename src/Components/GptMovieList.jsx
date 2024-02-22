import React from "react";
import MovieCard from "./MovieCard";

const GptMovieList = ({ movies }) => {
  return (
    <div>
      <div className="bg-black bg-opacity-65 p-10 m-5 ">
        <div className="flex  flex-wrap justify-center">
          {movies.map((movie) => {
            return (
              <MovieCard poster_path={movie?.poster_path} id={movie?.id} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GptMovieList;
