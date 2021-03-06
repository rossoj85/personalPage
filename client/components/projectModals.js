import React, { Component } from 'react';
import {Modal, Button, Media, Tooltip, OverlayTrigger} from 'react-bootstrap'; 
import{ScreenShotModal} from './index';
import {Link} from 'react-router-dom';


export default class ProjectModal extends Component{

  constructor(props){
    super(props)
    this.state = {
        showModal: null,
        modal: null,
    }
    this.closeScreenShotModal = this.closeScreenShotModal.bind(this);
}

closeScreenShotModal(){
    console.log("CLOSE MODAL EXECUTED")
    this.setState({showModal: false, modal:false})
    console.log("new ShowModal state", this.state.showModal)
}
  render(){
  const showModal=this.props.showModal;
  const closeModal=this.props.closeModal;
  const project =this.props.modal;
  console.log("THE SCREEN SHOT MODAL", ScreenShotModal)
  return(
  <div>
    {
    this.state.modal?
      <ScreenShotModal  showModal={this.state.showModal} closeScreenShotModal={this.closeScreenShotModal} modal={this.state.modal}/>
      :
      null
    }

    <Modal show={showModal} onHide={()=>closeModal()} bsSize="large">
    <Modal.Header closeButton>
      <Modal.Title style={{textDecoration: 'none'}}>Projects</Modal.Title>
    </Modal.Header>
    <Modal.Body>
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
                    <img src={thumb} className= 'screenshots' onClick={()=> this.setState({showModal: true, modal: thumb})} key={thumb}/>
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
                 <OverlayTrigger placement='bottom' overlay={tooltip} key={tech.name}>
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
            {
              project.site ?
              <div>
                <h4>Visit Application Site</h4>
                <a id="modalA" href={project.site}>{project.site}</a>
              </div>
            :
            null
            }
            {
              project.github?
              <div>
                <h4>View Source Code</h4>
                <img src='/photos/github-white.png' style={{height:'18px',
                width:'18px',
                display:'inline-block',
                marginBottom: '3px',
                marginRight: '1px'}} />
                <a id="modalA" href={project.github} style={{display:'inline-block'}}>{project.github}</a>
              
              </div>
              :
              null
          
            }
            {
              project.enterBtn?
              <Link to={project.btnLink}><Button className ="btn btn-danger" 
              style={{textShadow:'none'}} 
              onClick={()=>closeModal()}>Enter {project.name}</Button></Link>
              :
              null
            }
         
          </Media.Body>
        </Media>
    </Modal.Body>
    <Modal.Footer>
      <Button className ="btn btn-danger" onClick={()=>closeModal()}>Close</Button>
    </Modal.Footer>
  </Modal>
</div>
  )
    }
  }


