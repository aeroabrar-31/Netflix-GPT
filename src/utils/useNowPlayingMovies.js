import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "./movieSlice";
import { API_OPTIONS } from "./constants";
import { useEffect } from "react";

export const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
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
    fetchNowPlaying();
  }, []);
};
