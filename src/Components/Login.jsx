import React, { useState, useRef } from "react";
import Header from "./Header";
import { Alert, Snackbar, TextField } from "@mui/material";
import { ValidateData } from "../utils/validate";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { auth } from "../Config/firebase";

import Slide from "@mui/material/Slide";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { netflix_bg_img, user_avatar } from "../utils/constants";

function TransitionLeft(props) {
  return <Slide {...props} direction="left" />;
}

const Login = () => {
  const [isSignIn, setSignIn] = useState(false);

  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleSignIn = () => {
    setSignIn(!isSignIn);
  };

  const navigate = useNavigate();

  const handleClickButton = () => {
    const message = ValidateData(email.current.value, password.current.value);
    console.log(message);
    setOpenSnackBar("true");
    setTransition(() => TransitionLeft);

    if (message === "true") {
      setSever(true);
      setSnackmsg("Success !!");

      if (!isSignIn) {
        //sign In logic
        console.log("sign in");

        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((usercredentials) => {
            console.log(usercredentials.user);
            console.log("Successfully signed in with firebase auth");
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        //sign Up logic
        console.log("sign up");
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((usercredential) => {
            console.log(usercredential);
            setSignIn(!isSignIn);

            updateProfile(usercredential.user, {
              displayName: name?.current?.value,
              photoURL: user_avatar,
            })
              .then(() => {
                const { uid, email, displayName, photoURL } = auth.currentUser;

                const userObj = {
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                };

                dispatch(addUser(userObj));
                console.log(
                  "user profile display name and photoUrl added successfully"
                );
              })
              .catch((error) => {
                alert(error);
              });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    } else {
      setSnackmsg(message);
      setSever(false);
    }
  };

  const [openSnackBar, setOpenSnackBar] = useState("false");
  const [snackmsg, setSnackmsg] = useState("default");
  const [transition, setTransition] = useState(null);
  const [sever, setSever] = useState(false);

  const handleClose = (event, reason) => {
    setOpenSnackBar("false");
  };

  return (
    <div className="">
      <Header />
      <img className="absolute" src={netflix_bg_img} alt="bgimage" />

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-12 bg-opacity-80  bg-black w-[28%] mx-auto left-0 right-0 my-20 text-white rounded-lg"
      >
        <h1 className=" font-bold text-3xl py-4 mx-1">
          {isSignIn ? "Sign Up" : "Sign In"}
        </h1>
        {isSignIn && (
          <input
            className="p-3 mx-1 my-2 w-full bg-slate-900 border-white"
            type="text"
            ref={name}
            placeholder="Full Name"
          ></input>
        )}
        <input
          className="p-3 mx-1 my-2 w-full bg-slate-900 border-white"
          type="email"
          ref={email}
          placeholder="ex:- abrar@gmail.com"
        ></input>

        <input
          className="p-3 mx-1 my-2 w-full bg-slate-900"
          type="password"
          ref={password}
          placeholder="ex:- Password@123"
        ></input>

        <button
          type="submit"
          onClick={handleClickButton}
          className=" p-2 rounded-sm bg-red-600 text-white  mx-1 my-4 w-full"
        >
          {isSignIn ? "Sign Up" : "Sign In"}
        </button>
        <p className="my-8 mx-2 cursor-pointer" onClick={handleSignIn}>
          {!isSignIn ? "New to NetFlix ? Sign Up" : "Already a user ? Sign In"}
        </p>
      </form>
      <Snackbar
        open={openSnackBar === "true"}
        message={snackmsg}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        TransitionComponent={transition}
        autoHideDuration={2000}
      >
        <Alert
          variant="filled"
          severity={sever ? "success" : "error"}
          sx={{ marginTop: 1 }}
          onClose={handleClose}
        >
          {snackmsg}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Login;

{
  /* <TextField
          variant="outlined"
          sx={{
            border: "1px solid rgba(255,255,255,.6)",
            borderRadius: 3,
          }}
          InputLabelProps={{
            style: {
              color: "#fff",
              backgroundColor: "var(--green-80, #184743)",
            },
          }}
          InputProps={{ style: { color: "#fff" } }}
          variant="outlined"
          size="small"
          label="Email"
        ></TextField> */
}
