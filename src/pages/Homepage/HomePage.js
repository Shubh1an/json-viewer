import React, { useState } from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import JSONViewer from '../../components/JsonViewer/JSONViewer';
import TextViewer from '../../components/TextViewer/TextViewer';
import JsonCompare from '../../components/JsonCompare/JsonCompare';
import { isValidJSON, useGlobalDispatch } from '../../utilites';
import { setTab } from '../../features/mainSlice';
import store from '../../store';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const HomePage = () => {
   
    const [pasteData,setPasteData] =useState("")
    const {tabIndex}= useSelector(state=>state)
    console.log("tab-index=>>>",tabIndex)
    const handleTabChange = (index) => {
      
      store.dispatch(setTab(index))
      // selectedIndex(index)
    };
 
  return (
    <div>
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