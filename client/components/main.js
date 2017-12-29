import '../index.scss'
import React, { Component } from 'react';
import { Route, Switch, Fade } from 'react-router-dom';
import {RainPage, LandingPage, Navbar, Projects, About,Footer, Contact, Loader} from './index';
import {VRDesert, VRNightScene, VRVangogh, VRVaporwave} from './environments'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Main extends Component{

    componentDidMount(){
        console.log("Main Component mounted")
        // console.log("Is Webpack Workings?")
       
    }
    render(){
        console.log(this)
        let navbarOn = true
        return(
            <div id="mainView">
           
            
            <Switch>
                <Route  exact path="/" render={(props)=>(
                    <LandingPage {...props} navbar={Navbar} />
                )} />
              <Navbar />
            </Switch>
            
            <Route exact path='/projects' component={Projects} /> 
            <Route exact path='/projects/rain' component={RainPage} />
            <Route exact path='/projects/theDesert' component={VRDesert} />
            <Route exact path='/projects/nightScene' component={VRNightScene} />
            <Route exact path='/projects/vaporwave' component={VRVaporwave} />
            <Route exact path='/projects/vangogh' component={VRVangogh} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />
        
            
            <Footer />
            </div>
        )
    }
}