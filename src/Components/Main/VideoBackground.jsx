import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { API_OPTIONS } from "../../utils/constants";
import useMovieTrailer from "../../hooks/useMovieTrailer";

const VideoBackground = ({ id }) => {
  // console.log("in video background " + id);

  const videoUrl = useMovieTrailer(id);

  return (
    <div className="">
      <iframe
        className=" w-[100%] md:mt-0 md:aspect-video aspect-square"
        src={videoUrl}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
