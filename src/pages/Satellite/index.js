
import styles from './Satellite.page.scss';
import classNames from 'classnames/bind';
import { GeoJsonDataSource, Viewer, CameraFlyTo } from 'resium';
import { Cartesian3 } from "cesium";
let cx = classNames.bind(styles)
const destination = Cartesian3.fromDegrees(109.61689827299801, 14.210174558013324, 5000000);
function Satellite() {
   return ( 
      <header className={cx('wrapper')}>
         <div className={cx('inner')} > 

            <Viewer>
               <CameraFlyTo duration={0} destination={destination} />
            </Viewer >   
         </div>
      </header>
    );
}
export default Satellite;

