import styles from '../../App.scss';
import classNames from 'classnames/bind';
import { GeoJsonDataSource, Viewer, CameraFlyTo } from 'resium';
import { Cartesian3 } from "cesium";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAsia } from '@fortawesome/free-solid-svg-icons';
import { useState, useContext } from "react";
import { Button, Space, Tooltip, Col, Row } from 'antd';
import {Context, Context_Sat} from "../../store/Context";
// Add the desired icons to the library
let cx = classNames.bind(styles)
  const Satellite = ({appear_mode, onChange_appear}) => {
  const [state_sat, dispatch_sat] = useContext(Context_Sat);
  const [hidden_tab_satellite, setHidden_tab_satellite] = useState(false)
  // hidden or show tab satellite
  const onClick_tab_satellite = () => {
    dispatch_sat({ type: 'UPDATE_STATE', payload: {id: "document",
    name: "con cac",
    version: "1.0",} });
    onChange_appear('satellite'); 
    }
  // seach satellite to dispaly on the earth's suface
  const handle_search_satellite = () => {
    console.log("event_happen")
    get_czml_sattellite()
  }
  // function get file orbit position of satellite
  function get_czml_sattellite()
      {
        const fetchDataFromAPI = async () => {
         try {
           const response = await fetch('http://192.168.100.43:3001/api/satellite');
           if (!response.ok) {
             throw new Error('Network response was not ok');
           }
           const data = await response.json();
           //setDataSatellite(data); // Cập nhật state với dữ liệu mới từ API
           dispatch_sat({ type: 'UPDATE_STATE', payload: data });
         } catch (error) {
           console.error('Error fetching data:', error);
         }
         //console.log("data_satellite has changed:", data_satellite);
       };
       fetchDataFromAPI()
      }
    // ........................................
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
          <Row gutter={[24, 48]} style={{paddingTop: '10px', marginTop:'2px', marginRight:'2px',marginLeft:'2px',marginBottom:'2px', color:"white" }}>
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
