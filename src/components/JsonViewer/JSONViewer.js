import React, { useLayoutEffect } from 'react'
import ReactJson from 'react-json-view'
import { toast } from 'react-toastify'

const JSONViewer = ({json,setTab}) => {
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
    <div className='flex pr-2 '>
        <div className='px-2 '>
            <ReactJson indentWidth={1} collapsed={false} src={handleInvalidJson()} theme="monokai" />
        </div>
       
    </div>
  )
}

export default JSONViewer