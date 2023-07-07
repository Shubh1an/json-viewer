import React, { useState } from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import JSONViewer from '../../components/JsonViewer/JSONViewer';
import TextViewer from '../../components/TextViewer/TextViewer';

const HomePage = ({setLoader}) => {
    const [index,selectedIndex]= useState(1)
    const [pasteData,setPasteData] =useState("")
   
  
    const handleTabChange = (index) => {
  
      selectedIndex(index)
    };
  return (
    <div>
        <div className={"bg-membio-black-shade"}  >
     <Tabs  selectedIndex={index} onSelect={(ind)=>handleTabChange(ind)}>
    <TabList cols={2}>
      <Tab  style={{color:index===0?"#000":"#fff"}} >Viewer</Tab>
      <Tab style={{color:index===1?"#000":"#fff"}}>Text</Tab>
    </TabList>

    <TabPanel>
      <JSONViewer json={pasteData} setTab={selectedIndex} />
    </TabPanel>
    <TabPanel >
     <TextViewer json={pasteData} setJson={setPasteData} setLoading={setLoader} />
    </TabPanel>
  </Tabs> 
    </div>
    </div>
  )
}

export default HomePage