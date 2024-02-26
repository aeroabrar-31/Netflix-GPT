import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Avatar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Select,
} from "@mui/material";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Config/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/Slices/userSlice";
import { netflix_logo } from "../utils/constants";
import { toggleGpt } from "../utils/Slices/gptSlice";
import { setLanguage } from "../utils/Slices/LanguageSlice";
import { langConst } from "../utils/langConstants";
import { LogoutOutlined } from "@mui/icons-material";
import { toast } from "react-toastify";

function stringAvatar(name) {
  if (!name) return null;
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}
function stringToColor(string) {
  if (!string) return;
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

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
        navigate("/browse");
        dispatch(addUser(userObj));
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        toast.warning("Logged out !");
      })
      .catch((error) => {
        // An error happened.
        alert(error);
      });
  };

  // const navigate=useNavigate();
  const handleHome = () => {
    navigate("/browse");
  };

  const [openMenu, setOpenMenu] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setOpenMenu(true);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  return (
    <div>
      {!temp && (
        <div className="absolute cursor-pointer bg-opacity-15 px-4 py-2 bg-gradient-to-b z-10 from-black">
          <img
            className="md:w-40 w-32 "
            onClick={handleHome}
            src={netflix_logo}
          />
        </div>
      )}

      {temp && (
        <div className="absolute flex justify-between md:bg-inherit bg-black  flex-row   w-[100%] px-4 py-2 bg-gradient-to-b z-10 from-black">
          <img
            className="md:w-40 w-32  md:mx-0 cursor-pointer"
            onClick={handleHome}
            src={netflix_logo}
          />

          {
            <div className="flex justify-between py-4">
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
                className=" mr-6  bg-gradient-to-r from-red-500 to-violet-500 hover:from-violet-500 hover:to-red-500 transition duration-300  rounded-lg text-white md:px-4 px-2 py-1 md:py-2"
              >
                {gptPage ? "Home" : "GptSearch"}
              </button>
              {/* <button class="px-6 py-3 text-white font-semibold rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gradient-to-r from-red-500 to-violet-500">
                Gradient Button
              </button> */}
              <div className="cursor-pointer">
                {/* <IconButton onClick={handleMenu}> */}
                <Avatar
                  src={temp.photoURL}
                  sx={{ width: 45, height: 45, marginRight: 4 }}
                  onClick={handleSignOut}
                  aria-controls={openMenu ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={openMenu ? "true" : undefined}
                ></Avatar>
                {/* </IconButton> */}
              </div>
              <Menu
                id="basic-menu"
                open={openMenu}
                // onClose={handleCloseMenu}
                anchorEl={anchorEl}
                onClose={handleClose}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                <MenuItem dense onClick={handleSignOut}>
                  <LogoutOutlined sx={{ marginRight: 1 }} />
                  Logout
                </MenuItem>
              </Menu>
            </div>
          }
        </div>
      )}
    </div>
  );
};

export default Header;
