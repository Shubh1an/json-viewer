// useGlobalDispatch.js

import { useDispatch } from 'react-redux';

// Custom hook to provide global dispatch
export function useGlobalDispatch(func) {
  const dispatch = useDispatch();
  return dispatch(func);
}
export function isValidJSON(jsonString) {
    try {
      JSON.parse(jsonString);
      return true;
    } catch (error) {
        try{
            eval('(' + jsonString + ')')
            return true
        }
        catch (error){
         return false
        }
    
    }
  }
export function handleJson(jsonString) {
    try {
      JSON.parse(jsonString);
      return JSON.parse(jsonString);
    } catch (error) {
        try{
          return  eval('(' + jsonString + ')')
            
        }
        catch (error){
         return false
        }
    
    }
  }
export const formattedJson=(json)=>{
    return JSON.stringify(json,null,4)
}
export const handleModal=(openVar)=>{
    if(typeof openVar==="object"){
     return openVar.isOpen
    }
    else return openVar
}