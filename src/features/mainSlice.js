import { createSlice } from "@reduxjs/toolkit";
import { isValidJSON } from "../utilites";
import { toast } from "react-toastify";

const MainSlice= createSlice({
 name:'jsonSlice',
 initialState:{
     tabIndex:1,
     textData:"",
     compareData:"",
     isUrlModalOpen:false,
     loader:false
 },
 reducers:{
    setTab:(state,action)=>{
       
        if(action.payload!==1 && action.payload!==2 && !isValidJSON(state.textData)){
                state.tabIndex=Number(1)
             toast.error("Invalid JSON",{position:"top-right"})
              
        }
        
       else {
         state.tabIndex=action.payload
        }
    },
    setTextData:(state,action)=>{
        
        if(action.payload?.id==="compare"){
         state.compareData=action.payload.data
        }
       else{ 
        state.textData=action.payload
    }
    },
    
    setIsUrlModal:(state,action)=>{
        console.log("redux-first=>>",action.payload)
        state.isUrlModalOpen= action.payload
    },
    setLoading:(state,action)=>{
        state.loader=action.payload
    }
 }
})
export const {setTab,setTextData,setIsUrlModal,setLoading}=MainSlice.actions
export default MainSlice.reducer