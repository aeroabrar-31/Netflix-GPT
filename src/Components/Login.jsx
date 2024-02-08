import React, { useState } from "react";
import Header from "./Header";
import { TextField } from "@mui/material";

const Login = () => {
  const [isSignIn, setSignIn] = useState(false);

  const handleSignIn = () => {
    setSignIn(!isSignIn);
  };

  return (
    <div className="">
      <Header />
      <img
        className="absolute"
        src="https://maven-uploads.s3.amazonaws.com/120386748/projects/netflix%20image.jpg"
        alt="bgimage"
      />

      <form className="absolute p-12 bg-opacity-80  bg-black w-[28%] mx-auto left-0 right-0 my-20 text-white rounded-lg">
        <h1 className=" font-bold text-3xl py-4 mx-1">
          {isSignIn ? "Sign Up" : "Sign In"}
        </h1>
        {isSignIn && (
          <input
            className="p-3 mx-1 my-2 w-full bg-slate-900 border-white"
            type="text"
            placeholder="Full Name"
          ></input>
        )}
        <input
          className="p-3 mx-1 my-2 w-full bg-slate-900 border-white"
          type="email"
          placeholder="Email"
        ></input>

        <input
          className="p-3 mx-1 my-2 w-full bg-slate-900"
          type="password"
          placeholder="Password"
        ></input>

        <button
          type="submit"
          className=" p-2 rounded-sm bg-red-600 text-white  mx-1 my-4 w-full"
        >
          {isSignIn ? "Sign Up" : "Sign In"}
        </button>
        <p className="my-8 mx-2 cursor-pointer" onClick={handleSignIn}>
          {!isSignIn ? "New to NetFlix ? Sign Up" : "Already a user ? Sign In"}
        </p>
      </form>
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
