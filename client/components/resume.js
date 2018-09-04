import React, { Component } from 'react';
// import Page from 'react-pdf';
// import { Document } from 'react-pdf/dist/entry.noworker';



// export default class resume extends Component {
//   state = {
//     numPages: null,
//     pageNumber: 1,
//   }
 
//   onDocumentLoad = ({ numPages }) => {
//     this.setState({ numPages });
//   }
 
//   render() {
//     const { pageNumber, numPages } = this.state;
 
//     return (
//       <div>
//         <Document
//           file="resume7.pdf"
//           onLoadSuccess={this.onDocumentLoad}
//         >
//           <Page pageNumber={pageNumber} />
//         </Document>
//         <p>Page {pageNumber} of {numPages}</p>
//       </div>
//     );
//   }
// }

export default (props) => {
  return (
    <div>
    <embed  style={{'height':'100vh'}}src="/resume7.pdf" width="100%" height="100%" />
    </div>
  )
}