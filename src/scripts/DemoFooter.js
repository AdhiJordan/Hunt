import React, { Component } from 'react';
import '../styles/styles.scss';
export default class DemoFooter extends Component{
		constructor(args) {
        super(args);
        this.state = {
        };
    }
    render() {
	    return (
	        <div>
	        	<p className="footer-page"> Footer</p>
	        </div>
	    );
    }

};