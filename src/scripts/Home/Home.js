import React, { Component } from 'react';
import DemoComponentHeader from './../DemoComponentHeader';
import styles from "./home.scss";
import SideMenuBar from './SideMenuBar.js';
import sidemenubarData from "./sidemenubar.json";
import subHeader from "./subHeader.json";
import DemoFooter from './../DemoFooter';
import Navigation from './Navigation.js';
 import ReactIntroduction from './../Topics/ReactIntroduction.js';
// import ReactTools from './../Topics/ReactTools.js';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
export default class Home extends Component{
		constructor(args) {
        super(args);
        this.state = {
        	getdata: sidemenubarData,
        	getHeaderData: subHeader,
        	selectedTopicArray: '',
        	toggleArrow: true,
        	indexVal: [],
        	objTitle: {}
        };
    }

    componentDidMount(e) {
    	const {objTitle, getdata} = this.state;
    	let title = [];
    	console.log("componentDidMount", this.state.getdata)
    	getdata.map((item)=> {
    		return objTitle[item.title] = false;
    	});
    	console.log("objTitle", objTitle)
    }
    // backButton(e){
    // 	this.props.backClick();
    // }
    changeArrow(item, itemIndex) {
    	console.log("adhithya----", item, itemIndex);
        const {objTitle, toggleArrow} = this.state;
        if (this.state.objTitle[item] === true) {
            this.state.objTitle[item] = false;
            this.setState({objTitle: objTitle});
        } else {
            this.state.objTitle[item] = true;
            this.setState({objTitle: objTitle});
        }
        this.setState({toggleArrow: !toggleArrow})
    }

    selectedTopic(title, titleindex){
    	const {selectedTopicArray} = this.state;
    	this.setState({selectedTopicArray: ''});
    	this.state.selectedTopicArray = title;
    	this.setState({selectedTopicArray: title});

    }
    render() {
    	const {getdata, getHeaderData,  selectedTopicArray, toggleArrow, objTitle} = this.state;
    	let displayTopic = [], cardTopics = [], headerDetails = [], resultIdea = [];
    	
    	headerDetails = getHeaderData.map((item)=> {
    		return (
    			<div className="w3-col s2 m2 l2  w3-left header-div-header">
    			<p className="w3-center header-text-name">{item.name}</p>
    			</div>
    		);
    	});
    	displayTopic = getdata.map((item, itemIndex)=> {
    		let toggleSign = (this.state.objTitle[item.title] === true) ? "w3-hide" : '';
    		let arrowDown = (this.state.objTitle[item.title] === true)? "fa fa-chevron-up w3-right down-button" : "fa fa-chevron-down w3-right down-button";
    		return (
    			<div className="title-list">
    			<span className={`${arrowDown}`} 
    			onClick={this.changeArrow.bind(this, item.title, itemIndex)}
				style={{color: "#fff"}}>
				</span>
    			<p className="main-title">{item.title}</p>
    			<div className={`${toggleSign}`}>
    			{item.subTitles.map((title, index)=>{
    				return (
    					<div>
	    					<a className="main-title" onClick={this.selectedTopic.bind(this, title.name, index)}>
	    					<div className="title-list-sub">
	    						<p className="p-main-title">{title.name}</p>	
	    					</div>
	    					</a>
    					</div>
    				);
    			})}
    			</div>
    			</div>
    		);
    	});
    	cardTopics = getdata.map((item, index)=> {
    		return (
    			<div>
    			{item.subTitles.map((subtitle)=>{
    				return(
    					<div>
    					{subtitle.subCards.map((cards)=>{
    							if(this.state.selectedTopicArray === cards.CardTopic){
        							return (
            							<div className="w3-card-4 w3-col s5 m5 l5 card-pad">
                                        <Router>
                                        <div>
                                        <div>
                                        <Link to ={`/${item.title}`}>
        								    <img src="./src/assets/graphics js.gif"  style={{width: "100%"}} />
        								    <div className="w3-container w3-center card-text">
        								      <p className="p-text w3-right">{cards.CardDescription}</p>
        								    </div>
                                        </Link>
                                       </div>
                                       <div>
                                    </div>
                                        <Route exact={true} path="/" render= {() => {
                                           return <p>Welcome</p>;
                                           }} /> 
                                            <Route path="/Introduction" render= {() => {
                                           return  <ReactIntroduction/> ;
                                           }} />
                                        </div>
                                        </Router>
        								</div>
    								);
    							}
    					})}
    					</div>
    				);
    			})}
    			</div>
    		);
    	});
	    return (
	        <div className="learning-Home-Page">
	        <DemoComponentHeader />
	        <div className="w3-row sub-header" style={{height: "70px"}}>
	          <p className="w3-col s3 m3 l3 paragraph" style={{height: "60px"}}>Learning</p>
	          <div className="w3-col s9 m9 l9 w3-row sub-header-elements">
	          		{headerDetails}
	          		<img src="./src/assets/search-icon.svg" className="search-icon"/>
	          		<input style={{background: "#000", color: "#fff"}}
	          		className="w3-col s4 m4 l4 w3-left input-text w3-input" type="text" />
	          </div>
	          </div>
	          <SideMenuBar />
	          <div className="w3-row" style={{marginLeft: "4%"}}>
	          <div className="w3-col s3 m3 l3 sidemenubar-border">
	          		{displayTopic}
	          </div>
	          <div className="w3-col s9 m9 l9 working-border w3-padding w3-row">
	          	<p className="w3-padding topic-text">Latest Topics</p>
	          		{cardTopics}
	          </div>
	          </div>
              <Router>
              <div>
             
            </div>
            </Router>
	        </div>
	    );
    }

};