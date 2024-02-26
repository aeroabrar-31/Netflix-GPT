import { useDispatch } from "react-redux";
import {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
} from "../utils/Slices/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

export const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const fetchTopRated = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      API_OPTIONS
    );
    const jsondata = await data.json();
    console.log(jsondata);
    dispatch(addTopRatedMovies(jsondata.results));
  };

  useEffect(() => {
    fetchTopRated();
  }, []);
};
