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

function App() {

  const [loader, setLoader] = useState(false);


  useEffect(()=>{
    document.addEventListener('contextmenu', function(event) {
      event.preventDefault();
    });
  },[])
  return (
    <Routes>
    {loader&&<Loader/>}
    <Route path='/' element={<AnimatedLogo  />} />
    <Route path='/homepage' element={<HomePage setLoader={setLoader}/>} />
    <Route path='*' element={<Navigate to={<HomePage setLoader={setLoader}/>}/>} />
  
    </Routes>
  );
}

export default App;
