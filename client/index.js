// import './index.scss'
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import Main from './components/main';
import {useTransitions, withTransition} from 'react-router-transitions';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


ReactDOM.render(
    
    <div>
        <Router >
            <Main />
        </Router>
        </div>,
       document.getElementById('mainView')
); 
