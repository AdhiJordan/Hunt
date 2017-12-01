import React, { Component } from 'react';
import DemoComponentHeader from './../DemoComponentHeader';
//import styles from "./home.scss"; 

export default class ReactIntroduction extends Component{
		constructor(args) {
        super(args);
        this.state = {
        };
    }


    render() {
    	return (
    		<p>I am areact inroduction page ping me</p>
    	);
    }

}


// const ReactIntroduction = ({ match }) => {
// 	<div>
// 	<p>hallo</p>
// 	{match.params}
// 	</div>
// };