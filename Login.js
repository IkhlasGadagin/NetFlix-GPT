import React, { useRef, useState } from 'react'
import Header from './Header'
import { validate } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';

import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { NETFLIX_WALLPAPER, USER_AVATAR } from '../utils/constants';


const Login = () => {
  
  const email=useRef(null);
  const pass=useRef(null);
  const name=useRef(null);

  const dispatch=useDispatch();

  const [errorMessage, setErrorMessage]= useState(null);
  const [signChange,setSignChange]=useState(true);

  const handleValidation=()=>{
  // console.log(email.current.value);
    //console.log(pass.current.value);
   // console.log(name.current.value);
    const message=validate(email.current.value, pass.current.value);
    //console.log(message);
    setErrorMessage(message);

    if(message) return;

    if(!signChange){
      //Sign UP
      createUserWithEmailAndPassword(auth, email.current.value, pass.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value, photoURL:USER_AVATAR
    }).then(() => {
      // Profile updated!
      const {uid, email, displayName,photoURL} = auth.currentUser;
      dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}))
     //navigate("/browse");
    }).catch((error) => {
      // An error occurred
      setErrorMessage(error.message);
    });
    //console.log(user);
   
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"#"+errorMessage);
  });

    }
    else{
      signInWithEmailAndPassword(auth, email.current.value, pass.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        //console.log(user);
       //navigate("/browse");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode+"#"+errorMessage);


      });
    }
      
    
  }
  const toggleChange=()=>{
   
  setSignChange(!signChange);
  };
  return (
    <div>
       <Header/>
      <div className='absolute '>
      <img alt='net-logo' src={NETFLIX_WALLPAPER}/>

      </div>
     <form onSubmit={(e)=>e.preventDefault()} className='w-3/12 bg-black p-12 m-4 absolute my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-70'>
      
      <h1 className='font-bold text-3xl p-4' >{signChange ? "Sign In":"Sign Up"}</h1>
      <p className='font-bold text-2xl text-red-800'>{errorMessage}</p>
      {!signChange && (<input ref={name} className="p-4 my-4 w-full bg-gray-700 rounded-md" type='text' placeholder='Name'/>)}
      <input ref={email} className="p-4 my-4 w-full bg-gray-700 rounded-md" type='text' placeholder='email'/>
      <input ref={pass} className="p-4 my-2  w-full bg-gray-700 rounded-md" type='password' placeholder='password'/>
      <button onClick={handleValidation} className='p-4 my-6 w-full bg-red-600 rounded-lg'>{signChange ? "Sign In":"Sign Up "} </button>
      <p className='py-4' onClick={toggleChange}>{signChange ? "New to NetFlix? Sign Up Now" : "Alredy Registered"}</p>     
     </form>
    
    </div>
  )
}

export default Login