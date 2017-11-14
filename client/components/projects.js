import React, { Component } from 'react';
import {Panel, Accordion, Modal} from 'react-bootstrap';
import {ProjectModals, vart, globeChat, uShop, rain, theDesert, vanGogh, 
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
            uShop
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
        <div id="projectsPage" >

            { this.state.modal?
                <ProjectModals  showModal={this.state.showModal} closeModal={this.closeModal} modal={this.state.modal}/>
                :
                null
            }

            <div className="projectsJumbotron" />
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
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                            </Panel>
                        </Accordion>
            </div>
        </div>
        );
    }

}
