import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addTrailerId } from "../../utils/Slices/gptSlice";

const VideoTitle = ({ title, id, overview }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (overview.length > 300) {
    overview = overview.substring(0, 300) + ".";
  }

  const [showOverview, setShowOverview] = useState(false);

  const handleShow = () => {
    setShowOverview(!showOverview);
  };

  const handleRedirectToWatch = () => {
    dispatch(addTrailerId(id));
    navigate("/watch");
  };
  return (
    <div className="w-screen md:aspect-video aspect-square pt-[25%] md:pt-[15%] md:px-12 px-5 absolute bg-gradient-to-r from-black text-white">
      <h1 className="font-bold text-xl  pt-10 md:pt-0 md:text-3xl">{title}</h1>
      {showOverview && (
        <h1 className="w-[25%] md:inline-block hidden py-5">{overview}</h1>
      )}

      <div className="md:mt-2">
        <button
          onClick={handleRedirectToWatch}
          className=" bg-white  hover:bg-opacity-75 font-bold rounded-sm text-black px-1 py-2 md:px-4 md:py-2 md:mt-0 mt-2  md:mr-2"
        >
          ▶️ Play
        </button>
        <button
          onClick={handleShow}
          className="bg-gray-700 bg-opacity-70 md:inline-block hidden rounded-sm font-semibold text-white py-2 md:px-4 md:py-2 px-1"
        >
          {showOverview ? "Hide info" : " ℹ️ More info"}
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
