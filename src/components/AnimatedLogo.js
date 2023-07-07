import React, { useEffect} from 'react';

import { useNavigate } from 'react-router-dom';
import SplashScreen from  '../assets/images/splash-screen.gif'
const AnimatedLogo = () => {

  const navigate = useNavigate()
  useEffect(()=>{
    let timerId;

    const resetTimer = () => {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        navigate("/homepage");
      }, 5 * 1000); //5 sec idle time
    };

    resetTimer()
    return () => {
      clearTimeout(timerId);

    };
  },[])

  
  return (
   <div className='grid place-items-center w-full h-[100vh] bg-black'>
    <img src={SplashScreen} alt='splash-logo' />
   </div>
  );
};

export default AnimatedLogo;
