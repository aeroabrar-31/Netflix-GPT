import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store?.movies?.nowPlayingMovies);
  if (!movies) return;
  // console.log(movies);
  const randomIndex = Math.floor(Math.random() * 20);
  const tt = movies[8];
  const { title, overview, id } = tt;
  console.log(tt);

  return (
    <div className="md:pt-0 pt-[15%]">
      <VideoTitle id={id} title={title} overview={overview} />
      <VideoBackground id={id} />
    </div>
  );
};

export default MainContainer;
