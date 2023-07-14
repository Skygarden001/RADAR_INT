import styles from '../../App.scss';
import classNames from 'classnames/bind';
import { GeoJsonDataSource, Viewer, CameraFlyTo } from 'resium';
import { Cartesian3 } from "cesium";
import { Button, Space, Tooltip } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSatellite,faEarthAsia } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faShuttleSpace } from '@fortawesome/free-solid-svg-icons';
// Add the desired icons to the library
let cx = classNames.bind(styles)
function Launch() {
  const [collapse_radar, setCollapse_radar] = useState(false)
  const onClick_radar = () => {
    setCollapse_radar(!collapse_radar)
  }

   return ( 
    <div className={cx('select_toolbar')}>
      <button 
        className={cx( 'select_toolbar_button','select_button','button_launch')} 
        title='Launch'
        onClick={onClick_radar}>  
       <FontAwesomeIcon icon={faShuttleSpace} rotation={270} size="xl" style={{color: "#dde1e9",}} />
      </button>
      { collapse_radar &&
        <div className={cx('select_parameters')} >
        </div>
      }
    </div>
    );
}
export default Launch;
