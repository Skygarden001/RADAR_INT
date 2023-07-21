import styles from '../../App.scss';
import classNames from 'classnames/bind';
import { GeoJsonDataSource, Viewer, CameraFlyTo } from 'resium';
import { Cartesian3 } from "cesium";
import { Button, Space, Tooltip, Col, Row  } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSatellite,faEarthAsia,faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect, useContext } from "react";
import { Checkbox, DatePicker } from 'antd';
import Data_table from './Data_table'
import Menu_select_radar from './Menu_sate'
import get_data from './get_data';
import {Context, Context_Sat} from "../../store/Context";
import dayjs from 'dayjs';
const { RangePicker } = DatePicker;
const dateFormat = 'YYYY-MM-DD';
// Add the desired icons to the library
let cx = classNames.bind(styles)

const Radar = ({appear_mode, onChange_appear}) => {
  const satellite_data = [
    {id: 1, label: 'Capella 06', checked: true},
    {id: 2, label: 'Capella 07', checked: true},
    {id: 3, label: 'Capella 08', checked: true},
    {id: 4, label: 'Capella 09', checked: true},
    {id: 5, label: 'Capella 10', checked: true},
    {id: 6, label: 'SKYMED 1', checked: true},
    {id: 7, label: 'SKYMED 2', checked: true},
    {id: 8, label: 'SKYMED 3', checked: true},
    {id: 9, label: 'SKYMED 4', checked: true},
    {id: 10, label: 'TerraSar', checked: true},
  ]
  
  const [satellite, set_Satellite] = useState(satellite_data)
  const [collapse_radar1, setCollapse_radar1] = useState(false)
  const [select_menu_sate, setCollapse_Select_menu_sate] = useState(false)
  //const [time, setSatellite_time] = useState([]);
  const [time_start, setSatellite_time_start] = useState('2022-01-06');
  const [time_end, setSatellite_time_end] = useState('2023-12-06');

  const [state, dispatch] = useContext(Context);
  // Hidden or show radar tab
  const onClick_radar = () => {
    setCollapse_radar1('radar')
    onChange_appear('radar')
  }
  // Hidden radar tab
  const onClick_radar_2 = () => {
    onChange_appear('')
  }
  // tab choose satellite
  const handle_onClick_select_menu_sate = () => {
    setCollapse_Select_menu_sate(!select_menu_sate)
  }
  // get var from children menu_satellite
  const handleValueChange = (value) => {
    setCollapse_Select_menu_sate(value);
  };
  // get time
  const handleRangePickerChange = (dates, dateStrings) => {
    const [start, end] = dateStrings;
     setSatellite_time_start(start)
     setSatellite_time_end(end)
  };
  // get satellite
  const handle_Selected_satellite = (value) => {
    set_Satellite(value)
      };
  // get imaging_mode
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const handleCheckboxChange = (checkboxValue) => {
    setSelectedCheckboxes((prevSelectedCheckboxes) => {
      if (prevSelectedCheckboxes.includes(checkboxValue)) {
        return prevSelectedCheckboxes.filter((value) => value !== checkboxValue);
      } else {
        return [...prevSelectedCheckboxes, checkboxValue];
      }
    });
  }
  console.log(selectedCheckboxes)
  const handle_search_area =() =>{
    const name_sate = []
    for (let i = 0; i < satellite.length; i++){
    if(satellite[i].checked){
      name_sate.push(
        satellite_data[i].label
      )
    }
  }
// get imaging area from server
function get_data( name_sat, mode, time_start, time_end) {
  const requestData = { 
    table_name: 'skymed',
    name_sat: name_sat,
    mode: mode,
    time_start: time_start,
    time_end: time_end,
  };
  const params = new URLSearchParams(requestData);
  const url = `http://192.168.100.43:3001/api/data?${params}`;
  console.log(url);
  fetch(url)
  .then((response) => {
    if (!response.ok) {
    throw new Error('Network response was not ok');
    }
     return response.json();
    })
    .then((data) => {
      dispatch({ type: 'UPDATE_STATE', payload: data});
    })
    .catch((error) => {
    console.error('Error:', error);
});
}
  get_data(name_sate, selectedCheckboxes, time_start, time_end)
  }
  //.....
   return ( 
    <div>
      <div className={cx('select_toolbar')}>
        <button
          className={cx( 'select_toolbar_button','select_button')}
          title='Radar'
          onClick={onClick_radar}>
          <FontAwesomeIcon icon={faSatellite} rotation={270} size="xl" style={{color: "#dde1e9"}} />
        </button>
        { (appear_mode === "radar") &&
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
                  <Checkbox defaultChecked="true" onChange={() => handleCheckboxChange('SP')} >SP</Checkbox>
                </Col>
                <Col  span={6} style={{paddingTop:'5px', color: '#fffff'}}  >
                  <Checkbox defaultChecked="true" onChange={() => handleCheckboxChange('SL')} >SL</Checkbox>
                </Col>
                <Col  span={6} style={{paddingTop:'5px', color: '#fffff'}}  >
                  <Checkbox defaultChecked="true" onChange={() => handleCheckboxChange('SM')} >SM</Checkbox>
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
                <RangePicker defaultValue={[dayjs(`${time_start}`, dateFormat), dayjs(`${time_end}`, dateFormat)]} style={{border: "none", background: 'rgb(243, 186, 68)', color: 'black'}}  onChange={handleRangePickerChange}/>
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
                 onClick = {handle_search_area}
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
              <Menu_select_radar satellite ={satellite}  var_select_satellite={handleValueChange} var_selected_satellite={handle_Selected_satellite}/>
            </div>)}
    </div>
    );
}
export default Radar;
 