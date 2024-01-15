import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const toggleButton = () => {
    setisSignInForm(!isSignInForm);
  };

  return (
    <div className="">
      <Header />
      <div>
        <img
          className="absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d3c4e455-f0bf-4003-b7cd-511dda6da82a/IN-en-20240108-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bgImg"
        />
      </div>
      <form
        action=""
        className="w-3/12 bg-black absolute left-0 right-0 my-36 mx-auto p-7 rounded-md bg-opacity-80 "
      >
        <h1 className="font-bold text-white text-2xl pb-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 my-2 w-full rounded"
          />
        )}
        <input
          type="text"
          placeholder="Email or phone number"
          className="p-2 my-2 w-full rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-2 w-full rounded"
        />
        <button className="p-2 my-4 w-full bg-red-600 rounded text-white">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="text-white font-bold py-4 cursor-pointer hover:text-blue-400"
          onClick={toggleButton}
        >
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
