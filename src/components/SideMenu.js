import React, { Component } from 'react';
import { ListGroup,ListGroupItem,Glyphicon } from 'react-bootstrap';

class SideMenu extends Component{
  
  dashboard(){
    const {isOn}=this.state
    this.setState({isOn : !isOn})
  }//end of dashboard
  
  triggerClick(){
    this.props.triggerSideMenu()
    this.dashboard()
  }//end of triggerClick
  
  
  constructor(props){
    super(props)
    this.state={isOn:false,
      links:[
        {text:" Dashboard",
          link:"#",
          icon:"glyphicon glyphicon-th-list"},
        {text:" HOME",
          link:"#",
          icon:"glyphicon glyphicon-home"},
        {text:" SETTINGS",
          link:"#",
          icon:"glyphicon glyphicon-cog"},
        {text:" NEW",
          link:"#",
          icon:"glyphicon glyphicon-file"},
        {text:" CALENDAR",
          link:"#",
          icon:"glyphicon glyphicon-calendar"},
        {text:" SAVE",
          link:"#",
          icon:"glyphicon glyphicon-save"},
        {text:" CHARTS",
          link:"#",
          icon:"glyphicon glyphicon-stats"},
          
      ]
    }//end of state object
    this.dashboard = this.dashboard.bind(this);
    this.triggerClick = this.triggerClick.bind(this);
  }//end of constructor
  
  render(){
    let links=[];
    for(var i=0; i<this.state.links.length; i++){
      var item=this.state.links[i]
      if(i===0){
        links[i]=<ListGroupItem key={i} href={item.link} 
        className={this.state.isOn? "SideMenuTitleOff MenuItemOff":"SideMenuTitle MenuItem"}
          onClick={this.triggerClick}>
          <Glyphicon glyph={item.icon} 
          className={this.state.isOn? "sideGlyphIconOff":"sideGlyphIcon"}/>{this.state.isOn? "":item.text}
          </ListGroupItem>
        continue
      }//end of title Dashboard
      links[i]=<ListGroupItem key={i} href={item.link}
      className={this.state.isOn? "MenuItemOff":"MenuItem"}> 
        <Glyphicon glyph={item.icon} className={this.state.isOn? "sideGlyphIconOff":"sideGlyphIcon"}/>{this.state.isOn? "":item.text}
        </ListGroupItem>
    }//end of forloop
    
    return(
      <ListGroup className={this.state.isOn? "SideMenuOff":"SideMenu"}>
        {links}
      </ListGroup>
    )//end of return
  }//end of render
}//end of class SideMenu

export default SideMenu