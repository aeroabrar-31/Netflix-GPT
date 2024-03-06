import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/Slices/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

export const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies.nowPlayingMovies);
  const fetchNowPlaying = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing",
      API_OPTIONS
    );
    const jsondata = await data.json();
    console.log(jsondata);
    dispatch(addNowPlayingMovies(jsondata.results));
  };

  useEffect(() => {
    if (!movies) fetchNowPlaying();
  }, []);
};
