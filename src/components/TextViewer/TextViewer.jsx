import React, { useEffect, useState } from 'react'
import Modal from '../UrlModal/UrlModal';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setIsUrlModal, setLoading, setTextData } from '../../features/mainSlice';
import ButtonTray from '../ButtonArr/ButtonArr';
import store from '../../store';

const TextViewer = ({json,setJson}) => {
  const {textData,isUrlModalOpen}= useSelector(state=>state)
    const [height,setHeight]= useState()

    const dispatch = useDispatch()
  
   console.log("textData=>>>>>",typeof(textData))
   
  
    useEffect(()=>{
       
        setHeight(window.innerHeight-85)
    },[])
  
    
   
  return (
    <>
    
      <div className='px-2 bg-membio-black-shade' >
        
          <ButtonTray/>
          <textarea  value={textData}  onChange={(e)=>{console.log("value=>>>>",e);store.dispatch(setTextData(e.target.value))}} className={` p-1 bg-membio-black-shade text-white`} style={{width:"100%",height:height}} placeholder='Paste Something here...' ></textarea>
      </div>
    </>
  )
}

export default TextViewer