import React, { useEffect, useState } from 'react'
import TextViewer from '../TextViewer/TextViewer'
import ReactDiffViewer from 'react-diff-viewer';
import { useSelector } from 'react-redux';
import ButtonTray from '../ButtonArr/ButtonArr';
import store from '../../store';
import { setTextData } from '../../features/mainSlice';
import { CompareCode, JsonView } from '../../assets/svgs';
import { formattedJson, handleJson, isValidJSON } from '../../utilites';
import { toast } from 'react-toastify';
const JsonCompare = () => {
    const {textData,compareData} =useSelector(state=>state)
    const [isCompare,setIsCompare]= useState(false)
    const [height,setHeight]= useState()
    useEffect(()=>{
       
        setHeight(window.innerHeight-85)
    },[])
    const handleFlip=()=>{
       if(!isValidJSON(textData)&&!isValidJSON(compareData)){
        return toast.error("Invalid JSON",{position:"top-right"})
       }
        setIsCompare(!isCompare)
    }
  return (
    <div>
         <button onClick={()=>handleFlip()} className="fixed bottom-4 right-4 p-4 text-3xl bg-blue-500 hover:bg-blue-700 text-white rounded-full shadow-lg z-50">
     {isCompare?<JsonView/>: <CompareCode/>}
    </button>
        
    {!isCompare?
        <div className='flex'>
       <div className='basis-1/2'>
       <div className='px-2 bg-membio-black-shade' >
        
          <ButtonTray/>
          <textarea  value={textData} onChange={(e)=>store.dispatch(setTextData(e.target.value))} className={` p-1 bg-membio-black-shade text-white`} style={{width:"100%",height:height}} placeholder='Paste Something here...' ></textarea>
      </div>
       </div>
       {/* <button
      className="bg-blue-500 hover:bg-blue-700 text-white h-max w-32 my-auto font-bold py-2 px-4 rounded"
    >
      Compare
    </button> */}
   
       <div className='basis-1/2'>
       <div className='px-2 bg-membio-black-shade' >
        
          <ButtonTray id={true}/>
          <textarea  value={compareData} onChange={(e)=>store.dispatch(setTextData({id:"compare",data:e.target.value}))} className={` p-1 bg-membio-black-shade text-white`} style={{width:"100%",height:height}} placeholder='Paste Something here...' ></textarea>
      </div>
       </div>
       </div>
   :
    <div id='flip-back' class="">
    <ReactDiffViewer oldValue={formattedJson(handleJson(textData))} newValue={formattedJson(handleJson(compareData))?formattedJson(handleJson(compareData)):null} splitView={true} />
    </div>
}


      

      {/* <ReactDiffViewer oldValue={textData} newValue={""} splitView={true} /> */}
    </div>
  )
}

export default JsonCompare