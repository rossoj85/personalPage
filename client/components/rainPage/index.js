import React, { Component } from 'react';
import {Navbar} from './index';
import {default as PurpleRain} from './purpleRain';
import {default as Matrix} from './matrix';
import P5Wrapper from 'react-p5-wrapper';
//dsfsa
//scenery
const newYork = "https://bagelbrothersofny.com/wp-content/uploads/2016/02/skyline.png"
const london = "http://i.imgur.com/utq4e4V.png"

export default class RainPage extends Component {
    constructor(props){
        super(props)
        this.state={
            city: newYork
        }
    }
    
    render(){
        console.log('RaInPage Props#@$@#$@',this.props)
        console.log(document)
        let navbar = document.getElementById('navbar')
        console.log(navbar)
        console.log(document.getElementById('frame'))
        return(

            <div style={{margin:'auto', textAlign:'center'}}>
            <h1 >RaiN</h1>

        <div>
            <img src='/photos/longArtFrame.png' id="frame"
            />
         
            <div id="sceneWrapper">
     
             <P5Wrapper id="rainWindow" sketch={Matrix} />
            <img src={this.state.city} id="cityScape"
             style={{/*height: '300px', width: '1200px', 
        /position: 'absolute',bottom: '-5px',zIndex: '50'*/}}/>
        
            </div>
        </div>

        <div id="rainVariation">
         <h2 onClick={()=>this.setState({city: newYork})}>New York</h2>
         <h2 onClick={()=>this.setState({city: london})}>London</h2>
        </div>
           
         </div>
            /*
            <div style={{margin:'auto'}}>
               <h1 >RaiN</h1>
               <img src='/photos/longArtFrame.png' id="frame"/>
            
               <div id="sceneWrapper">
        
                <P5Wrapper id="fullRainWindow" sketch={PurpleRain} />
                <img src={this.state.location} 
                style={{height: '300px', width: '1200px', 
                            position: 'absolute',bottom: '-5px',zIndex: '50'}}/>
               </div>
        
            
            </div>
        */
           
        )
    }
}