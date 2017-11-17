import React, { Component } from 'react';
import DemoComponentHeader from './../DemoComponentHeader';
import styles from "./home.scss";
import SideMenuBar from './SideMenuBar.js';
import sidemenubarData from "./sidemenubar.json";
export default class Home extends Component{
		constructor(args) {
        super(args);
        this.state = {
        	getdata: sidemenubarData 
        };
    }
    backButton(e){
    	this.props.backClick();
    }
    render() {
    	const {getdata} = this.state;
    	let displayTopic = [], subTiles = [];
    	displayTopic = getdata.map((item)=> {
    		console.log("items-----", item);
    		return (
    			<div className="title-list">
    				<p className="main-title">{item.title}</p>
    			{item.subTitles.map((title)=>{
    				return (
    					<div className="title-list-sub">{title.name}</div>
    				);
    			})}
    			</div>
    		);
    	});
	    return (
	        <div className="learning-Home-Page">
	        <DemoComponentHeader />

	        <div className="w3-row" style={{height: "70px"}}>
	          <p className="w3-col s2 m2 l2 paragraph">Home page</p>
	         
	          <button className=" w3-col s10 m10 l10  w3-button w3-black"
	          onClick={this.backButton.bind(this)}>Back</button>
	          </div>
	          <SideMenuBar />
	          <div className="w3-row" style={{marginLeft: "4%"}}>
	          <div className="w3-col s3 m3 l3 sidemenubar-border">
	          		{displayTopic}
	          </div>
	          <div className="w3-col s9 m9 l9 working-border">
	          <p>working page</p>
	          </div>
	          </div>
	        </div>
	    );
    }

};