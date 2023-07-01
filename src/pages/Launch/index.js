
import styles from './Launch.page.scss';
import classNames from 'classnames/bind';
import {Viewer, CameraFlyTo, KmlDataSource, GeoJsonDataSource } from 'resium';
import { Cartesian3 } from "cesium";
import data from './launch_site.geojson'
import data1 from './facilities.kml'
let cx = classNames.bind(styles)
const destination = Cartesian3.fromDegrees(109.61689827299801, 14.210174558013324, 5000000);
console.log(data)
function Launch() {
   return ( 
      <header className={cx('wrapper')}>
         <div className={cx('inner')} > 
 
            <Viewer>
               <CameraFlyTo duration={0} destination={destination} />
              
               <KmlDataSource data={data1} />
               
            </Viewer >   
         </div>
      </header>
    );
}
export default Launch;
//<GeoJsonDataSource data={data} />
