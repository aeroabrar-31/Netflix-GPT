import { useDispatch, useSelector } from "react-redux";
import {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
} from "../utils/Slices/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

export const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies.upcomingMovies);
  const fetchUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming",
      API_OPTIONS
    );
    const jsondata = await data.json();
    console.log(jsondata);
    dispatch(addUpcomingMovies(jsondata.results));
  };

  useEffect(() => {
    if (!movies) {
      console.log("====================================");
      console.log("Memoization upcoming");
      console.log("====================================");
      fetchUpcomingMovies();
    }
  }, []);
};
