import React from "react";
import useMovieTrailer from "../../hooks/useMovieTrailer";
import { useSelector } from "react-redux";
import Header from "../Header";
import TrailerHeader from "./TrailerHeader";

const WatchTrailer = () => {
  const trailerId = useSelector((store) => store.gpt.trailerId);
  const videoUrl = useMovieTrailer(trailerId);
  if (!videoUrl)
    return (
      <>
        <img
          src="https://st5.depositphotos.com/30046358/64962/v/600/depositphotos_649628858-stock-video-animated-debugging-tool-404-error.jpg"
          className="w-full"
        />
      </>
    );
  console.log("====================================");
  console.log(videoUrl);
  console.log("====================================");
  return (
    <div>
      <TrailerHeader />
      <div className="md:pt-0 pt-[15%]">
        <iframe
          className=" w-[100%] md:aspect-video aspect-square"
          src={videoUrl}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
};

export default WatchTrailer;
