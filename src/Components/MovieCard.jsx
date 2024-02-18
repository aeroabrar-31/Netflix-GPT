import React from "react";
import { POSTER_IMG_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerId } from "../utils/gptSlice";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ poster_path, id }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRedirectToWatch = () => {
    dispatch(addTrailerId(id));
    navigate("/watch");
  };

  return (
    <div className="w-48 p-2 mx-4 rounded-lg">
      <img
        src={POSTER_IMG_URL + poster_path}
        alt="img broken"
        onClick={handleRedirectToWatch}
        className="rounded-md cursor-pointer transform scale-100 transition-transform ease-in-out hover:scale-110"
      />
    </div>
  );
};

export default MovieCard;
