import React, { Component } from 'react';
import {Modal, Button, Media,Tooltip,OverlayTrigger} from 'react-bootstrap'; 



export default (props) => {
  console.log("modalVart", props)
  const showModal=props.showModal;
  const closeModal=props.closeModal;
  const project =props.modal;
  return(
    <Modal show={showModal} onHide={()=>closeModal()} bsSize="large">
    <Modal.Header closeButton>
      <Modal.Title style={{textDecoration: 'none'}}>Projects</Modal.Title>
    </Modal.Header>
    <Modal.Body>
     {/* <img src={project.img} className = "appThumb"/>

      <hr />

      <h4>{project.header || 'Caption title will go here'}</h4>
      <p>{project.description}</p>
      
      <iframe width="560" height="315" src={project.youTube} frameBorder="0" allowFullScreen></iframe>}
  */}
       
          <Media>
          <Media.Left align="top">
            <img  src={project.img} className = "appThumb"/>
          </Media.Left>
          <Media.Body>
            <Media.Heading>{project.name}</Media.Heading>
              <div >
                <p>{project.description}</p>
              </div>
             
            {project.thumbs?
              <div className='screenShotRow'>
                <h4>Screenshots</h4>
                {project.thumbs.map(thumb=>{
                  return(
                    <img src={thumb} className= 'screenshots'/>
                  )
                })}
              </div>
              :null
            }

            {
              project.technologies ?
              <div> 
              <h4>Technologies Used</h4>
            {
              project.technologies.map(tech=>{
                let tooltip=(<Tooltip id='tooltip' style={{fontSize:'15px'}}>{tech.name}</Tooltip>)
                return(
                 <OverlayTrigger placement='bottom' overlay={tooltip}>
                    <img src={tech.img} className='techImg' />
                  </OverlayTrigger>
                )
              })
            }
            </div>:
            null }
            {
              project.youTube ?
              <div> 
              <h4>Youtube</h4>
              <iframe width="280" height="157" src={project.youTube} frameBorder="0" allowFullScreen></iframe>
              </div>
              :
              null
            }
            <h4>Visit Application Site</h4>
            <h4>Github</h4>
            
         
          </Media.Body>
          {/*
          <h4>Thumbs</h4>
          <h4>Github</h4>
          <h4>Visit Application Site</h4>
          {
            project.youTube ?
            <div> 
            <h4>Youtube</h4>
            <iframe width="240" height="135" src={project.youTube} frameBorder="0" allowFullScreen></iframe>
            </div>
            :
            null
          }
        */}
        </Media>
        
    

    </Modal.Body>
    <Modal.Footer>
      <Button className ="btn btn-danger" onClick={()=>closeModal()}>Close</Button>
    </Modal.Footer>
  </Modal>
  )

  }


