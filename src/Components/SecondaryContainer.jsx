import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const nowPlaying = useSelector((store) => store.movies.nowPlayingMovies);
  const upcoming = useSelector((store) => store.movies.upcomingMovies);
  const popular = useSelector((store) => store.movies.popularMovies);
  const topRated = useSelector((store) => store.movies.topRatedMovies);
  // console.log(movies);
  if (!nowPlaying || !upcoming || !popular || !topRated) return;
  return (
    <div className="bg-black text-white">
      <MovieList movies={nowPlaying} title={"Now Playing"} />
      <MovieList movies={topRated} title={"Top Rated"} />
      <MovieList movies={upcoming} title={"Upcoming"} />
      <MovieList movies={popular} title={"Popular "} />
    </div>
  );
};

export default SecondaryContainer;
