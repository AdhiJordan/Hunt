import DemoComponentHeader from './DemoComponentHeader';
import React, { Component } from 'react';
import Home from './../scripts/Home/Home.js';
import DemoFooter from './DemoFooter';
var background = {
		minHeight: "100vh",
		backgroundImage: "url('./src/assets/3.jpeg')",
		backgroundRepeat: "no-repeat",
};
export default class DemoComponent extends Component{
		constructor(args) {
        super(args);
        this.state = {
        	homeToggle: true
        };
    }

    homePage(e) {
    	this.setState({homeToggle: false});
    }

    backClick(e){
    	this.setState({
    		homeToggle: true
    	})
    }

    render() {
	    return (
	        <div>
	        {this.state.homeToggle ?
	            <div> 
	            <DemoComponentHeader />
	            <div className="w3-container w3-center" style={background}>
	            <a className="download"   onClick={this.homePage.bind(this)}></a>
	            </div>
	            
	            </div> :
	            <Home backClick={this.backClick.bind(this)}/>
	        }
	        </div>
	    );
    }

};