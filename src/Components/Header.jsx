import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../Config/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";

const Header = () => {
  const navigate = useNavigate();

  const temp = useSelector((state) => state.userDetails);
  console.log(temp);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        alert(error);
      });
  };

  return (
    <div className="absolute flex w-screen justify-between px-4 py-2 bg-gradient-to-b z-10 from-black">
      <img
        className="w-40"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      />

      {temp && (
        <div className="flex p-2">
          <img src={temp?.photoURL} className="w-10 h-10 rounded-lg mx-2"></img>
          <Button onClick={handleSignOut} variant="contained" color="error">
            {temp?.displayName}
          </Button>
        </div>
      )}
    </div>
  );
};

export default Header;
