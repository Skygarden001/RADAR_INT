import { GeoJsonDataSource, Viewer, CameraFlyTo, CzmlDataSource } from 'resium';
import { Cartesian3, Color } from "cesium";
import { useEffect, useState, useContext } from 'react';
import {Context, Context_Sat} from "../../store/Context";
import dataa from './data.czml'
const destination = Cartesian3.fromDegrees(109.61689827299801, 14.210174558013324, 30000000);
function Earth({sharedData}) {
const [state, dispatch] = useContext(Context);
const [state_sat, dispatch_sat] = useContext(Context_Sat);
   return ( 
         <div> 
            <Viewer full>
               <GeoJsonDataSource data = {state} fill={Color.TRANSPARENT} stroke={Color.RED}/>    
               <GeoJsonDataSource data = {sharedData}/>
               <CzmlDataSource data={state_sat}/> 
               {/* <CzmlDataSource data={dataa}/>  */}
               <CameraFlyTo duration={0} destination={destination} />   
            </Viewer >   
         </div>
    );
}
export default Earth;