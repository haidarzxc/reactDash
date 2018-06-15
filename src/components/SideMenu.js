import React, { Component } from 'react';
import { ListGroup,ListGroupItem,Glyphicon } from 'react-bootstrap';



class SideMenu extends Component{
  
  hideDashboard(e){
    const {isOn}=this.state
    this.setState({isOn : !isOn})
    // e.target.style.backgroundColor="yellow"
    // var sidebar=document.getElementsByClassName('.SideBar');
    
    console.log(this.state.isOn)
    if(this.state.isOn){
      
    }
     
  }//end of hideDashboard
  
  
  constructor(props){
    super(props)
    this.state={isOn:true,
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
    this.hideDashboard = this.hideDashboard.bind(this);
  }//end of constructor
  
  render(){
    let links=[];
    for(var i=0; i<this.state.links.length; i++){
      var item=this.state.links[i]
      if(i===0){
        links[i]=<ListGroupItem key={i} href={item.link} className="SideMenuTitle"
          onClick={this.hideDashboard}>
          <Glyphicon glyph={item.icon} />{item.text}</ListGroupItem>
        continue
      }//end of title Dashboard
      links[i]=<ListGroupItem key={i} href={item.link}>
        <Glyphicon glyph={item.icon} />{item.text}</ListGroupItem>
    }//end of forloop
    
    return(
      <ListGroup className="SideMenu">
        {links}
      </ListGroup>
    )//end of return
  }//end of render
}//end of class SideMenu

export default SideMenu