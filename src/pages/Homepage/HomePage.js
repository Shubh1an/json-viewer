import React, { useState } from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import JSONViewer from '../../components/JsonViewer/JSONViewer';
import TextViewer from '../../components/TextViewer/TextViewer';
import JsonCompare from '../../components/JsonCompare/JsonCompare';
import { handleModal, isValidJSON, useGlobalDispatch } from '../../utilites';
import { setIsUrlModal, setLoading, setTab, setTextData } from '../../features/mainSlice';
import store from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Modal from '../../components/UrlModal/UrlModal';
import axios from 'axios';

const HomePage = () => {
   
    const [pasteData,setPasteData] =useState("")
    const {tabIndex,isUrlModalOpen}= useSelector(state=>state)
    const dispatch= useDispatch()
    console.log("tab-index=>>>",tabIndex)
    const handleTabChange = (index) => {
      
      store.dispatch(setTab(index))
      // selectedIndex(index)
    };
    const handleModalClose = () => {
      store.dispatch(setIsUrlModal(false))
    
    };
    const handleModalSubmit=async(url)=>{
    
      dispatch(setLoading(true))
      const res= await axios.get(url)
      console.log("RES=>>.",res)
      if(typeof isUrlModalOpen==='object'){
        console.log("first",isUrlModalOpen)
        dispatch(setTextData({id:"compare",data:JSON.stringify(res)}))
        dispatch(setIsUrlModal({id:"compare",isOpen:false}))
        dispatch(setLoading(false))
        return true
      }
      console.log("second=>>",isUrlModalOpen)
      dispatch(setTextData(JSON.stringify(res)))
      dispatch(setIsUrlModal(false))
      dispatch(setLoading(false))
    }
  return (
    <div>
       <Modal
        isOpen={handleModal(isUrlModalOpen)}
        onClose={handleModalClose}
        onSubmit={handleModalSubmit}
      />
        <div className={"bg-membio-black-shade"}  >
     <Tabs  selectedIndex={tabIndex} onSelect={(ind)=>handleTabChange(ind)}>
    <TabList cols={2}>
      <Tab  style={{color:tabIndex===0?"#000":"#fff"}} >Viewer</Tab>
      <Tab style={{color:tabIndex===1?"#000":"#fff"}}>Text</Tab>
      <Tab style={{color:tabIndex===2?"#000":"#fff"}}>JSON Compare</Tab>
    </TabList>

    <TabPanel>
      <JSONViewer json={pasteData} />
    </TabPanel>
    <TabPanel >
     <TextViewer  />
    </TabPanel>
    <TabPanel >
     <JsonCompare/>
    </TabPanel>
  </Tabs> 
    </div>
    </div>
  )
}

export default HomePage