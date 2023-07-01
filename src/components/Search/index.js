import { SearchOutlined } from "@ant-design/icons";
import { Button, Space, Tooltip } from 'antd';
import { useState } from "react";
import styles from './Search.module.scss'
import classNames from "classnames/bind";
import { Col, Row } from 'antd';
import { DatePicker } from 'antd';
import { Checkbox } from 'antd';
import Data_table from './components/Data_table.js';
const { RangePicker } = DatePicker;
let cx = classNames.bind(styles)
function Search() {
    const [collapse, setcollapse] = useState()
    const [satellite, setSatellite] = useState()
    const [mode, setMode] = useState()
    const [time, setTime] = useState()
    const handleClicksatellite = () => {
        setSatellite(!satellite)
    }
    const onChange_capella = (e) => {
        console.log(`checked = ${e.target.checked}`)
      };
      const onChange_COSMOSKYMED = (e) => {
        console.log(`checked = ${e.target.checked}`)
      };
      const onChange_TerraSAR = (e) => {
        console.log(`checked = ${e.target.checked}`)
      };
    const handleClick = () => {
        setcollapse(!collapse)
    };
    const handleClick_mode = () => {
        setMode(!mode)
    };
    const handleClick_time = () => {
        setTime(!time)
    };
    const onChange_SP = () => {
    };
    const onChange_SM = () => {
    };
    const handleClick_search = () => {
    };
    return (  
      <div>
        <Button  className={cx('search_collapse')} icon={<SearchOutlined />} onClick={handleClick}/> 
        {collapse&& 
        <div className={cx('wrapper')}> 
        <div className={cx('container_checkbox')}>
          <Row gutter={16}>
            <Button  className={cx('satellite')}
              onClick={handleClicksatellite}> Satellite
            </Button>
              <div className={cx('satellite_check')} >
                <Checkbox onChange={onChange_capella}> Capella </Checkbox>
                <Checkbox onChange={onChange_COSMOSKYMED }> COSMO_skyMed</Checkbox>
                <Checkbox onChange={onChange_TerraSAR}> TerraSAR </Checkbox>
              </div >
          </Row>
          <Row gutter={16}>
            <Button  className={cx('Mode')}> Mode </Button>
              <div className={cx('mode')} >
                <Checkbox onChange={onChange_SP}> SL </Checkbox>
                <Checkbox onChange={onChange_SM }> SM </Checkbox>
              </div >
          </Row>
        </div>
        <Row gutter={16}>
          <Button  className={cx('cesium-svgPath-svg_Time')} onClick={ handleClick_time}> Time </Button>
            <div  className={cx('cesium-svgPath-svg_time')} >
              <RangePicker renderExtraFooter={() => 'extra footer'} showTime />
            </div >
        </Row>
        <Row gutter={16}>
          <Button  className={cx('cesium-svgPath-svg_search')} onClick={ handleClick_search}> Search </Button>     
        </Row>
        <Row>
          <div className={cx('data_table')} >
            <Data_table/> 
          </div>
        </Row>            
        </div>  
        }
      </div>    
     );
}
export default Search;