import { GeoJsonDataSource, Viewer, CameraFlyTo } from 'resium';
import { Cartesian3, Color } from "cesium";
import { useEffect, useState } from 'react';
const destination = Cartesian3.fromDegrees(109.61689827299801, 14.210174558013324, 30000000);
function Earth({sharedData}) {
//    const [sharedData_1, setSharedData] = useState(null);
//   useEffect(() => {
//     setSharedData(sharedData);
//   }, [sharedData]);
  
   return ( 
         <div> 
            <Viewer full>
               <CameraFlyTo duration={0} destination={destination} />
               <GeoJsonDataSource data = {sharedData} fill={Color.RED.withAlpha(0.25)} stroke={Color.RED.withAlpha(0.5)}/>
            </Viewer >   
         </div>
    );
}
export default Earth;