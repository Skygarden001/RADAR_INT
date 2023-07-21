import Earth from "./pages/Earth/Earth";
import styles from './App.scss';
import classNames from 'classnames/bind';
import Radar from "./pages/Radar/Radar";
import Satellite from "./pages/Satellite/Satellite"
import Launch from  "./pages/Launch/Launch"
import Int from "./pages/Int/Int"
import Uploadfile from "./components/Uploadfile/Uploadfile";
import { useState, useEffect } from "react";
import Provider_geom from './store/Provide_geom'
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
  const [select_appear, onClick_button] = useState();
  const handle_select =(e) => {
    onClick_button(e);
    console.log(e)
  }
  return( 
    <Provider_geom>
      <Earth sharedData={sharedData} />  
      <Radar  appear_mode = {select_appear} onChange_appear={handle_select}/>
      <Satellite appear_mode = {select_appear} onChange_appear={handle_select}/>
      <Launch/>
      <Int/>
      <Uploadfile var_import_json={handleVarImportJson}/>
    </Provider_geom>
   );
}
export default App;

