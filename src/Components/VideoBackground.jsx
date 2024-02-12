import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";

const VideoBackground = ({ id }) => {
  console.log("in video background " + id);
  const [videoUrl, setVideoUrl] = useState(null);

  const getMovieTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US",
      API_OPTIONS
    );
    const jsondata = await data.json();
    console.log(jsondata);

    const filterData = jsondata?.results?.filter(
      (movie) => movie?.type === "Trailer"
    );
    console.log(filterData[0].key);
    setVideoUrl(
      "https://www.youtube.com/embed/" +
        filterData[0].key +
        "?autoplay=1&mute=1"
    );
  };

  useEffect(() => {
    getMovieTrailer();
  }, []);
  //   if (!videoUrl) return;
  return (
    <div className="">
      <iframe
        className="w-screen aspect-video"
        src={videoUrl}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
