import React, { Component } from 'react';
import {Modal, Button, ResponsiveEmbed} from 'react-bootstrap'; 


export default (props)=>{
    console.log("ScreenShot Modal Props",props)
    const showModal = props.showModal
    const picture = props.modal
    const closeScreenShotModal = props.closeScreenShotModal
    console.log("MODAL BODY ", Modal.header)
   return(
       <div id="screenShotModal">
       <Modal show={showModal} onHide={()=>closeScreenShotModal()} bsSize='large'>
       <Modal.Header closeButton>
            <Modal.Title style={{textDecoration: 'none'}}>Screen Shot</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <img src={picture} style={{width:'100%', height: 'auto', border: '5px solid black'}} />
        </Modal.Body>

        <Modal.Footer>
            <Button className ="btn btn-danger" onClick={()=>closeScreenShotModal()}>Close</Button>
        </Modal.Footer>
    </Modal>
    </div>
    )
    
}