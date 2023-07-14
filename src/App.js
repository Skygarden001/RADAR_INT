import Earth from "./pages/Earth/Earth";
import styles from './App.scss';
import classNames from 'classnames/bind';
import Radar from "./pages/Radar/Radar";
import Satellite from "./pages/Satellite/Satellite"
import Launch from  "./pages/Launch/Launch"
import Int from "./pages/Int/Int"
import Uploadfile from "./components/Uploadfile/Uploadfile";
let cx = classNames.bind(styles)
function App() {
  return (
    <>
    <Earth/>
    <Radar/>
    <Satellite/>
    <Launch/>
    <Int/>
    <Uploadfile/>
    </>
   );
}
export default App;

