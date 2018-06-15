import React, { Component } from 'react';
import '../css/App.css';
import { Grid,Row,Col } from 'react-bootstrap';
import SideMenu from "./SideMenu";
import Menu from "./Menu";

class App extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col  xd={2} md={2} className="SideBar">
            <SideMenu/>
          </Col>
          <Col xd={10} md={10} className="Body">
            <Menu/>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
