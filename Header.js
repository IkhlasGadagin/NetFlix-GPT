import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LANGUAGE_SUPPORTS, LOGO } from '../utils/constants';
import { toggleGptSearchAction } from '../utils/gptSlice';
import { addLanguage } from '../utils/languageSlice';

const Header = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const user=useSelector((store)=>store.user)

  const showGptButton=useSelector((noor)=>noor.gpt.showGptSearch);

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

  const handleGptShow=()=>{
    //the logic of calling action
    dispatch(toggleGptSearchAction());
  }
  const handleLanguage=(x)=>{
    //inserting the data in to the what ever we get it from the value of the on chance
     dispatch(addLanguage(x.target.value))
  }
  return (
    <div className='flex justify-between absolute w-screen px-8 py-3 bg-gradient-to-b from-black z-10 '>
      
        <img alt='netflix-logo' 
        className='w-44'
        src={LOGO}/>
       {user && (<div className='flex'>
        {showGptButton && (<select onChange={handleLanguage} className='bg-blue-300 rounded-lg p-5 m-3 font-bold text-white'>
          {LANGUAGE_SUPPORTS.map((noor)=><option className='bg-purple-400 text-black'
           key={noor.name} value={noor.identifier}> {noor.name}</option>)}
         
        </select>)}
       <button className='py-4 px-10 font-bold m-4 bg-teal-600 text-white rounded-xl hover:opacity-80' 
       onClick={handleGptShow}>{showGptButton?"Home🏠":"Gpt Search(🤖)"}</button>
          <img className='py-4 h-auto rounded-full' alt='user-icon' src={user?.photoURL}/>
        <button className='hover:opacity-100 p-4 m-4 bg-red-500 px-10 text-black font-bold opacity-70 rounded-md' onClick={handleSignOut} >SignOut</button>
        </div>)}
      </div>
  )
}

export default Header