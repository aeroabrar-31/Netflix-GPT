import { useDispatch, useSelector } from "react-redux";
import {
  addNowPlayingMovies,
  addPopularMovies,
} from "../utils/Slices/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

export const usePopularMovies = () => {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies.popularMovies);
  const fetchPopular = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular",
      API_OPTIONS
    );
    const jsondata = await data.json();
    console.log(jsondata);
    dispatch(addPopularMovies(jsondata.results));
  };

  useEffect(() => {
    if (!movies) {
      fetchPopular();
      console.log("====================================");
      console.log("Memoization popular");
      console.log("====================================");
    }
  }, []);
};
