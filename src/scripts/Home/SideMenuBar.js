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
	        	    <nav className="ment">
            <ul>
                <li>
                    <a href="/sozdanie-internet-magazina.html">
                        <i className="fa fa-home"></i>
                        <span className="nav-text">
                            Home
                        </span>
                    </a>
                  
                </li>
                <li>
                    <a href="/sozdanie-korporativnogo-sajta.html">
                        <i className="fa fa-search"></i>
                        <span className="nav-text">
                           Chat Message
                        </span>
                    </a>
                    
                </li>
                 <li>
                    <a href="/sozdanie-medicinskogo-sajta.html">
                        <i className="fa fa-cloud"></i>
                        <span className="nav-text">
                            Filter
                        </span>
                    </a>
                    
                </li>
                <li>
                    <a href="#">
                        <i className="fa fa-trash"></i>
                        <span className="nav-text">
                            Manage
                        </span>
                    </a>
                    
                </li>
                    <li>
                    <a href="#">
                        <i className="fa fa-plane"></i>
                        <span className="nav-text">
                            Location
                        </span>
                    </a>
                    
                </li>
            </ul>
        </nav>

	        </div>
	    );
    }

};