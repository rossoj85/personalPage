import React, { Component } from 'react';
import {Navbar} from './index';
import {default as PurpleRain} from './purpleRain';
import P5Wrapper from 'react-p5-wrapper';



    const newYork = "https://bagelbrothersofny.com/wp-content/uploads/2016/02/skyline.png"
    const london = "http://i.imgur.com/utq4e4V.png"
export default class RainPage extends Component {
    constructor(props){
        super(props)
        this.state={
            location: newYork
        }
    }
    
    


    render(){
        console.log(this.state.location)
        return(
            <div style={{margin:'auto'}}>
               <h1 >RaiN</h1>
               
               <div id="sceneWrapper">
               <P5Wrapper id="rainWindow" sketch={PurpleRain} />
               <img src={this.state.location} 
               style={{height: '300px', width: '1200px', 
                        position: 'absolute',bottom: '-5px',zIndex: '50'}}/>
               </div>

            </div>

        )
    }
}