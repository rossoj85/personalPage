import 'aframe';
import 'aframe-particle-system-component';
import {Entity, Scene} from 'aframe-react';
import React from 'react';


export default function VRDesert(props){
      
        const paintings = [];
        const desert = 'https://ucarecdn.com/39f58506-1bfa-4464-b66e-c356292be9c8/';
        const groundTexture = 'https://cdn.aframe.io/a-painter/images/floor.jpg';
        
   
        return (
            paintings ?
            <Scene>
        
            <a-assets>
            <a-asset-item id="daliClock-obj" src="/models/daliClock/memory.obj" />
            <a-asset-item id="daliClock-mtl" src="/models/daliClock/memory.mtl" />

            <a-asset-item id="marcus-obj" src="/models/marcus/MarcusAurelius.obj" />>
            <a-asset-item id="piggy-obj" src="/models/piggy/piggy.obj" />

            </a-assets>
        
                {/*DALI TREES*/}
                <a-entity
                  obj-model="obj:#daliClock-obj;mtl:#daliClock-mtl"
                  position ="-16.6 2.44 -25"
                  rotation="-70 270 0" scale=".25 .25 .65"
                />
                <a-entity
                  obj-model="obj:#daliClock-obj;mtl:#daliClock-mtl"
                  position ="23 2 -30"
                  rotation="-70 90 0" scale=".25 .25 .65"
                />

                {/*ROTATING PIGS*/}

               <a-entity obj-model="obj:#piggy-obj" scale="1 1 1" position="8 5 -12" material="color:pink">
               <a-animation
                 attribute="rotation"
                 easing="linear"
                 dur="3000"
                 fill="backwards"
                 to="0 360 0"
                 repeat="indefinite" />
               </a-entity>

               <a-entity obj-model="obj:#piggy-obj" scale="1 1 1" position="-7 5 -12" material="color:pink">
               <a-animation
                 attribute="rotation"
                 easing="linear"
                 dur="5000"
                 fill="forwards"
                 to="0 360 0"
                 repeat="indefinite" />
               </a-entity>

               {/*PAINTINGS */}
               {paintings[0] ?
                <Entity geometry={{primitive: 'box'}} material={{src: paintings[0].url}} position="-7 10 -25" rotation="0 90 0" scale="2 2 2" />
                :
                null

            }
            {paintings[1] ?
                <Entity geometry={{primitive: 'box'}} material={{src: paintings[1].url}} position="7 10 -25" rotation="0 90 0" scale="2 2 2" />
                :
                null

            }
            {paintings[2] ?
                <Entity geometry={{primitive: 'box'}} material={{src: paintings[2].url}} position="16 6 -40" rotation="0 90 0" scale="8 8 8" />
                :
                null

            }
            {paintings[3] ?
                <Entity geometry={{primitive: 'box'}} material={{src: paintings[3].url}} position="-9 0 -7" rotation="0 90 0" scale="2 2 2" />
                :
                null

            }
            {paintings[4] ?
                <Entity geometry={{primitive: 'box'}} material={{src: paintings[4].url}} position="9 0 -7" rotation="0 90 0" scale="2 2 2" />
                :
                null

            }
            {paintings[5] ?
                <Entity geometry={{primitive: 'box'}} material={{src: paintings[5].url}} position="180 40 -100" rotation="0 90 0" scale="40 40 40" />
                :
                <h1>NO RENDER BECAUE PAINTINGS NOT BOUND</h1>

            }

               
                <a-entity obj-model="obj:#marcus-obj" position="0 5 -25" scale="22 22 22" src="/MarcusAureliusTexture.jpg" />
                <a-sky src={desert}  />
                <a-plane src={groundTexture} position="0 -2 -4" rotation="-90 0 0" width="90" height="90" repeat="10 10"  />


                <a-entity camera="userHeight: 2" look-controls wasd-controls>
                    <a-entity 
                    cursor="fuse: true; fuseTimeout: 1500"
                    id="cursor" position="0 0 -2" geometry="primitive: ring; radiusOuter: 0.08; radiusInner: 0.05" material="color: white">
                        <a-animation
                          begin="click"
                          easing="ease-in"
                          attribute="scale"
                          dur="150"
                          fill="forwards" from="0.1 0.1 0.1" to="1 1 1" />
                        <a-animation
                          begin="cursor-fusing"
                          easing="ease-in"
                          attribute="scale"
                          dur="1500"
                          fill="backwards" from="1 1 1" to="0.1 0.1 0.1" />
                    </a-entity>
                </a-entity>
            </Scene>
            :
            null
        );

}


