import React from 'react';

import Projects from '../projects';
import Splash from './splash';
import About from './about';
import Skills from './skills';



export default(props)=>{
    return (
        <div>
            <Splash />
            <About />
            <Skills />
            <Projects />
        </div>
    )
   
}
