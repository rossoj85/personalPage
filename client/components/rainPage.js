import React, { Component } from 'react';
import {Sketch1, Navbar} from './index';
import P5Wrapper from 'react-p5-wrapper';


export default class RainPage extends Component {

    
    render(){
         
        return(
            <div>
               <h1>Rain WIll Go Here</h1>
               <P5Wrapper sketch={Sketch1} />
            </div>

        )
    }
}