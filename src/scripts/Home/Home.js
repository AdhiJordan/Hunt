import React, { Component } from 'react';
import DemoComponentHeader from './../DemoComponentHeader';
import styles from "./home.scss";
import SideMenuBar from './SideMenuBar.js';
export default class Home extends Component{
		constructor(args) {
        super(args);
        this.state = {
        	
        };
    }
    backButton(e){
    	this.props.backClick();
    }
    render() {
	    return (
	        <div className="learning-Home-Page">
	        <DemoComponentHeader />

	        <div className="w3-row">
	          <p className="w3-col s2 m2 l2 paragraph">Home page</p>
	         
	          <button className=" w3-col s10 m10 l10  w3-button w3-black"
	          onClick={this.backButton.bind(this)}>Back</button>
	          </div>

	          <div className="w3-row">
	          <div className="w3-col s2 m2 l2 sidemenubar-border">
	          <SideMenuBar />
	          </div>
	          <div className="w3-col s10 m10 l10 working-border">
	          <p>working page</p>
	          </div>
	          </div>
	        </div>
	    );
    }

};