import { useEffect,useState } from "react";

function Uploadfile() {
const [selectfile, setselectfile] = useState(null);
const value = selectfile.value;
const handleFile = (e) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsText(file, "UTF-8");
    fileReader.onload = e => {
        setselectfile(e.target.result)
    }
    
} 
    return ( 
        <div>
            <input type ="file"
             onChange = {handleFile}/>
            <h1>{selectfile}</h1>
        </div>

     );
}

export default Uploadfile;