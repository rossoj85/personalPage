import React from 'react';
import {Tabs, Tab, Media} from 'react-bootstrap';

  export default (props) => {
    
    return (
        <div>
        <h1 style={{color:'#337ab7'}} >About</h1>
          <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
            <Tab eventKey={1} title="Me">
            <Media>
              <Media.Left>
                <img width={64} height={64} src="/photos/logoWhite.jpg" alt="Image" />
              </Media.Left>
              <Media.Body>
                <Media.Heading>Media Heading</Media.Heading>
                <p className="col-md-6">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
              </Media.Body>
          </Media>
            </Tab>


            <Tab eventKey={2} title="This Site">Tab 2 content</Tab>
            
          </Tabs>
        </div>
      );
  }