import React, { Component } from 'react';
import { Navbar,NavItem,Nav,NavDropdown,MenuItem } from 'react-bootstrap';
import logo from '../logo.svg';

export default class Menu extends Component{
  // constructor(props){
  //   super(props)
  //   this.state={isOn:false}
  // }//end of constructor
  
  render(){
    const {isOn}=this.props
    return (
      
      <Navbar className={isOn? "NavbarOff":""} fixedTop>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#home">React</a>
        </Navbar.Brand>
        <img src={logo} alt="React" className="logo"/>
        
      </Navbar.Header>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">Edit</NavItem>
        <NavItem eventKey={2} href="#">Update</NavItem>
        <NavDropdown eventKey={3} title="2018" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>2017</MenuItem>
          <MenuItem eventKey={3.2}>2016</MenuItem>
          <MenuItem eventKey={3.3}>2015</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.4}>Add Year</MenuItem>
        </NavDropdown>
      </Nav>
    </Navbar>
      
    )//end of return
  }
  
}//end of Menu