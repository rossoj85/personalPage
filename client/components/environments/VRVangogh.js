import 'aframe';
import 'aframe-particle-system-component';
import {Entity, Scene} from 'aframe-react';
import React, {Component} from 'react';
import {arrayOfArt} from './paintings';
import {ProgressBar} from 'react-bootstrap';

export default class VRVangogh extends Component{
  constructor(props){
    super(props)
      this.state ={
        loading: true,
      }
    
  }
  componentWillUnmount(){
    console.log("UNMOUNT HIT")
    window.location.reload()
  }
        render(){
          const paintings=arrayOfArt;
          var snowyGround= '/photos/snowyground.jpg';
          console.log(paintings)

            return(
              //Loading Screen
              <div>
              <div id='splash'>
              <h2>Loading Scene...</h2>
              <img className='loading' src={'/photos/circleRainbowLoad.gif'} />
             </div>
                 
             <Scene>

             <a-assets>
             
             <a-asset-item id="room" src="/models/vangogh/room.obj"></a-asset-item>
             <a-asset-item id="room-mtl" src="/models/vangogh/room.mtl"></a-asset-item>
             <a-asset-item id="starryNight" src="/models/vangogh/untitled-scene.obj"></a-asset-item>
             <a-asset-item id="starryNight-mtl" src="/models/vangogh/untitled-scene.mtl"></a-asset-item>  
            
             </a-assets>
 
          
             <a-entity
               obj-model="obj: url(/models/vangogh/untitled-scene.obj); mtl:url(/models/vangogh/untitled-scene.mtl)"
               position="0 -45 -60" scale="50 50 50"
               rotation="0 180 0" />
 
             <a-entity
               obj-model="obj:#room; mtl:#room-mtl"
               position="0 0 -6" scale="1 1 1" />
             
             
             <a-entity geometry="primitive: sphere; radius: 30" 
             material={'src: /photos/saturnTexture.jpg'}
             position="-130 50 -100">
             <a-ring material={'src: /photos/ringTexture.jpg'} 
             radius-inner="40" 
             radius-outer="60"
             rotation='-45çç 0 0'/>
 
             </a-entity>   
 
          
           <a-entity geometry="primitive: sphere; radius: 60" 
           material={'src: /models/jupiter/jupiterTexture.jpg'}
           position="130 20 0">
          </a-entity>
 
                 <a-sky src='/models/vangogh/sky/milkyWay.png' />
                 <a-plane src={snowyGround} position="0 -2 -4" rotation="-90 0 0" width="90" height="90" repeat="10 10"  />
                 {/* <Entity particle-system={{preset: 'snow'}} /> */}
                 {
                   paintings.length >= 1 &&
                   <a-curvedimage
                     position="0 3 -23"
                     rotation="0 150 0"
                     height="3.0"
                     radius="4.0"
                     theta-length="60"
                     src={paintings[0]} />
                 }
                 {
                   paintings.length >= 2 &&
                   <a-curvedimage
                     position="12 3 -23"
                     rotation="-12 150 0"
                     height="3.0"
                     radius="4.0"
                     theta-length="60"
                     src={paintings[1]} />
                 }
                 {
                   paintings.length >= 3 &&
                   <a-curvedimage
                       position="-12 3 -23"
                       rotation="0 150 0"
                       height="3.0"
                       radius="4.0"
                       theta-length="60"
                       src={paintings[2]} />
                 }
 
                 {
                   paintings.length >= 4 &&
                   <a-curvedimage
                       position="0 3 20"
                       rotation="0 330 0"
                       height="3.0"
                       radius="4.0"
                       theta-length="60"
                       src={paintings[3]} />
                 }
 
                 {
                   paintings.length >= 5 &&
                   <a-curvedimage
                       position="12 3 20"
                       rotation="0 330 0"
                       height="3.0"
                       radius="4.0"
                       theta-length="60"
                       src={paintings[4]} />
                 }
 
                 {
                   paintings.length >= 6 &&
                   <a-curvedimage
                     position="-12 3 20"
                     rotation="0 330 0"
                     height="3.0"
                     radius="4.0"
                     theta-length="60"
                     src={paintings[5]} />
                 }
 
                 
                 {/* <a-entity camera="userHeight: 1.6" look-controls wasd-controls position='0 0 -9'></a-entity> */}
                 
                 {/* Just a comment */}
                 <Entity camera position='0 0 0' look-controls wasd-controls></Entity>

              

             </Scene>
              </div>
            
            );
        }
    }
    