import React, {useState} from "react";
 
  function FileUpload({file_tle}) {
    const getFile = (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const content = e.target.result;
          file_tle(content);
        };
        reader.readAsText(file);
        
      }
    };

    return (
      <>
      {/* <input type="file" onChange = {getFile} id="upload" hidden/>
       <label title='Import file json'
       htmlFor="upload" 
       > 
           Upload TLE
       </label> */}
        <input type="file" name="file" onChange={getFile} required />
      </>
    );
  }
export default FileUpload;