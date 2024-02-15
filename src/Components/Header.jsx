import { signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Avatar, Button, MenuItem, Select } from "@mui/material";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Config/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { netflix_logo } from "../utils/constants";
import { toggleGpt } from "../utils/gptSlice";
import { setLanguage } from "../utils/LanguageSlice";
import { langConst } from "../utils/langConstants";

const Header = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleToggleGPTSearch = () => {
    dispatch(toggleGpt());
  };

  const gptPage = useSelector((store) => store.gpt.gpt);

  const handleLangChange = (e) => {
    console.log(e.target.value);
    dispatch(setLanguage(e.target.value));
  };

  const temp = useSelector((state) => state.userDetails);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(auth);
      if (user) {
        const { uid, email, displayName, photoURL } = user;

        const userObj = {
          uid: uid,
          email: email,
          displayName: displayName,
          photoURL: photoURL,
        };

        dispatch(addUser(userObj));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
        alert(error);
      });
  };

  return (
    <div>
      {!temp && (
        <div className="absolute  px-4 py-2 bg-gradient-to-b z-10 from-black">
          <img className="w-40" src={netflix_logo} />
        </div>
      )}

      {temp && (
        <div className="absolute flex w-screen justify-between px-4 py-2 bg-gradient-to-b z-10 from-black">
          <img className="w-40" src={netflix_logo} />

          {
            <div className="flex py-4">
              <select
                onChange={handleLangChange}
                className="mr-3 bg-opacity-70 bg-black text-white px-2 rounded-md"
              >
                <option value="en">English</option>
                <option value="hi">हिंदी</option>
                <option value="tel">తెలుగు</option>
                <option value="kn">ಕನ್ನಡ</option>
              </select>
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
      )}
    </div>
  );
};

export default Header;
