import '../stylesheets/index.scss'
import React, { Component } from 'react';
import { Route, Switch, Fade } from 'react-router-dom';
import {RainPage, LandingPage, Navbar, Projects, About, Footer, Contact, Loader} from './index';
import {Gol} from './index'
import {VRDesert, VRNightScene, VRVangogh, VRVaporwave} from './environments'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Main extends Component{

    componentDidMount(){
        console.log("Main Component mounted")
        // console.log("Is Webpack Workings?")
       
    }
    render(){
        
        return(
            <div id="innerRoute">
                <div id='innerRouteMainBody'>
                   
                    <Navbar isNavbar={true}/>
                   
                    <Route exact path='/' component={LandingPage} isLandingPage={true}/>
                    <Route exact path='/projects' component={Projects} /> 
                    <Route exact path='/projects/rain' component={RainPage} />
                    <Route exact path='/projects/theDesert' component={VRDesert} isVR={true} />
                    <Route exact path='/projects/nightScene' component={VRNightScene} isVR={true} />
                    <Route exact path='/projects/vaporwave' component={VRVaporwave} isVR={true} />
                    <Route exact path='/projects/vangogh' component={VRVangogh} isVR={true}/>
                    <Route exact path='/projects/gol' component={Gol} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/contact' component={Contact} />
            </div>
            <Footer />
            </div>
        )
    }
}