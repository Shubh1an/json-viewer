import React, { useState } from 'react'
import ReactJson from 'react-json-view'
import { useSelector } from 'react-redux'
import { handleJson } from '../../utilites'


const JSONViewer = ({json}) => {
  const [isCollapse,setIsCollapse]= useState(false)
  const {textData}= useSelector(state=>state)
   
  return (
    <div className='flex flex-col pr-2 '>
      <div className='flex justify-start w-full bg-membio-base-grey p-1 gap-2 mb-2'>
          <button onClick={()=>setIsCollapse(!isCollapse)} class="border-transparent hover:border-gray-500 hover:border-solid hover:border-1  hover:bg-blue-600 text-black hover:text-white text-xs p-1 rounded">
        {!isCollapse?"Collapse All":"Extend All"}
      </button>
          </div>
        <div className='px-2 '>
            <ReactJson indentWidth={1} collapsed={isCollapse} src={handleJson(textData)} theme="monokai" />
    
        </div>
       
    </div>
  )
}

export default JSONViewer