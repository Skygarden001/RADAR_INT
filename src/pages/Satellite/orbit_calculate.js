function get_tle_czml(filePath) {
    const positions = [];
    const startTime = new Date();
    const timeDelta =  24*60*60*1000; // Time increment in milliseconds
    const endTime = new Date(startTime.getTime() +  timeDelta);
    
    const numPoints = 300; 
    const timeIncrement = timeDelta/numPoints
    
    const combinedData = [];
    var czmlDoc = {
      id: "document",
      name: "con cac",
      version: "1.0",
      clock: {
          interval: startTime.toISOString() + "/" + endTime.toISOString(),
          currentTime: startTime,
          multiplier: 60,
          range: "LOOP_STOP",
          step: "SYSTEM_CLOCK_MULTIPLIER"
      }
    };
    
    // const jsonData = JSON.parse(data);
    combinedData.push(czmlDoc);
    // Đọc nội dung tệp tin
      data = fs.readFileSync(filePath, 'utf8');
      const data_tle = data.trim().split('\r\n');
      for(let j =0; j< data_tle.length; j+=3)
      {
        const name = data_tle[j+0].trim();
        const line1 = data_tle[j+1].trim();
        const line2 = data_tle[j+2].trim();
  
        const satelliteRec = satellite.twoline2satrec(line1, line2);
   
        var satellitePacket = {
          id: name,
          name: name,
          availability: startTime.toISOString() + "/" + endTime.toISOString(),
          billboard: {
            eyeOffset: {
              cartesian: [
                0,
                0,
                0
              ]
            },
            horizontalOrigin: "CENTER",
            image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADJSURBVDhPnZHRDcMgEEMZjVEYpaNklIzSEfLfD4qNnXAJSFWfhO7w2Zc0Tf9QG2rXrEzSUeZLOGm47WoH95x3Hl3jEgilvDgsOQUTqsNl68ezEwn1vae6lceSEEYvvWNT/Rxc4CXQNGadho1NXoJ+9iaqc2xi2xbt23PJCDIB6TQjOC6Bho/sDy3fBQT8PrVhibU7yBFcEPaRxOoeTwbwByCOYf9VGp1BYI1BA+EeHhmfzKbBoJEQwn1yzUZtyspIQUha85MpkNIXB7GizqDEECsAAAAASUVORK5CYII=",
            pixelOffset: {
              cartesian2: [
                0,
                0
              ]
            }
          }, 
          scale: 1,
          show: true,
          verticalOrigin: "CENTER",
          label: {
            fillColor: {
              rgba: [
                255,
                0,
                255,
                255
              ]
            },
            font: "9pt Lucida Console",
            horizontalOrigin: "LEFT",
            outlineColor: {
              rgba: [
                0,
                0,
                0,
                255
              ]
            },
            outlineWidth: 2,
            pixelOffset: {
              cartesian2: [
                12,
                0
              ]
            },
            show: true,
            style: "FILL_AND_OUTLINE",
            text: name,
            verticalOrigin: "CENTER"
          },
          path:{
            show:[
             {
              interval: startTime.toISOString() + "/" + endTime.toISOString(),
              boolean: true
             } 
            ],
            width:1,
            material:{
              solidColor:{
                color:{
                  rgb:[0,255,0,255]
                }
              }
            },
            resolution:120,
            leadTime:[
              {
                interval: startTime.toISOString() + "/" + endTime.toISOString(),
                epoch: startTime.toISOString(),
                number: [
                  0,5903.376977238004,
                  5903.376977238004,0
                 ]
              }
            ]
          },
          position: {
            interpolationAlgorithm: "LAGRANGE",
            interpolationDegree: 5,
            referenceFrame: "INERTIAL",
            epoch: startTime,
            cartesian: []
          }
        }; 
        
        for (let i = 0; i < numPoints; i++) {
          _time = timeIncrement*i;
          var positionAndVelocity = satellite.propagate(satelliteRec, new Date(startTime.getTime() + _time));
          //   const gmst = satellite.gstime(time);
          satellitePacket.position.cartesian.push(
            _time/1000.0,
            positionAndVelocity.position.x * 1000,
            positionAndVelocity.position.y * 1000,
            positionAndVelocity.position.z * 1000
      
          );
        }
        combinedData.push(satellitePacket);
      }
      return combinedData;
  }
  export default get_tle_czml(filePath);