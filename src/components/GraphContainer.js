import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';


class GraphContainer extends Component{
  // constructor(props){
  //   super(props)
  // 
  // }//end of constructor
  
  render(){
    const {title}=this.props
    return(
      <Panel className="GraphContainerPanel">
        <Panel.Heading>{title}</Panel.Heading>
        <Panel.Body className="GraphContainerPanelBody">
        
        {this.props.children}
        
        
        
        </Panel.Body>
        
      </Panel>
    )//end of return
  }//end of render
  
}//end of GraphContainer

export default GraphContainer