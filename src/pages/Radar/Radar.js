import styles from '../../App.scss';
import classNames from 'classnames/bind';
import { GeoJsonDataSource, Viewer, CameraFlyTo } from 'resium';
import { Cartesian3 } from "cesium";
import { Button, Space, Tooltip, Col, Row  } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSatellite,faEarthAsia,faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from "react";
import { Checkbox, DatePicker } from 'antd';
import Data_table from './Data_table'
import Menu_select_radar from './Menu_sate'


const { RangePicker } = DatePicker;
// Add the desired icons to the library
let cx = classNames.bind(styles)
function Radar() {
  const [collapse_radar1, setCollapse_radar1] = useState(false)
  const [select_menu_sate, setCollapse_Select_menu_sate] = useState(false)
  // Hidden or show radar tab
  const onClick_radar = () => {
    setCollapse_radar1(!collapse_radar1)
  }
  // Hidden radar tab
  const onClick_radar_2 = () => {
    setCollapse_radar1(false)
  }
  // tab choose satellite
  const handle_onClick_select_menu_sate = () => {
    setCollapse_Select_menu_sate(!select_menu_sate)
  }
  // get var from children menu_satellite
  const handleValueChange = (value) => {
    setCollapse_Select_menu_sate(value);
  };

   return ( 
    <div>
      <div className={cx('select_toolbar')}>
        <button
          className={cx( 'select_toolbar_button','select_button')}
          title='Radar'
          onClick={onClick_radar}>
          <FontAwesomeIcon icon={faSatellite} rotation={270} size="xl" style={{color: "#dde1e9",}} />
        </button>
        { (collapse_radar1) &&
          <div className={cx('select_parameters')} >
            <Row gutter={[24, 48]} style={{paddingTop: '5px', marginRight:'0px' }}>
              <Col  span={6} style={{paddingTop:'5px'}}>
                Dataset:
              </Col>
              <Col  span={18} >
                <Button style={{background: 'rgb(243, 186, 68)', width: '100%' }}
                  onClick={handle_onClick_select_menu_sate}
                >
                  SELECT DATASETS
                </Button>
              </Col>
            </Row>
            <Row gutter={[24, 48]} style={{paddingTop: '5px', marginRight:'0px'  }}>
              <Col  span={6} style={{paddingTop:'5px'}}>
                Mode:
              </Col>
              <Col  span={6} style={{paddingTop:'5px', color: '#fffff'}}  >
                <Checkbox >SP</Checkbox>
              </Col>
              <Col  span={6} style={{paddingTop:'5px', color: '#fffff'}}  >
                <Checkbox >SS</Checkbox>
              </Col>
              <Col  span={6} style={{paddingTop:'5px', color: '#fffff'}}  >
                <Checkbox >SM</Checkbox>
              </Col>
            </Row>
            <Row gutter={[24, 48]} style={{paddingTop: '5px', marginRight:'0px' }}>
              <Col  span={6} style={{paddingTop:'5px'}}>
                Time_setup:
              </Col>
              <Col  span={18} >
                {/* <Button style={{background: 'rgb(243, 186, 68)', width: '100%' }}
                >
                  <FontAwesomeIcon icon={faCalendarDays} />
                </Button> */}
                {/* <DatePicker placeholder='Time_start' style={{width: '40px'}}/> */}
                <RangePicker style={{border: "none", background: 'rgb(243, 186, 68)', color: 'black'}} />
              </Col>
            </Row>
            <Row gutter={[24, 48]} style={{paddingTop: '10px', marginTop:'2px', marginRight:'2px',marginLeft:'2px',marginBottom:'2px', color:"white" }}>
              <Data_table/>
            </Row>
            <Row gutter={[24, 48]} style={{paddingTop: '10px', marginTop:'2px', marginRight:'2px',marginLeft:'2px',marginBottom:'2px', color:"white" }}>
            <Col  span={12} style={{paddingTop:'2px', paddingRight:'5px',paddingLeft:'5px',paddingBottom:'0px' }}>
                <Button style={{background: 'rgb(243, 186, 68)', width: '100%' }}
                 onClick={onClick_radar_2}
                >
                  HIDDEN
                </Button>
              </Col>
              <Col  span={12} style={{paddingTop:'2px', paddingRight:'5px',paddingLeft:'5px',paddingBottom:'0px'}} >
                <Button style={{background: 'rgb(243, 186, 68)', width: '100%' }}
                >
                  SEARCH
                </Button>
              </Col>
            </Row>
          </div>
        }
      </div >
          {(select_menu_sate && 
            <div className={cx('select_parameters', 'Menu_select_radar')}>
              <Menu_select_radar var_select_satellite={handleValueChange}/>
            </div>)}
    </div>
    );
}
export default Radar;
 