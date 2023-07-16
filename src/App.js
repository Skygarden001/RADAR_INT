import Earth from "./pages/Earth/Earth";
import styles from './App.scss';
import classNames from 'classnames/bind';
import Radar from "./pages/Radar/Radar";
import Satellite from "./pages/Satellite/Satellite"
import Launch from  "./pages/Launch/Launch"
import Int from "./pages/Int/Int"
import Uploadfile from "./components/Uploadfile/Uploadfile";
import { useState, useEffect } from "react";
let cx = classNames.bind(styles)
function App() {
  const [sharedData, setSharedData] = useState({
    "features": [
      
    ],
    "type": "FeatureCollection"
  });
  // get var from uploadfile to Earth
  const handleVarImportJson = (jsonData) => {
    setSharedData(jsonData);
  };
  // useEffect(() => {
  //   // Assuming var_import_json is defined elsewhere
  //   handleDataJson(var_import_json);
  // }, []);
  console.log("before prop",sharedData)
  return (
    <div>
    <Earth sharedData={sharedData} />  
    <Radar/>
    <Satellite/>
    <Launch/>
    <Int/>
    <Uploadfile var_import_json={handleVarImportJson}/>
    
    </div>
   );
}
export default App;

