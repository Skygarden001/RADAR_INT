import { GeoJsonDataSource, Viewer, CameraFlyTo, CzmlDataSource } from 'resium';
import { Cartesian3, Color } from "cesium";
import { useEffect, useState, useContext } from 'react';
import {Context, Context_Sat} from "../../store/Context";

const destination = Cartesian3.fromDegrees(109.61689827299801, 14.210174558013324, 30000000);
function Earth({sharedData}) {

//   useEffect(() => {
//     setSharedData(sharedData);
//   }, [sharedData]);
   const [state, dispatch] = useContext(Context);
   const [state_sat, dispatch_sat] = useContext(Context_Sat);
   return ( 
         <div> 
            <Viewer full>
               <CzmlDataSource data={state_sat}></CzmlDataSource>  
               <CameraFlyTo duration={0} destination={destination} />
               <GeoJsonDataSource data = {state} fill={Color.RED.withAlpha(0.25)} stroke={Color.RED.withAlpha(0.5)}/>    
               <GeoJsonDataSource data = {sharedData} fill={Color.YELLOW.withAlpha(0.1)} stroke={Color.YELLOW.withAlpha(0.7)}/>
            </Viewer >   
         </div>
    );
}
export default Earth;