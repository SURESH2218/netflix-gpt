import { signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES, USER_AVATAR } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const languageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
  };
  const handleSingout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: { USER_AVATAR },
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between ">
      <img className="w-44 " src={LOGO} alt="logo" />
      {user && (
        <div className="flex justify-between items-center gap-3">
          {showGptSearch && (
            <select
              className="appearance-none px-2 py-1 outline-none rounded-md"
              onChange={languageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang, index) => (
                <option key={index} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={handleGptSearch}
            className="p-2 text-white bg-slate-600 hover:bg-white hover:text-black rounded-md  duration-200 animate-bounce hover:animate-none"
          >
            {!showGptSearch ? "Gpt Search" : "Home page"}
          </button>
          <img className="w-10 rounded-lg" src={USER_AVATAR} alt="uh" />
          <button
            onClick={handleSingout}
            className="p-2 text-white bg-black rounded-md hover:text-black hover:bg-white  duration-200"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
