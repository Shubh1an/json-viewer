import './App.css';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { useEffect, useState } from 'react';
import TextViewer from './components/TextViewer/TextViewer';
import JSONViewer from './components/JsonViewer/JSONViewer';
import { toast } from 'react-toastify';
import Loader from './components/Loader';

function App() {
  const [index,selectedIndex]= useState(1)
  const [pasteData,setPasteData] =useState("")
  const [loader, setLoader] = useState(false);

  const handleTabChange = (index) => {
  //  if(index===0){ 
  //   try {
  //     const data = JSON.parse(JSON.stringify(pasteData));
  //     return selectedIndex(0)
  //   } catch (error) {
  //    return toast.error("Invalid JSON",{position:"top-right"})
  //   }}
    selectedIndex(index)
  };
  useEffect(()=>{
    document.addEventListener('contextmenu', function(event) {
      event.preventDefault();
    });
  },[])
  return (
    <>
    {loader&&<Loader/>}
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
    </>
  );
}

export default App;
