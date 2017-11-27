import React, { Component } from 'react';
import {Panel, Accordion, Modal} from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {ProjectModals, vart, globeChat, uShop, jsAcademy, rain, theDesert, vanGogh, 
        nightScene} from './index';


export default class Projects extends Component{
    constructor(props){
        super(props)
        this.state = {
            showModal: null,
            modal: null,
        }
        this.closeModal=this.closeModal.bind(this);
    }
    
    closeModal(){
        console.log("CLOSE MODAL EXECUTED")
        this.setState({showModal: false, modal:false})
        console.log("new ShowModal state", this.state.showModal)
    }
   
    render(){
        const applications = [
            vart,
            globeChat,
            uShop,
            jsAcademy
        ];
        const visualArt =[
            rain,
            theDesert,
            vanGogh,
            nightScene
        ];
        console.log("VIS ART",visualArt)
        console.log("Imported Vart Object", vart)
        console.log("Is there a selected Modal?", this.state.modal)
        console.log("RaIn", rain )
        return (
            <ReactCSSTransitionGroup
            transitionName="example"
            transitionAppear={true}
            transitionAppearTimeout={1000}
            transitionEnter={false}
            transitionLeave={false} 
            >
        <div id="ProjectPage">

            { this.state.modal?
                <ProjectModals  showModal={this.state.showModal} closeModal={this.closeModal} modal={this.state.modal}/>
                :
                null
            }
            
            <div className="projectsJumbotron" key='jumbo'/>
                <div id="projectsBody">
                <h1 style={{color: 'red', marginTop: '0px'}}>Projects</h1>
                        <Accordion>
                            <Panel header="Applications" eventKey="1" >
                                <div className="tileContainer">
                                    {
                                        applications.map(app => {
                                            return (
                                                <div className="appTile" key={app.name} onClick={()=> this.setState({showModal: true, modal: app})}>
                                                    <img className = "appThumb" src={app.img} />
                                                    <h4>{app.name}</h4>
                                                </div>
                                            )
                                        })
                                    }   
                                </div>
                            </Panel>

                            <Panel header="Visual Art" eventKey="2">
                                <div className="tileContainer">
                                {
                                    visualArt.map(app => {
                                        return (
                                            <div className="appTile" key={app.name} onClick={()=> this.setState({showModal: true, modal: app})}>
                                                <img className = "appThumb" src={app.img} />
                                                <h4>{app.name}</h4>
                                            </div>
                                        )
                                    })
                                }   
                                </div>
                                
                            </Panel>
                            <Panel header="Fun And Games" eventKey="3">
                            Coming Soon...
                            </Panel>
                        </Accordion>
            </div>
            
        </div>
        </ReactCSSTransitionGroup>
        );
    }

}
