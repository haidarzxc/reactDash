import React, { Component } from 'react';
import '../css/App.css';
import { Grid,Row,Col } from 'react-bootstrap';
import SideMenu from "./SideMenu";
import Menu from "./Menu";

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
    return (
      <Grid>
        <Row>
          <Col  xd={2} md={2} className={this.state.isOn? "SideBarOFF":"SideBar"}>
            <SideMenu triggerSideMenu={this.isSideMenuOpen}/>
          </Col>
          <Col xd={10} md={10} className={this.state.isOn? "BodyOff":"Body"}>
            <Menu/>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
