var React = require('react');
var ReactDOM = require('react-dom');
var Footer = require('Footer');
var OurStory = require('OurStory');
var HomePage = require('HomePage');
var NavLogin = require('NavLogin');
//import './assets/css/fonts.css';

var Main = (props) => {
    return(
      <div>
        <NavLogin/>
        <div className="row">
            {props.children}
        </div>
        <Footer/>
      </div>

    );

  }

module.exports = Main;
