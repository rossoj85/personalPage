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
                        {/* <div id='textBox'>
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
                        </div> */}

                        <div id='textBox'>
                            <h2>The Only Limit To Reality Is Imagination...</h2>
                            <p>
                            Hi, I’m Jason. I am a Fullstack developer and Software Engineer.
                             My coding journey began over 8 years ago when I returned from working as a language teacher overseas 
                             in Asia and South America. I soon discovered my passion for learning spoken language naturally extended 
                             to passion for learning computer code.<br/>
                            <br/>
                            Much like spoken language, I believe that machine language is most effective when it is stripped down to its basics:  
                            simple and direct, yet  powerful and elegant. <br/>
                            <br/>
                            Just as learning foreign languages brought me to new places, expanded my horizons and broadened my concept of the world, 
                            so has learning computer code. Since I started my first gig working as a React developer, my craft has brought me to new 
                            cities, helped me to make new and lasting friendships, and saw me collaborating with an array of people and organizations; 
                            from some of the largest companies in the world, to small local businesses and start-ups. <br/>
                            <br/>
                            I strive everyday to constantly improve, create amazing things, collaborate with great people and push the boundaries of what is possible. 
                            </p> 
                        </div>
                    </div>
                </div>
                </ScrollableAnchor>
        )
    }
}