import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';

export default class myNavbar extends Component{
    
        componentDidMount(){
            console.log("Navbar Page mounted")
          
           
        }
        render(){
            return(
                <div>
                    <h1>Navbar Will go here</h1>
                </div>
            )
        }
    }