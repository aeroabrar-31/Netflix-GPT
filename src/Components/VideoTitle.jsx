import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addTrailerId } from "../utils/gptSlice";

const VideoTitle = ({ title, id, overview }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRedirectToWatch = () => {
    dispatch(addTrailerId(id));
    navigate("/watch");
  };
  return (
    <div className="w-screen aspect-video pt-[15%] px-12 absolute bg-gradient-to-r from-black text-white">
      <h1 className="font-bold text-3xl">{title}</h1>
      <h1 className="w-[25%] py-5">{overview}</h1>

      <div>
        <button
          onClick={handleRedirectToWatch}
          className="bg-gray-700 bg-opacity-70 rounded-md text-white px-7 py-3 mr-2"
        >
          ▶️ Play
        </button>
        <button className="bg-gray-700 bg-opacity-70 rounded-md text-white px-5 py-3">
          ℹ️ More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
