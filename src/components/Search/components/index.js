import { Checkbox } from 'antd';
function App(){
  const onChange_capella = (e) => {
  console.log(`checked = ${e.target.checked}`);
};
const onChange_COSMOSKYMED = (e) => {
  console.log(`checked = ${e.target.checked}`);
};
const onChange_TerraSAR = (e) => {
  console.log(`checked = ${e.target.checked}`);
};
<Checkbox onChange={onChange_capella}>Capella</Checkbox>;
<Checkbox onChange={onChange_COSMOSKYMED}>COSMOSKYMED</Checkbox>;
<Checkbox onChange={onChange_TerraSAR}>TerraSAR</Checkbox>;
}
export default App;