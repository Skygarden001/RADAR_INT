import styles from '../../App.scss';
import classNames from 'classnames/bind';
import { GeoJsonDataSource, Viewer, CameraFlyTo } from 'resium';
import { Cartesian3 } from "cesium";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAsia } from '@fortawesome/free-solid-svg-icons';
import { useState, useContext, useEffect } from "react";
import { Button, Space, Tooltip, Col, Row } from 'antd';
import {Context, Context_Sat} from "../../store/Context";
import FileUpload from "./FileUpload";
import { Checkbox } from 'antd';
import get_tle_czml from './get_tle_czml';

  // Add the desired icons to the library
  let cx = classNames.bind(styles)
  const Satellite = ({appear_mode, onChange_appear}) => {
  const [state_sat, dispatch_sat] = useContext(Context_Sat);
  const [hidden_tab_satellite, setHidden_tab_satellite] = useState(false)
  const [ fileTLE, setFileTLE] = useState('');
  const [orbit, setOrbit]= useState(true)
  // hidden or show tab satellite
  const onClick_tab_satellite = () => {
    dispatch_sat({ type: 'UPDATE_STATE', payload: {id: "document",
    name: "con cac",
    version: "1.0",} });
    onChange_appear('satellite'); 
    }
  
  // fuctionn get local file_tle
  
  const handleFile_tle = (file_tle) => {
    setFileTLE(file_tle)
  }
  // seach satellite to dispaly on the earth's suface
    const onChange_orbit_display = () => {
      setOrbit(!orbit)
  }
  const handle_search_satellite = () => {
    const l=get_tle_czml(fileTLE, orbit)
    dispatch_sat({ type: 'UPDATE_STATE', payload: l});
  }
   return ( 
    <div className={cx('select_toolbar')}>
      <button 
        className={cx( 'select_toolbar_button','select_button','button_satellite')} 
        title='Satellite'
        onClick={onClick_tab_satellite}>  
       <FontAwesomeIcon icon={faEarthAsia} size="xl" style={{color: "#dde1e9",}} />
      </button>
      { appear_mode==="satellite" &&
        <div className={cx('select_parameters')} >
          <Row gutter={[24, 48]} style={{border: '1px solid #444', paddingTop: '4px', paddingBottom:'4px', marginTop:'2px', marginRight:'2px',marginLeft:'2px',marginBottom:'2px', color:"white" }}>
          <FileUpload file_tle={handleFile_tle} />
          </Row>
          <Row gutter={[24, 48]} style={{border: '1px solid #444', paddingTop: '4px', paddingBottom:'4px', marginTop:'2px', marginRight:'2px',marginLeft:'2px',marginBottom:'2px', color:"white" }}>
              <Col  span={12} style={{ boder: '1px solid white', paddingTop:'0px', paddingRight:'5px',paddingLeft:'5px',paddingBottom:'0px' }}>
                 Orbit_display
                </Col>
              <Col  span={12} style={{paddingTop:'0px', paddingRight:'5px',paddingLeft:'75px',paddingBottom:'0px'}} >
                <Checkbox defaultChecked='true' onChange={onChange_orbit_display}></Checkbox>
              </Col>
            </Row>
          <Row gutter={[24, 48]} style={{ paddingTop: '10px', marginTop:'2px', marginRight:'2px',marginLeft:'2px',marginBottom:'2px', color:"white" }}>
            <Col  span={12} style={{paddingTop:'2px', paddingRight:'5px',paddingLeft:'5px',paddingBottom:'0px' }}>
                <Button style={{background: 'rgb(243, 186, 68)', width: '100%' }}
                 onClick={onClick_tab_satellite}
                >
                  HIDDEN
                </Button>
              </Col>
              <Col  span={12} style={{paddingTop:'2px', paddingRight:'5px',paddingLeft:'5px',paddingBottom:'0px'}} >
                <Button style={{background: 'rgb(243, 186, 68)', width: '100%' }}
                 onClick = {handle_search_satellite}
                >
                  SEARCH
                </Button>
              </Col>
            </Row>
           
          
        </div>
      }
    </div>
    );
}
export default Satellite;
