import React, { useLayoutEffect, useState } from 'react'
import ReactJson from 'react-json-view'
import { toast } from 'react-toastify'

const JSONViewer = ({json,setTab}) => {
  const [isCollapse,setIsCollapse]= useState(false)
    console.log("json=>>>>>",Object.keys(json).sort())
    useLayoutEffect(()=>{
      
    })
    function isValidJSON(jsonString) {
      try {
        JSON.parse(jsonString);
        return true;
      } catch (error) {
        return false;
      }
    }
    function handleInvalidJson(){
      if(isValidJSON(json)){
        return JSON.parse(json)
      }
       setTab(1)
      return toast.error("Invalid JSON",{position:"top-right"})

    }
  return (
    <div className='flex flex-col pr-2 '>
      <div className='flex justify-start w-full bg-membio-base-grey p-1 gap-2 mb-2'>
          <button onClick={()=>setIsCollapse(!isCollapse)} class="border-transparent hover:border-gray-500 hover:border-solid hover:border-1  hover:bg-blue-600 text-black hover:text-white text-xs p-1 rounded">
        {!isCollapse?"Collapse All":"Extend All"}
      </button>
          </div>
        <div className='px-2 '>
            <ReactJson indentWidth={1} collapsed={isCollapse} src={handleInvalidJson()} theme="monokai" />
        </div>
       
    </div>
  )
}

export default JSONViewer