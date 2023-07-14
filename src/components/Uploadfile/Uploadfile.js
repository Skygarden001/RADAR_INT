import styles from '../../App.scss';
import classNames from 'classnames/bind';
import { GeoJsonDataSource, Viewer, CameraFlyTo } from 'resium';
import { Cartesian3 } from "cesium";
import { Button, Space, Tooltip } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faShuttleSpace } from '@fortawesome/free-solid-svg-icons';
// Add the desired icons to the library
let cx = classNames.bind(styles)
function Uploadfile() {
const [selectfile, setselectfile] = useState(null);
const handleFile = (e) => {
    const file = e.target.files[0];

    if (file) {
        const fileReader = new FileReader();
        fileReader.onload = (e) => {
            const content = e.target.result;
            let parsedFile;

            try {
                parsedFile = JSON.parse(content);
                // Process the parsed file
                // ...
                console.log(parsedFile);
            } catch (error) {
                console.error("Invalid file format");
            }
            setselectfile(parsedFile)
        };
        fileReader.readAsText(file, "UTF-8");
        
    }
};

    return ( 
    //     <button 
    //     className={cx( 'select_toolbar_button','select_button','button_upfilejson')} 
    //     title='import file json'
    //     onClick={handleFile}>  
    //    <FontAwesomeIcon icon={faArrowUpFromBracket } rotation={270} size="xl" style={{color: "#dde1e9",}} />
    //   </button>
    
        < div className={cx( 'select_toolbar_button','select_button','button_upfilejson')}  >
            <input type="file" onChange = {handleFile} id="upload" hidden/>
            <label title='Import file json'
            For="upload" 
            > 
                <FontAwesomeIcon icon={faArrowUpFromBracket } rotation={0} size="xl" style={{color: "#dde1e9",}} /> 
            </label>
        </div>
        
     );
}

export default Uploadfile;