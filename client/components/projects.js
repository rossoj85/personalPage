import React, { Component } from 'react';
import {Panel, Accordion, Modal} from 'react-bootstrap';


export default class Projects extends Component{
    constructor(props){
        super(props)
        this.state = {
            showVaRt: false,
            showGlobeChat: false,
            showUshop: false
        }
        this.openVart = this.openVart.bind(this)
    }
    openVart(){
        var current= this.state.showVaRt
        var notCurrent = !current;
        console.log("vArt: ", this.state.showVaRt)
        console.log("open Vart clicked")
        this.setState({showVaRt: notCurrent})
        console.log(this.state.showVaRt)
    }
    openGlobeChat(){
        console.log('open Globe Chat')
    }
    openUshop(){
        console.log('U-shop Open')
    }
    render(){
        const applications = [
            {name: 'V-aRt', img: '/photos/V-aRt-logo.png', modalFunc: this.openVart},
            {name: 'Globe Chat', img: '/photos/languageTree.png', modalFunc: this.openGlobeChat},
            {name: 'U-Shop', img: '/photos/neonCart.png', modalFunc: this.openUshop}
        ];

        const visArt=[
            {}
        ]

        return (
        <div id="projectsPage" >
        
        <Modal show={this.state.showVaRt} onHide={null}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Text in a modal</h4>
          <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

          <h4>Popover in a modal</h4>

          <h4>Tooltips in a modal</h4>

          <hr />

          <h4>Overflowing text to show scroll behavior</h4>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={()=>this.openUshop()}>Close</button>
        </Modal.Footer>
      </Modal>
            <div className="projectsJumbotron" />
                <div id="projectsBody">
                <h1 style={{color: 'red', marginTop: '0px'}}>Projects</h1>
                        <Accordion>
                            <Panel header="Applications" eventKey="1" >
                                <div className="tileContainer">
                                    {
                                        applications.map(app => {
                                            return (
                                                <div className="appTile" key={app.name} onClick={()=> app.modalFunc()}>
                                                    <img className = "appThumb" src={app.img} />
                                                    <h4>{app.name}</h4>
                                                </div>
                                            )
                                        })
                                    };   
                                </div>
                            </Panel>

                            <Panel header="Visual Art" eventKey="2">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
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
