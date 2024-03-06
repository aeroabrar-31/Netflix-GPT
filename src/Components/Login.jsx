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
import { sendPasswordResetEmail } from "firebase/auth";

import { auth } from "../Config/firebase";

import Slide from "@mui/material/Slide";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/Slices/userSlice";
import { netflix_bg_img, user_avatar } from "../utils/constants";
import { ToastContainer, toast } from "react-toastify";

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

    if (message === "true") {
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
            toast.success("Logged in Successfully");
          })
          .catch((error) => {
            toast.error(error.code.substring(5));
          });
      } else {
        //sign Up logic
        if (name.current.value.length > 0) {
          console.log("sign up");
          createUserWithEmailAndPassword(
            auth,
            email.current.value,
            password.current.value
          )
            .then((usercredential) => {
              console.log(usercredential);
              toast.success("Signed Up successfully !");
              setSignIn(!isSignIn);

              updateProfile(usercredential.user, {
                displayName: name?.current?.value,
                // photoURL: user_avatar,
              })
                .then(() => {
                  const { uid, email, displayName, photoURL } =
                    auth.currentUser;

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
              toast.error(error.code.substring(5));
            });
        } else {
          toast.error("Name can't be empty !");
        }
      }
    } else {
      toast.error(message);
    }
  };

  const [openSnackBar, setOpenSnackBar] = useState("false");
  const [snackmsg, setSnackmsg] = useState("default");
  const [transition, setTransition] = useState(null);
  const [sever, setSever] = useState(false);

  const handleClose = (event, reason) => {
    setOpenSnackBar("false");
  };
  const auth = getAuth();
  // const email=

  const handleForgotPassword = () => {
    if (email.current.value) {
      sendPasswordResetEmail(auth, email.current.value)
        .then(() => {
          toast.success("Password reset mail sent Successfully !");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          console.log("====================================");
          console.log(error);
          console.log("====================================");
        });
    } else {
      toast.error("Please enter your email");
    }
  };

  return (
    <div className="">
      <Header />
      <div className="fixed">
        <img
          className="h-screen md:h-full object-cover"
          src={netflix_bg_img}
          alt="bgimage"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-8 md:p-12 bg-opacity-80  bg-black w-[90%]  md:w-[450px] mx-auto left-0 right-0 my-20 text-white rounded-lg"
      >
        <h1 className=" font-bold text-2xl md:text-3xl py-4 mx-1">
          {isSignIn ? "Sign Up" : "Sign In"}
        </h1>
        {isSignIn && (
          <input
            className="p-3 mx-1 my-2 w-full bg-slate-900 border-2 border-white rounded"
            type="text"
            ref={name}
            placeholder="John Williams"
          ></input>
        )}
        <input
          className="p-3 mx-1 my-2 w-full bg-slate-900 border-2 border-white rounded"
          type="email"
          ref={email}
          // value={"teja@gmail.com"}
          placeholder="abrar@gmail.com"
        ></input>

        <input
          className="p-3 mx-1 my-2 w-full bg-slate-900 border-2 border-white rounded"
          type="password"
          ref={password}
          // value={"Teja@123"}
          placeholder="Password@123"
        ></input>

        <button
          type="submit"
          onClick={handleClickButton}
          className=" p-2 rounded-sm bg-red-600 hover:bg-red-700 text-white  mx-1 my-4 w-full"
        >
          {isSignIn ? "Sign Up" : "Sign In"}
        </button>
        {!isSignIn && (
          <p className="ml-[30%] hover:underline cursor-pointer">
            <h4 onClick={handleForgotPassword}>Forgot Password ?</h4>
          </p>
        )}
        <p className="my-6 mx-2 " onClick={handleSignIn}>
          {!isSignIn ? (
            <div>
              <h4>
                New to NetFlix ? &nbsp;{" "}
                <span className="cursor-pointer text-red-500 hover:underline font-bold text-lg">
                  Sign-Up
                </span>
              </h4>
            </div>
          ) : (
            <div>
              <h4>
                Already a registered User ? &nbsp;{" "}
                <span className="cursor-pointer text-red-500 hover:underline font-bold text-lg">
                  Sign-In
                </span>
              </h4>
            </div>
          )}
        </p>
      </form>
      <Snackbar
        open={openSnackBar === "true"}
        message={snackmsg}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        TransitionComponent={transition}
        autoHideDuration={3000}
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
