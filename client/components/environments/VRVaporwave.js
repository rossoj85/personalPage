import 'aframe';
import {Entity, Scene} from 'aframe-react';
import React, {Component} from 'react';
import {arrayOfArt} from './paintings';



export default class VRVaporwave extends Component{
      
    componentWillUnmount(){
        console.log("UNMOUNT HIT")
        window.location.reload()
      }

    render(){
        const pinkgrid = "/photos/pinkgrid.svg"
        const intensePinkGrid ="https://ak5.picdn.net/shutterstock/videos/15813655/thumb/1.jpg–"
        const pinkSky = "/photos/pinkSky.jpg"
        const retrowaveTex = '/photos/retrowaveTex.png'
        const retrowaveSun = '/photos/retrowaveSun.jpg'
        const billboardText ='/models/bilboard/Billboard texture.png' 
        return (
     
            <Scene>
            <a-assets>
                <a-asset-item id="cityscape-obj" src='/models/cityscape/model.obj' />
                <a-asset-item id="cityscape-mtl" src='/models/cityscape/materials.mtl' />
                <a-asset-item id="palmTree-obj" src='/models/palmTree/model.obj' />
                <a-asset-item id="palmTree-mtl" src='/models/palmTree/materials.mtl' />
            </a-assets>

            {/*Scyscrapers*/}
            <a-entity obj-model='obj:#cityscape-obj;mtl:#cityscape-mtl' scale='40 30 20' position= '0 31 -150' rotation = '0 270 0' />
            {/*Sun*/}
            <a-entity geometry={{primative: 'box'}} material ={`src: ${retrowaveSun}`} position = '0 47 272' scale ='200 200 1'/>
            

            <a-entity obj-model='obj: #palmTree-obj;mtl:#palmTree-mtl' scale='10 10 10' position= '-15 0 -30' />

            <a-plane src={pinkgrid} position="0 0 -1" rotation="-90 0 0" width="500" height="500" repeat="10 10"  ></a-plane>
            <a-sky src={pinkSky} rotation="0 -90 0"></a-sky>
            </Scene>
           
        );
    }

}