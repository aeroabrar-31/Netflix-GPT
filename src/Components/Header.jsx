import { signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Avatar, Button } from "@mui/material";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Config/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { netflix_logo } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

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
            <div className="flex p-2">
              <Avatar
                src={temp?.photoURL}
                sx={{ width: 45, height: 45 }}
              ></Avatar>
              <button onClick={handleSignOut}>{temp?.displayName}</button>
            </div>
          }
        </div>
      )}
    </div>
  );
};

export default Header;
