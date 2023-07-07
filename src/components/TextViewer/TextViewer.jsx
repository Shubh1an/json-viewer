import React, { useEffect, useState } from 'react'
import Modal from '../UrlModal/UrlModal';
import axios from 'axios';

const TextViewer = ({json,setJson,setLoading}) => {
    const [height,setHeight]= useState()
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalOpen = () => {
      setIsModalOpen(true);
    };
  
    const handleModalClose = () => {
      setIsModalOpen(false);
    };
  
    useEffect(()=>{
        console.log("window=?>>>",window.innerHeight)
        setHeight(window.innerHeight-85)
    },[])
    const buttonArr=[
        {text:"Paste"},
        {text:"Copy"},
        {text:"Format"},
        {text:"Remove white Space"},
        {text:"Clear"},
        {text:"Load Json Data"},
    ]
    const handleButtonClick=async(type)=>{
     if (type==='Paste'){
       const res=  await navigator.clipboard.readText()
       const sanitizedJsonStr = stripJsonControlCharacters(res);
      return setJson(sanitizedJsonStr)
        }
        if(type==="Copy"){
        return await navigator.clipboard.writeText(json)
        }
        if(type==="Format"){
          const sanitizedJsonStr = stripJsonControlCharacters(json);
        let fromattedData=JSON.stringify(JSON.parse(sanitizedJsonStr),null,4)
        return setJson(fromattedData)
        }
        if(type==="Remove white Space"){
        let fromattedData=JSON.stringify(JSON.parse(json))
        return setJson(fromattedData)
        }
        if(type==="Clear"){
       
        return setJson("")
        }
        if(type==="Load Json Data"){
       
        return handleModalOpen()
        }
    }
    function stripJsonControlCharacters(jsonString) {
      return jsonString.replace(/[\u0000-\u001F\u007F-\u009F]/g, '');
    }
    const handleModalSubmit=async(url)=>{
      setLoading(true)
      const res= await axios.get(url)
      console.log("RES=>>.",res)
      setJson(JSON.stringify(res))
      handleModalClose()
      setLoading(false)
    }
  return (
    <>
     <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onSubmit={handleModalSubmit}
      />
      <div className='px-2 bg-membio-black-shade' >
          <div className='flex justify-start w-full bg-membio-base-grey p-1 gap-2'>
          {buttonArr.map(btn=><button onClick={()=>handleButtonClick(btn?.text)} class="border-transparent hover:border-gray-500 hover:border-solid hover:border-1  hover:bg-blue-600 text-black hover:text-white text-xs p-1 rounded">
        {btn.text}
      </button>)}
          </div>
          <textarea  value={json} onChange={(e)=>setJson(e.target.value)} className={` p-1 bg-membio-black-shade text-white`} style={{width:"100%",height:height}} placeholder='Paste Something here...' ></textarea>
      </div>
    </>
  )
}

export default TextViewer