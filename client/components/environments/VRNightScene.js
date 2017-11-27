import 'aframe';
import 'aframe-particle-system-component';
import React, {Component} from 'react';
import {arrayOfArt} from './paintings';

export default class VRNightScene extends Component{

  componentWillUnmount(){
    console.log("UNMOUNT HIT")
    window.location.reload()
  }
    render(){
    
    const pedPositions = ["6.75 .7 0", "3 .7 6.2", "-2.644 .7 6.353", "-6.619 .7 0", "-2.862 .7 -5.734", "3.000 .7 -6.108"];
    const boxPositions = ["6.75 1.8 0", "3 1.8 6.2", "-2.644 1.8 6.353", "-6.619 1.8 0", "-2.862 1.8 -5.734", "3.000 1.8 -6.108"];
    const textPositions = ["6.75 3 0", "3 3 6.2", "-2.644 3 6.353", "-6.619 3 0", "-2.862 3 -5.734", "3.000 3 -6.108"]
    const textRotations = ["0 -90 0", "0 -145 0", "0 -215 0", "0 -270 0", "0 -335 0", "0 -35 0"];
    const ghostPositions = ["10 6 0", "-10 6 0", "0 6 10", "0 6 -10", "10 12 0", "-10 12 0", "0 12 10", "0 12 -10"];
    const ghostRotations = ["0 -90 0", "0 90 0", "0 180 0", "0 0 0", "30 90 0", "30 -90 0", "30 90 0", "30 -90 0"];
    const agavePositions = new Array(40).fill()
    let paintings = arrayOfArt;

    const circutBoard = 'https://ucarecdn.com/cbef09b9-d5dc-4402-a8b8-ba64210d9283/';
    const nightScape = 'https://cdn.aframe.io/360-image-gallery-boilerplate/img/sechelt.jpg';
    const groundTexture = 'https://cdn.aframe.io/a-painter/images/floor.jpg';
    const cyberRust = 'https://ucarecdn.com/90bc2baf-a4c1-4237-b00c-a75f9db0b45a/';
    const marbleTexture = 'https://ucarecdn.com/1b213dc4-386d-4978-8fe5-9b021b23c945/';
    return (

      paintings ?
        <a-scene>
          <a-assets>
            <a-asset-item id="ghost-obj" src="/models/ghost/model.obj" />
            <a-asset-item id="ghost-mtl" src="/models/ghost/materials.mtl" />
            <a-asset-item id="pumpkin-obj" src="/models/pumpkin/pumpkin.obj" />
            <a-asset-item id="pumpkin-mtl" src="/models/pumpkin/pumpkin.mtl" />
            <a-asset-item id="pineTree-obj" src="/models/pinetree/pineTree.obj" />
            <a-asset-item id="pineTree-mtl" src="/models/pinetree/pineTree.mtl" />
          </a-assets>
            <a-sphere src={cyberRust} position="5 12.82 -37.6" radius="1.25" />
            <a-dodecahedron src={circutBoard} position= "-1 13 -32"  />
            <a-torus-knot src={cyberRust} position ="-5 2 -14"  />


            { ghostPositions.map((image, index) => {
                  let ghostDirection;
                  if (index < 4){
                    ghostDirection = '0 360 0';
                  } else {
                    ghostDirection = '0 -360 0';
                  }
                    return (
                      <a-entity key={index} position="0 0 0">
                        <a-animation
                          attribute="rotation"
                          dur="50000"
                          fill="forwards"
                          to={ghostDirection}
                          repeat="indefinite" />
                        <a-entity obj-model="obj:#ghost-obj;mtl:#ghost-mtl" position={ghostPositions[index]} rotation={ghostRotations[index]} />
                      </a-entity>

            );
          })
        }

            { paintings && paintings.map((image, index) => {
                    if (index < 6){
                        return (
                          <a-text value={image.name} align="center" position={textPositions[index]} rotation={textRotations[index]} color="white" />
                        );
                    }
                })
            }

            
            { paintings && paintings.map((image, index) => {
                  if (index < 6){
                        return (
                          <a-cylinder src={marbleTexture} position={pedPositions[index]} rotation="0 0 0" scale=".3 1.2 .3" />
                        );
                      }
                    })
            }

            { paintings && paintings.map((image, index) => {
                        if (index < 6){
                        return (
                            <a-entity id={`painting${index}`} geometry={{primative: 'box'}} material={`src: ${paintings[index]}`} position={boxPositions[index]} rotation="0 90 0">
                              <a-animation
                                attribute="rotation"
                                dur="10000"
                                fill="forwards"
                                to="0 -360 0"
                                repeat="indefinite" />
                            </a-entity>
                      );
                    }
                  }
                )
            }
            {/*PINE TREES */}
            <a-entity
              obj-model="obj:#pineTree-obj;mtl:#pineTree-mtl"
              position="-2 12 -16.5" scale="4 7 4" />
            <a-entity
              obj-model="obj:#pineTree-obj;mtl:#pineTree-mtl"
              position="18 12 0" scale="4 7 4" />
            <a-entity
              obj-model="obj:#pineTree-obj;mtl:#pineTree-mtl"
              position="24 12 14" scale="4 7 4" />
            <a-entity
              obj-model="obj:#pineTree-obj;mtl:#pineTree-mtl"
              position="-24 12 0" scale="4 7 4" />
            <a-entity
              obj-model="obj:#pineTree-obj;mtl:#pineTree-mtl"
              position="-24 12 23" scale="4 7 4" />
            <a-entity
              obj-model="obj:#pineTree-obj;mtl:#pineTree-mtl"
              position="0 12 30" scale="4 7 4" />

            {/*FLOOR AND SKY*/}
            
            <a-plane src={groundTexture} position="0 0 -4" rotation="-90 0 0" width="90" height="90" repeat="10 10"  />

            <a-sky src= {nightScape} />
            <a-entity camera="userHeight: 2.9" look-controls wasd-controls>
              <a-entity
              /*cursor="fuse: true; fuseTimeout: 1500"
              id="cursor" position="0 0 -2" geometry="primitive: ring; radiusOuter: 0.08; radiusInner: 0.05" material="color: white" */>
                <a-animation
                  begin="click"
                  easing="ease-in" attribute="scale" dur="150"
                  fill="forwards" from="0.1 0.1 0.1" to="1 1 1" />
                <a-animation
                  begin="cursor-fusing"
                  easing="ease-in" attribute="scale" dur="1500"
                  fill="backwards" from="1 1 1" to="0.1 0.1 0.1" />
            </a-entity>
          </a-entity>
          </a-scene>
          :
          null
    );

  }

}


