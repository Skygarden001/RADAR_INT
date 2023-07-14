import styles from '../../App.scss';
import classNames from 'classnames/bind';
import { GeoJsonDataSource, Viewer, CameraFlyTo } from 'resium';
import { Cartesian3 } from "cesium";
import { Button, Space, Tooltip, Col, Row  } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSatellite,faEarthAsia } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from "react";
import { Checkbox } from 'antd';
import dara from '../../components/icons/satellites.png'
// Add the desired icons to the library
let cx = classNames.bind(styles)
function Radar() {
  const [collapse_radar1, setCollapse_radar1] = useState(false)
  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);
  
  const handleDocumentClick = (event) => {
    const target = event.target;
    const isIconBox = target.classList.contains('select_button');
     if (isIconBox=== true) {
       setCollapse_radar1(!collapse_radar1);
     }
  };
  const onClick_radar = () => {
    setCollapse_radar1(!collapse_radar1)
  }
  console.log(collapse_radar1)
   return ( 
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
              <Checkbox >SM</Checkbox>
            </Col>
            <Col  span={6} style={{paddingTop:'5px', color: '#fffff'}}  > 
              <Checkbox >SC</Checkbox>
            </Col>
          </Row>
          <Row gutter={[24, 48]} style={{paddingTop: '5px', marginRight:'0px' }}>
            <Col  span={6} style={{paddingTop:'5px'}}> 
              Time_setup: 
            </Col>
            <Col  span={18} > 
              <Button style={{background: 'rgb(243, 186, 68)', width: '100%' }}
              >  
                SELECT DATASETS
              </Button>
            </Col>
          </Row>
        </div>
      }
    </div>
    );
}
export default Radar;
 //<Button title='Radar intelligent' style={{ backgroundColor: 'rgba(40, 40, 40, 0.1)'}} icon = {<FontAwesomeIcon icon={faSatellite} rotation={270} size="xl" style={{color: "#dde1e9",}} />} ></Button>
