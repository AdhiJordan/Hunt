import React, { Component } from 'react';
import Home from './../scripts/Home/Home.js';
export default class DemoComponentHeader extends Component{
	constructor(args) {
        super(args);
        this.state = {
        	
        };
    }
	openSide(e) {
		document.getElementById("mySidebar").style.display = "block";
	}
	closeSide(e) {
		document.getElementById("mySidebar").style.display = "none";
	}
	render(){
		    return (
        <div className="page-Head">
        	<div className="w3-sidebar w3-bar-block w3-border-right" style={{display: "none"}} id="mySidebar">
			  <button onClick={this.closeSide.bind(this)} className="w3-bar-item w3-large">Close &times;</button>
			  <a href="#" className="w3-bar-item w3-button">Link 1</a>
			  <a href="#" className="w3-bar-item w3-button">Link 2</a>
			  <a href="#" className="w3-bar-item w3-button">Link 3</a>
			</div>
        		<div className="w3-row sidebar-menu">
				  <button className="w3-col s1 m1 l1 w3-button  w3-xlarge w3-left"
				  style={{backgroundColor: "#fff"}} onClick={this.openSide.bind(this)}>☰</button>
				   <p className="w3-col s11 m11 l11 w3-center header-title" 
				   style={{paddingTop: "5px"}}>React Js Learning Tutorial</p>
				</div>
        </div>
    );	
	}

};
