import { Menu,  Checkbox, Button} from 'antd';
import {useState} from 'react';

 function Menu_select_radar({ var_select_satellite }) {
    const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
    const [colappse_selected, setColappse_selected] = useState(false);

    // process after choosing satellite: hidden and get checkbos satellite
    const handle_onClick_APPLY = () => {
      setColappse_selected(false)
      var_select_satellite(colappse_selected)
    };
    // select all satellite
    const handle_onClick_SELECT_ALL = () => {
    const allCheckboxes = [
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'
    ];
    setSelectedCheckboxes(allCheckboxes);
    };
    const handleCheckboxChange = (key) => {
    setSelectedCheckboxes((prevCheckboxes) => {
      if (prevCheckboxes.includes(key)) {
        return prevCheckboxes.filter((checkboxKey) => checkboxKey !== key);
      } else {
        return [...prevCheckboxes, key];
      }
    });
  };
    return ( 
        <Menu style={{backgroundColor:'rgba(38, 38, 38, 0.75)'}}>
          <Menu.Item key="option1" style={{height: '30px', lineHeight: '30px' , backgroundColor:'#92aa79', color:'#20467d',fontSize:'12px', fontWeight:'bold'}}>Capella</Menu.Item>
            <div style={{marginLeft: '10px' }}>
        <Checkbox key='1' checked={selectedCheckboxes.includes('1')} onChange={() => handleCheckboxChange('1')}>Capella 06</Checkbox>
        <Checkbox key='2' checked={selectedCheckboxes.includes('2')} onChange={() => handleCheckboxChange('2')}>Capella 07</Checkbox>
        <Checkbox key='3' checked={selectedCheckboxes.includes('3')} onChange={() => handleCheckboxChange('3')}>Capella 08</Checkbox>
        <Checkbox key='4' checked={selectedCheckboxes.includes('4')} onChange={() => handleCheckboxChange('4')}>Capella 09</Checkbox>
        <Checkbox key='5' checked={selectedCheckboxes.includes('5')} onChange={() => handleCheckboxChange('5')}>Capella 10</Checkbox>
            </div>
          <Menu.Item key="option2" style={{height: '30px', lineHeight: '30px' ,backgroundColor:'#92aa79', color:'#20467d',fontSize:'12px', fontWeight:'bold'}}>COSMO-skymed</Menu.Item>
            <div style={{marginLeft: '10px' }}>
            <Checkbox key='6' checked={selectedCheckboxes.includes('6')} onChange={() => handleCheckboxChange('6')}>SKYMED 1</Checkbox>
        <Checkbox key='7' checked={selectedCheckboxes.includes('7')} onChange={() => handleCheckboxChange('7')}>SKYMED 2</Checkbox>
        <Checkbox key='8' checked={selectedCheckboxes.includes('8')} onChange={() => handleCheckboxChange('8')}>SKYMED 3</Checkbox>
        <Checkbox key='9' checked={selectedCheckboxes.includes('9')} onChange={() => handleCheckboxChange('9')}>SKYMED 4</Checkbox>
            </div>
          <Menu.Item key="option3" style={{height: '30px', lineHeight: '30px' ,backgroundColor:'#92aa79', color:'#20467d',fontSize:'12px', fontWeight:'bold'}}>TerraSar</Menu.Item>
            <div style={{marginLeft: '10px' }}>
            <Checkbox key='10' checked={selectedCheckboxes.includes('10')} onChange={() => handleCheckboxChange('10')}>TerraSar</Checkbox>
            </div>
          <Menu.Item key="option4" style={{height: '40px', lineHeight: '40px', justifycontent: 'center', alignItems: 'center'}}>
            
            <Button size='medium' style={{width: '110px', left: '10px', backgroundColor:'#85950b', color:'#fff',justifycontent: 'center'}}
            onClick={handle_onClick_SELECT_ALL}>SELECT_ALL
            </Button>
            <Button size='medium' style={{width: '110px', left: '60px', backgroundColor:'#85950b', color:'#fff',justifycontent: 'center', alignItems: 'left'}}
            onClick={handle_onClick_APPLY}
            >APPLY
            </Button>
          </Menu.Item>
        </Menu>
    );
}
export default Menu_select_radar