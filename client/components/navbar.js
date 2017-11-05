import React, { Component } from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {Link} from 'react-router-dom';
export default class myNavbar extends Component{
    
      
        render(){
            console.log(this)
            return(
            /*<div className="header">
                <div className="container-fluid">
                    <div className="title">
                    <img className="logo" src = "https://image.spreadshirtmedia.com/image-server/v1/compositions/111762347/views/1,width=800,height=800,appearanceId=1,backgroundColor=FFFFFF,noPt=true,version=1479364777/black-jr-logopng-tank-tops-mens-premium-tank.webp"/>
                    <h3><span style = {{color:"red"}} >Jason Rosso</span>, Fullstack Developer,  New York</h3>
                </div>
                
                  <ul className="nav">
                    <button>About</button>
                    <button>Projects</button>
                    <button>Contact</button>
                  </ul>
                </div>
            </div> */

           
                <Navbar style={{width: '100%'}} collapseOnSelect>
                    
                    <Navbar.Header className="title">
                    <Link to ='/'>
                        <img className="logo" src ="/photos/logoBlack.jpg" />
                        <h3><span style = {{color:"red"}} >Jason Rosso</span>, Fullstack Developer,  New York</h3>
                         </Link>
                        <Navbar.Toggle />
                    </Navbar.Header>
                   
            <Navbar.Collapse>
              <Nav className="nav container" pullRight>
              
              <LinkContainer to="/projects"><NavItem><button>Projects</button></NavItem></LinkContainer>
              <LinkContainer to="/about"><NavItem><button>About</button></NavItem></LinkContainer>
              <LinkContainer to="/contact"><NavItem><button>Contact</button></NavItem></LinkContainer>
              </Nav>
              </Navbar.Collapse>
            </Navbar>
         
            
             
            )
        }
    }