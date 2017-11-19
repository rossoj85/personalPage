// import './index.scss'
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import Main from './components/main';




ReactDOM.render(
    
    <div>
        <Router >
            <Main />
        </Router>
        </div>,
       document.getElementById('mainView')
); 
