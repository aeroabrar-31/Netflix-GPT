import React from "react";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";
import Header from "./Header";

const WatchTrailer = () => {
  const trailerId = useSelector((store) => store.gpt.trailerId);
  const videoUrl = useMovieTrailer(trailerId);
  return (
    <div>
      <Header />
      <div className="">
        <iframe
          className=" w-[100%] aspect-video"
          src={videoUrl}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
};

export default WatchTrailer;
