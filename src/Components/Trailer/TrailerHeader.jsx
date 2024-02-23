import React from "react";
import { netflix_logo } from "../../utils/constants";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";

const TrailerHeader = () => {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/browse");
  };
  const handleLangChange = () => {};
  const handleToggleGPTSearch = () => {};
  const handleSignOut = () => {};
  const gptPage = true;
  const temp = null;
  return (
    <div>
      <div className="absolute flex justify-between bg-black   flex-row   w-[100%] px-4 py-1  z-10">
        <img
          className="md:w-40 w-32 cursor-pointer"
          onClick={handleHome}
          src={netflix_logo}
        />

        {
          <div className="flex py-4">
            {/* <select
              onChange={handleLangChange}
              className="mr-3 bg-opacity-70 bg-black text-white px-2 rounded-md"
            >
              <option value="en">English</option>
              <option value="hi">हिंदी</option>
              <option value="tel">తెలుగు</option>
              <option value="kn">ಕನ್ನಡ</option>
            </select> */}
            <button
              onClick={handleToggleGPTSearch}
              className="bg-violet-800 mr-6  rounded-lg text-white px-4 py-2"
            >
              {gptPage ? "Home" : "GptSearch"}
            </button>
            <div className="cursor-pointer">
              <Avatar
                src={temp?.photoURL}
                sx={{ width: 45, height: 45, marginRight: 4 }}
                onClick={handleSignOut}
              ></Avatar>
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default TrailerHeader;
