import React from 'react'
import { useSelector } from 'react-redux'
import { setIsUrlModal, setTextData } from '../../features/mainSlice'
import store from '../../store'
import { formattedJson, handleJson, isValidJSON } from '../../utilites'

const ButtonTray = ({id}) => {
    const {textData,compareData}= useSelector(state=>state)
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
          if(id){
            return store.dispatch(setTextData({id:"compare",data:sanitizedJsonStr}))
          }
         return store.dispatch(setTextData((sanitizedJsonStr)))
           }
           if(type==="Copy"){
            if(id){
                return await navigator.clipboard.writeText(compareData)
              }
           return await navigator.clipboard.writeText(textData)
           }
           if(type==="Format"){
            
            if(id){
                if(isValidJSON(compareData)){
                let sanitizedJsonStr = stripJsonControlCharacters(compareData);
                let fromattedData=formattedJson(handleJson(sanitizedJsonStr))
                return store.dispatch(setTextData({id:"compare",data:fromattedData}))
                }
              }
              if(isValidJSON(textData)){
             let sanitizedJsonStr = stripJsonControlCharacters(textData);
           let fromattedData=formattedJson(handleJson(sanitizedJsonStr))
           return store.dispatch(setTextData(fromattedData))
              }
           }
           if(type==="Remove white Space"){
            if(id){
                if(isValidJSON(compareData)){
                let unfromattedData=JSON.stringify(handleJson(compareData))
                return store.dispatch(setTextData({id:"compare",data:unfromattedData}))
                }
              }
              if(isValidJSON(textData)){
           let unfromattedData=JSON.stringify(handleJson(textData))
           return store.dispatch(setTextData(unfromattedData))
              }
           }
           if(type==="Clear"){
            if(id){
               
                return store.dispatch({id:"compare",data:""})
              }
           return store.dispatch(setTextData(""))
           }
           if(type==="Load Json Data"){
          
           return store.dispatch(setIsUrlModal(true))
           }
       }
       function stripJsonControlCharacters(jsonString) {
         return jsonString.replace(/[\u0000-\u001F\u007F-\u009F]/g, '');
       }
  return (
    <>
     <div className='flex justify-start w-full bg-membio-base-grey p-1 gap-2'>
          {buttonArr.map(btn=><button onClick={()=>handleButtonClick(btn?.text)} class="border-transparent hover:border-gray-500 hover:border-solid hover:border-1  hover:bg-blue-600 text-black hover:text-white text-xs p-1 rounded">
        {btn.text}
      </button>)}
          </div>
    </>
  )
}

export default ButtonTray