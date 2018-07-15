import React, {Component} from 'react';
import {default as Matrix} from './matrix';
import ScrollableAnchor from 'react-scrollable-anchor';
import P5Wrapper from 'react-p5-wrapper';


export default class About extends Component{
    constructor() {
        super();
        this.state = {
          width:  window.innerWidth,
          height: window.innerHeight
        }
        this.updateDimensions=this.updateDimensions.bind(this)
      }
        componentDidMount(){
            console.log("Landing Page mounted")
            window.addEventListener('resize', this.updateDimensions)
        }

        updateDimensions(){
            this.setState({
                width: window.innerWidth,
                height: window.innerHeight
            })
            console.log('width - ',this.state.width, 'height -',this.state.height)
        }
        componentWillUnmount(){
            window.removeEventListener('resize',this.updateDimensions)
            window.location.reload()
            
        }
    
    render(){
        return(
            <ScrollableAnchor id={'about'}>
                <div>
                    <div className = "border" > </div>
                    <div id='bio'>
                    <P5Wrapper id='landingMatrix ' sketch={Matrix}  width ={this.state.width} height={this.state.height}/> 
                        <div id='textBox'>
                            <h2>The Only Limit To Our Reality Is Imagination...</h2>
                            <p>
                            Hi, my name is Jason. I am a Fullstack Javascript developer, software engineer, former teacher and world-traveler.
                            I first discovered my love for code about a year and a half ago upon returning home from a long stint working abroad 
                            and realized that my passion for studying human language extended to learning computer language as well. <br/>
                            <br/>
                            I spent about six months teaching myself Javascript and then enrolled in Fullstack Academy’s Immersive Software Engineering Program 
                            where my knowledge grew exponentially. My current specialty is building React.js applications in a Node.js environment, but I enjoy 
                            working throughout the stack and am always open to learning with new technologies.  I love what I do because I am constantly improving, 
                            creating amazing things, collaborating with great people and pushing the boundaries of what is possible everyday. 
                            </p> 
                        </div>
                    </div>
                </div>
                </ScrollableAnchor>
        )
    }
}