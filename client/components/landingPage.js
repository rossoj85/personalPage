import React, { Component } from 'react';


export default class LandingPage extends Component{
    
        componentDidMount(){
            console.log("Landing Page mounted")
          
           
        }
        render(){
            return(
                <div>
                    <h1>Welcome to the Landing Page</h1>
                </div>
            )
        }
    }