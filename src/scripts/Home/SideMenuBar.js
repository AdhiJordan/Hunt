import React, { Component } from 'react';
import DemoComponentHeader from './../DemoComponentHeader';
import styles from "./home.scss";
import sidemenubarData from "./sidemenubar.json";

export default class SideMenuBar extends Component{
		constructor(args) {
        super(args);
        this.state = {
        	getdata: sidemenubarData 
        };
    }

    render() {


    	return (
	        <div className="learning-Home-Page-sidebar">
	        	<p>hai</p>
	        </div>
	    );
    }

};