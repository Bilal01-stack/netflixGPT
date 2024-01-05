import React from "react";
import { auth } from "../utils/fireBase";
import { onAuthStateChanged, signOut } from "firebase/auth";
//import { Auth } from 'firebase/auth';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTEDp_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  //console.log(user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        //navigate("/")
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    //unscribe when the component  will unmount
    return () => unsubscribe();
  }, []);
  const handleSearchClick=()=>{
    dispatch(toggleGptSearchView());
  }
  const handleLanguageChange =(e)=>{
        dispatch(changeLanguage(e.target.value)); 
  }

  const showGptSearch = useSelector(store=> store.gpt.showGptSearch)

  return (
    <div className="absolute w-screen px-6 py-5 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        alt="logo"
        src="https://assets.nflxext.com/en_us/home/logo_v7.png"
      />
      {user && (
        <div className="flex p-2">
          {showGptSearch && ( <select className="bg-gray-500 text-white px-3 py-2 rounded-lg" onChange={handleLanguageChange}>
          {SUPPORTEDp_LANGUAGES.map(lang => <option key={lang.identifire} value={lang.identifire}>{lang.name}</option>)}
          </select>)}
          <button
            className="py-2 px-4 mx-4 bg-purple-800 text-white rounded-lg"
            onClick={handleSearchClick}
          >
           { showGptSearch ? "Home PAge":  "GPT Search" }
          </button>
          <img className="w-10 h-10" alt="user icon" src={user?.photoURL} />
          <button onClick={handleSignOut} className="text-bold text-white">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}
