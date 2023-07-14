import { GeoJsonDataSource, Viewer, CameraFlyTo } from 'resium';
import { Cartesian3 } from "cesium";
const destination = Cartesian3.fromDegrees(109.61689827299801, 14.210174558013324, 30000000);
function Earth() {
   return ( 
         <div> 
            <Viewer full>
               <CameraFlyTo duration={0} destination={destination} />
            </Viewer >   
         </div>
    );
}
export default Earth;