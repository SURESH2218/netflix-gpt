import React, { useRef, useState } from "react";
import Header from "./Header";
import { Validation } from "../utils/Validation";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const [errormessage, seterrormessage] = useState(null);
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  // const name = useRef(null);

  const handleValidation = () => {
    const message = Validation(
      email.current.value,
      password.current.value
      // name.current.value
    );
    seterrormessage(message);
    // console.log(email.current.value, password.current.value);
    // console.log(message);
    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            // displayName: name.current.value,
            photoURL:
              "https://th.bing.com/th/id/OIP.3l2nfzcHhMemSZooiH3B3AHaFj?rs=1&pid=ImgDetMain",
          })
            .then(() => {
              const { uid, email, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              seterrormessage(error.message);
            });
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrormessage(errorCode + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          // const errorMessage = error.message;
          seterrormessage(errorCode);
        });
    }
  };
  const toggleButton = () => {
    setisSignInForm(!isSignInForm);
  };

  return (
    <div className="">
      <Header />
      <div>
        <img
          className="absolute bg-gradient-to-b from-black w-screen aspect-video h-screen object-cover"
          src={BG_URL}
          alt="bgImg"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        action=""
        className="w-80 bg-black absolute left-0 right-0 my-36 mx-auto p-7 rounded-md bg-opacity-80 "
      >
        <h1 className="font-bold text-white text-2xl pb-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            // ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 my-2 w-full rounded"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or phone number"
          className="p-2 my-2 w-full rounded"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-2 w-full rounded"
        />
        <p className="text-red-600 font-bold text-lg py-2">{errormessage}</p>
        <button
          className="p-2 my-4 w-full bg-red-600 rounded text-white hover:bg-red-700"
          onClick={handleValidation}
        >
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
