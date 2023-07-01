import styles from './Radar.page.scss';
import classNames from 'classnames/bind';
import { GeoJsonDataSource, Viewer, CameraFlyTo } from 'resium';
import { Cartesian3 } from "cesium";
import data from '../../sources/polygon.json'
import Search from '../../components/Search';
let cx = classNames.bind(styles)
const destination = Cartesian3.fromDegrees(109.61689827299801, 14.210174558013324, 5000000);
function Radar() {
   return ( 
      <header className={cx('wrapper')}>
         <div className={cx('inner')} > 
            <Search/>
            <Viewer>
               <CameraFlyTo duration={0} destination={destination} />
               <GeoJsonDataSource data={data}/>
            </Viewer >   
         </div>
      </header>
    );
}
export default Radar;

