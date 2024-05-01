import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {configureAnchors } from 'react-scrollable-anchor';
import mobile from 'is-mobile';



export default class myNavbar extends Component{
    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        };
        this.toggleExpanded = this.toggleExpanded.bind(this);
        this.collapseNavbar = this.collapseNavbar.bind(this);
    }
    toggleExpanded() {
        this.setState(prevState => ({ expanded: !prevState.expanded }));
    }

    collapseNavbar() {
        this.setState({ expanded: false });
    }
 
    componentDidMount(){
        let navbar =  document.getElementById('navbar')
        console.log('NAVBAR COMPONTENT MOUNT PROPS',this.props)
        if(this.props.match.params.project==='rain'){
            navbar.classList.add('navbarColored')
        }
    }
    addLoadingScreenAndControls() {
        document.addEventListener('DOMContentLoaded', function() {



            console.log('EVENT LISTENER ADDED');
            var scene = document.querySelector('a-scene');
            var splash = document.querySelector('#splash');
            scene.addEventListener('loaded', function (e) {
                console.log('LOADED!!!!!!________________________________________________________')
                splash.style.display = 'none';
                let mobilText = "Move your phone to look around"
                let desktopText = "Use WASD to move. Click and drag to look around"
                var greyDiv = document.createElement('div');
                greyDiv.classList.add('navbar-text');
                if (mobile()) greyDiv.textContent = mobilText;
                else greyDiv.textContent = desktopText;
                
                document.body.appendChild(greyDiv);
    
                setTimeout(function() {
                    greyDiv.style.opacity = '0';
                    setTimeout(function() {
                        document.body.removeChild(greyDiv);
                    }, 3000);
                }, 7000);
            });
        });
    }
    

    render(){

        console.log('NAVBAR IS MOBILE', mobile());
    
        configureAnchors({offset: -80, scrollDuration: 800})
        let navbarColored;
        if(this.props.match.params.project==='rain'){
                navbarColored = true
        }
            
        //using an arrow function here preserves the this context
        window.onscroll = ()=> {
            // console.log('height', window.innerHeight, 'height divieded', window.innerHeight *.8)
            let navbar = document.getElementById('navbar')
            // console.log('Y OFFSET', window.pageYOffset);
         
            if (window.pageYOffset > 160 || navbarColored ||  this.props.match.params.project && this.props.match.params.project.includes('gol')) {
                navbar.classList.add("navbarColored");
            } else {
                console.log('REMOVING CLASS');
                navbar.classList.remove("navbarColored");
            }
            }

            let isExternalProject = this.props.match.params.project
            const { expanded } = this.state;

            console.log('IS EXTERNAL PROJECT', isExternalProject);
            
            
    return (
        <Navbar inverse collapseOnSelect fixedTop className='navbarClear' id='navbar' expanded={expanded}>
            <Navbar.Header>
                    {isExternalProject ?
                        <LinkContainer to='/'>
                        <a href='#splash'>
                        <img className="logo" src ="/photos/logoBlack.jpg" />
                        <h3>
                            <span style = {{color:"red"}} >Jason Rosso</span> Fullstack Developer, New York
                        </h3>
                        
                        </a>
                        </LinkContainer>
                        :
                        <a href='#splash'>
                        <img className="logo" src ="/photos/logoBlack.jpg" />
                        <h3><span style = {{color:"red"}} >Jason Rosso</span> Fullstack Developer, New York</h3>
                        {/* <h3>
                                <span style = {{color:"red"}} >Jason Rosso</span>
                                {mobile()? <br/> : null} 
                                Fullstack Developer, New York
                            </h3> */}
                        </a>
                    }
                <Navbar.Toggle  onClick={this.toggleExpanded} />
            </Navbar.Header>
            
            {/* WASD CNTROLS POPUP */}

            {
                isExternalProject ? this.addLoadingScreenAndControls() : null
            }



            <Navbar.Collapse >
                <Nav pullRight className='navContainer'>
                
                {isExternalProject ?
                    <div>
                    <LinkContainer to="/#projects"><a className='abtn' onClick={this.collapseNavbar}>Projects</a></LinkContainer>
                    <LinkContainer to="/#skillSection"><a className='abtn' onClick={this.collapseNavbar}>Skills</a></LinkContainer>
                    <LinkContainer to="/#about"><a id='about' className='abtn' onClick={this.collapseNavbar}>About</a></LinkContainer>
                </div>
                :
                <div id='statefullButtons'>
                    <a className='abtn' id='projects' href='#projects' onClick={this.collapseNavbar}>Projects</a>
                    <a className='abtn' id='skillSection' href='#skillSection' onClick={this.collapseNavbar}>Skills</a>
                    <a className='abtn' id='about' href='#about' onClick={this.collapseNavbar}>About</a>
                </div>
                //IDS ARE COMBINED WITH THE :PSEUDO CLASS TO TARGET THESE BUTTONS AS YOU SCROLL
                }
                </Nav>

            </Navbar.Collapse>
        </Navbar>
            )
        }
        
    }



                {/*}
                <Navbar style={{width: '100%'}} collapseOnSelect className='navbar-fixed-top'>
                    
                    <Navbar.Header className="title">
                    <Link to ='/'>
                        <img className="logo" src ="/photos/logoBlack.jpg" />
                        <h3><span style = {{color:"red"}} >Jason Rosso</span> Fullstack Developer, New York</h3>
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
            */}

    