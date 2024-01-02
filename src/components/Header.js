import React from 'react'
import { auth } from '../utils/fireBase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
//import { Auth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addUser, removeUser } from '../utils/userSlice';

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);
  console.log(user);
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
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
  }, []);
  return (
    <div className='absolute w-screen px-6 py-5 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img className='w-44' alt='logo' src='https://assets.nflxext.com/en_us/home/logo_v7.png' />
        {user && <div className='flex p-2'>
          <img className='w-10 h-10' alt='user icon' src={user?.photoURL}/>
           <button onClick={handleSignOut} className='text-bold text-white'>Sign Out</button>
        </div>}
       
    </div>
    
  )
}
