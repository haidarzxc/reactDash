import React, { Component } from 'react';
import { Navbar,NavItem,Nav,NavDropdown,MenuItem } from 'react-bootstrap';
import logo from '../logo.svg';

export default class Menu extends Component{
  constructor(props){
    super(props)
    this.state={isOn:false}
  }//end of constructor
  
  render(){
    return (
      
      <Navbar className=".navbar-expand">
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#home">React</a>
        </Navbar.Brand>
        <img src={logo} alt="React" className="logo"/>
        
      </Navbar.Header>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">Link</NavItem>
        <NavItem eventKey={2} href="#">Link</NavItem>
        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Action</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.4}>Separated link</MenuItem>
        </NavDropdown>
      </Nav>
    </Navbar>
      
    )//end of return
  }
  
}//end of Menu