import {twoline2satrec, propagate } from 'satellite.js'
import { Context_Sat } from '../../store/Context';
import { useContext, useState } from 'react';
function get_tle_czml(file_tle, orbit) {
    const positions = [];
    const startTime = new Date();
    const timeDelta =  24*60*60*1000; // Time increment in milliseconds
    const endTime = new Date(startTime.getTime() +  timeDelta);
    const numPoints = 300; 
    const timeIncrement = timeDelta/numPoints
    const orbit_color = [ {CAPELLA: [255, 0, 0, 255]}, {USA: [0, 0, 255, 255]}, {SKYMED: [0, 255, 1, 255]}, {CSG: [0, 255, 1, 255]}, {UMBRA: [255, 255, 0, 255]} ]
    var combinedData = [];
    var czmlDoc = {
      id: "document",
      name: "con cac",
      version: "1.0",
      clock: {
          interval: startTime.toISOString() + "/" + endTime.toISOString(),
          currentTime: startTime.toISOString(),
          multiplier: 60,
          range: "LOOP_STOP",
          step: "SYSTEM_CLOCK_MULTIPLIER"
      }
    };
    console.log(orbit)
    // const jsonData = JSON.parse(data);
    combinedData.push(czmlDoc);
    // Đọc nội dung tệp tin
      const data_tle = file_tle.trim().split('\r\n');   
      if (data_tle && Array.isArray(data_tle)) {
      for(let j =0; j< data_tle.length; j+=3)
      { 
        const name = data_tle[j+0].trim();
        const constellation = name.match(/\b\w+\b/g)[0] ; // check constelation
        var rgb;
        if (constellation) {
          const orbitItem = orbit_color.find(item => constellation in item);
          rgb = orbitItem ? orbitItem[constellation] : [255, 255, 255, 255];
        } else {
          rgb = [255, 255, 255, 255];
        }  
        const line1 = data_tle[j+1].trim();
        const line2 = data_tle[j+2].trim();
        const satelliteRec = twoline2satrec(line1, line2);
        const periodMinutes = ((2 * Math.PI) / satelliteRec.no)*60;
        var periods  = Math.floor(24 * 60 * 60 / periodMinutes) //one cycle
        var leadTime_ = []
        var trailTime_ = []
         for (let k=0; k< (periods); k++)
         {
          var lead_time = {
          interval: (new Date(startTime.getTime() +  k*periodMinutes*1000)).toISOString() + "/" + (new Date(startTime.getTime() +  (k+1)*1000*periodMinutes)).toISOString(),
          epoch: (new Date(startTime.getTime() +  k*periodMinutes*1000)).toISOString(),
          number: [
            0,periodMinutes,
            periodMinutes,0
           ]
        } 
        var trailTime = {
          interval: (new Date(startTime.getTime() +  k*periodMinutes*1000)).toISOString() + "/" + (new Date(startTime.getTime() +  (k+1)*1000*periodMinutes)).toISOString(),
          epoch: (new Date(startTime.getTime() +  k*periodMinutes*1000)).toISOString(),
          number: [
            0,0, periodMinutes,
            periodMinutes
           ]
        }
        leadTime_.push(lead_time)
        trailTime_.push(trailTime)
         } 
         leadTime_.push({
          interval: (new Date(startTime.getTime() +  (periods)*1000*periodMinutes)).toISOString() + "/" + (new Date(endTime.getTime())).toISOString(),
          epoch: (new Date(startTime.getTime() +  (periods)*1000*periodMinutes)).toISOString(),
          number: [
            0,periodMinutes,
            periodMinutes,0
           ]
          
         })
         trailTime_.push({
          interval: (new Date(startTime.getTime() +  (periods )*1000*periodMinutes)).toISOString() + "/" + (new Date(endTime.getTime())).toISOString(),
          epoch: (new Date(startTime.getTime() +  (periods )*1000*periodMinutes)).toISOString(),
          number: [
            0,0,periodMinutes,
            periodMinutes
           ]
          
         })
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
                255,
                255,
                255
              ]
            },
            font: "9pt Lucida Console",
            horizontalOrigin: "LEFT",
            outlineColor: {
              rgba: rgb
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
              boolean: orbit,
             } 
            ],
            width:1,
            material:{
              solidColor:{
                color:{
                  rgba:rgb
                }
              }
            },
            resolution:20,
            // leadTime:[ {
            //   interval: startTime.toISOString() + "/" + endTime.toISOString(),
            //   epoch: startTime.toISOString(),
            //   number: [
            //     0,periodMinutes,
            //     periodMinutes,0
            //    ]
              
            //  }],

            leadTime: leadTime_,
            trailTime: trailTime_
            
          },
          position: {
            interpolationAlgorithm: "LAGRANGE",
            interpolationDegree: 5,
            referenceFrame: "INERTIAL",
            epoch: startTime.toISOString(),
            cartesian: []
          }
        }; 
        try 
        { // SyntaxError

        for (let i = 0; i < numPoints; i++) {
          var _time = timeIncrement*i;
          var positionAndVelocity = propagate(satelliteRec, new Date(startTime.getTime() + _time));
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
      catch (e) 
        {console.log(e);}
      }
        return combinedData     
    }  
  }
  
  export default get_tle_czml;