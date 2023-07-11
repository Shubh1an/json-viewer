import './App.css';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { useEffect, useState } from 'react';
import TextViewer from './components/TextViewer/TextViewer';
import JSONViewer from './components/JsonViewer/JSONViewer';
import { toast } from 'react-toastify';
import Loader from './components/Loader';
import AnimatedLogo from './components/AnimatedLogo';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Homepage/HomePage';
import { useSelector } from 'react-redux';
import AdSenseComponent from './components/Ads/CustomAd';

function App() {

  const {loader:loading}= useSelector(state=>state)

  // useEffect(()=>{
  //   document.addEventListener('contextmenu', function(event) {
  //     event.preventDefault();
  //   });
  // },[])
  console.log("data=>>>>",loading)
  return (
    <>
    
    {loading&&<Loader/>}
    <Routes>
    <Route path='/' element={<AnimatedLogo  />} />
    <Route path='/homepage' element={<HomePage />} />
    <Route path='*' element={<Navigate to={<HomePage />}/>} />
  
    </Routes>
    {/* <AdSenseComponent/> */}
    </>
  );
}

export default App;
