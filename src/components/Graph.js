import React, { Component } from 'react';
import Plot from 'react-plotly.js';
// https://plot.ly/javascript/reference/
import GraphContainer from "./GraphContainer";


class Graph extends Component{
  // constructor(props){
  //   super(props)
  // 
  // }//end of constructor
  
  
  render(){
    const {type, data, title}=this.props
    
    if(type==="pie"){
      const val=data.x
      const lbl=data.y
      return(
        <GraphContainer title={title}>
          <Plot
            data={[
              {type: type, values: val, hole:0.45, labels:lbl},
            ]}
            layout={ {width: 600, height: 400} }
          />
        </GraphContainer>
      )//end of return
    }
    else if(type==="bar" || type==="scatter"){
      const x=data.x
      const y=data.y
      return(
        <GraphContainer title={title}>
          <Plot
            data={[
              {type: type, x: x, y: y},
            ]}
            layout={ {width: 600, height: 400} }
          />
        </GraphContainer>
      )//end of return
    }
    else if(type==="scatter3d"){
      const x=data.x
      const y=data.y
      const z=data.z
      return(
        <GraphContainer title={title}>
          <Plot
            data={[
              {type: type, x: x, y: y, z:z},
            ]}
            layout={ {width: 600, height: 400} }
          />
        </GraphContainer>
      )//end of return
    }
    
  }//end of render
  
}//end of Graph


export default Graph