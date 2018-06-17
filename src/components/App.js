import React, { Component } from 'react';
import '../css/App.css';
import { Grid,Row,Col,ProgressBar } from 'react-bootstrap';
import SideMenu from "./SideMenu";
import Menu from "./Menu";
import Graph from "./Graph"
import GraphContainer from "./GraphContainer"

class App extends Component {
  constructor(props){
    super(props)
    this.state={isOn:false}
    this.isSideMenuOpen=this.isSideMenuOpen.bind(this)
  }//end of constructor
  
  isSideMenuOpen(){
    const {isOn}=this.state
    this.setState({isOn : !isOn})
  }
  
  render() {
    const gDataA={x:[1, 2, 3],y:[2, 5, 3]}
    const gDataB={x:[100, 144, 300, 105, 110, 122],y:[54,127,500,135,88,93]}
    const gDataC={x:[100, 144, 300, 105, 110, 122],
          y:["label1","label2","label3","label4","label5","label6"]}
    const gDataD={x:[1, 2, 3],y:[2, 5, 3],z:[10, 20, 30]}
    return (
      <Grid>
        <Row>
          <Col  xd={2} md={2} className={this.state.isOn? "SideBarOFF":"SideBar"}>
            <SideMenu triggerSideMenu={this.isSideMenuOpen}/>
          </Col>
          <Col xd={10} md={10} className={this.state.isOn? "BodyOff":"Body"}>
            <Menu isOn={this.state.isOn}/>
            
            <Row className="GraphRowFirst">
              <Col xd={12} md={12} className="GraphContainer">
                <GraphContainer title="Recent Activites">
                  <div className="ProgressBar">
                    <ProgressBar striped bsStyle="success" now={40} label="Total Records: 42"/>
                    <ProgressBar striped bsStyle="info" now={20} label="Total Users: 13"/>
                    <ProgressBar striped bsStyle="warning" now={60} label="Total Commits: 12.0134"/>
                    <ProgressBar striped bsStyle="danger" now={80} label="Total Projects: 163"/>
                  </div>
                </GraphContainer>
                
                
              </Col>
            </Row>
            
            <Row className="GraphRow">
              <Col xd={6} md={6} className="GraphContainer">
                <Graph key={0} type={"bar"} data={gDataA} title="Total Consumption"/>
                  
              </Col>
              <Col xd={6} md={6} className="GraphContainer">
                <Graph key={1} type={"scatter"} data={gDataB} title="Data Usage"/>
              </Col>
            </Row>
            
            <Row className="GraphRow">
              <Col xd={6} md={6} className="GraphContainerPadding GraphContainer">
                <Graph key={0} type={"pie"} data={gDataC} title="Energy Per Building"/>
                  
              </Col>
              <Col xd={6} md={6} className="GraphContainer">
                <Graph key={1} type={"scatter3d"} data={gDataD} title="3D Model"/>
              </Col>
            </Row>
              
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
