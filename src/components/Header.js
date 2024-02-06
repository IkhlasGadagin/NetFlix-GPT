import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';

const Header = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const user=useSelector((store)=>store.user)

  const handleSignOut=()=>{
    signOut(auth).then(() => {

    //  navigate("/ ")

      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }

  useEffect(()=>{
   const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid, email, displayName,photoURL} = user;
        dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}));
        navigate("/browse");
        
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
       
      }
    }
    
    );
    return ()=>unSubscribe();
  },[])

  return (
    <div className='flex justify-between absolute w-screen px-8 py-3 bg-gradient-to-b from-black z-10 '>
      
        <img alt='netflix-logo' 
        className='w-44'
        src={LOGO}/>
       {user && (<div className='flex'>
          <img className='py-4 h-auto rounded-full' alt='user-icon' src={user?.photoURL}/>
        <button className='hover:opacity-100 p-4 m-4 bg-red-500 px-10 text-black font-bold opacity-70 rounded-md' onClick={handleSignOut} >SignOut</button>
        </div>)}
      </div>
  )
}

export default Header