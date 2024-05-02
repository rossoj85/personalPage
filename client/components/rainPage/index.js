import React, { Component } from 'react';
import {Navbar} from './index';
import {default as PurpleRain} from './purpleRain';
import {default as MatrixRain} from './matrix';
import P5Wrapper from 'react-p5-wrapper';
// import '../../../public/photos/New-York-City-Skyline.png'

//dsfsa
//scenery
// const newYork = "https://bagelbrothersofny.com/wp-content/uploads/2016/02/skyline.png"
 const newYork  = "/photos/New-York-Skyline.png"
 const london = "http://i.imgur.com/utq4e4V.png"

const prague = "/photos/prague.jpg"
const neonMetropolis = "/photos/neonMetropolis.jpg"

export default class RainPage extends Component {
    constructor(props){
        super(props)
        this.state={
            city: newYork,
            rainType: PurpleRain
        }
    }
    
    render(){
        // console.log('RaInPage Props#@$@#$@',this.props)
        console.log(document)
        console.log('newYork',newYork);
       
        console.log(document.getElementById('frame'))
        console.log('RAInPage State',this.state);
        return(

        <div className = "rainContainer" >
            <h1 >RaiN</h1>

            <div className="frameWrapper">
                <img src='/photos/longArtFrame.png' className="frame" />
                {/* <div className="frameWrapperChild"></div> */}
                <P5Wrapper id="rainWindow" className="frameWrapperChild" sketch={this.state.rainType} />
                <img src={this.state.city} className="cityScape" />
            
            </div>

            <div className="rainControls">
                <div className='citySelect'>
                    <h2>City Select</h2>
                    <h3 onClick={()=>this.setState({city: newYork})}>New York</h3>
                    <h3 onClick={()=>this.setState({city: london})}>London</h3>
                    

        

                </div>

                <div className='rainType'>
                    <h2>Rain Select</h2>
                    <h3 onClick={()=>this.setState({rainType: MatrixRain})}>Matrix Rain</h3>
                    <h3 onClick={()=>this.setState({rainType: PurpleRain})}>Purple Rain</h3>
                </div>
            </div>
        </div>
        // Remove unnecessary closing </div> tags
        // </div>
        // </div>
           
           
        )
    }
}


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