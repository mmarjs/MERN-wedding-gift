var React = require('react');
import { Row, Column } from 'react-foundation/lib/components/grid.js';
var {Link} = require('react-router');
var OurStoryProfile = require('OurStoryProfile');
var SubNav = require('SubNav');
import ProductList from 'ProductList';
import {Button,Colors} from 'react-foundation';
import {browserHistory} from 'react-router';
import Cart from '../container/Cart';
import {Menu, MenuItem} from 'react-foundation';
const Asset29 = require('../images/Asset29.png');
const Asset30 = require('../images/Asset30.png');

const NavLink = props => (<Link to={props.to} {...props}><i className={`fa ${props.icon}`} />{props.label}</Link>);


class Wishlist extends React.Component {

      render(){
        return(
          <div>
                <SubNav/>
                <div className="row ourstory">
                    <div className="column small-centered medium-6 large-4">
                      <OurStoryProfile/>
                      <h3 style={{fontSize:'40px', color:"#58b9b0", paddingBottom:"0.5em", fontFamily:"Sacramento"}}>Akshay's & Saheli's Wishlist</h3>
                    </div>
                </div>
                <div className="row" style={{paddingTop: "5em", paddingBottom: "5em", paddingLeft: "5em"}}>
                    <div className= "column small-2 medium-2 large-2 verticalmenu">
                      <div>
                        <span style={{paddingLeft:"15px"}}>View &nbsp;&nbsp;&nbsp;<img src={Asset30}/><img src={Asset29}/></span>
                       <Menu isVertical className="menu-vertical-example" style={{paddingTop: "1em"}}>
                         <MenuItem><a>Summary</a></MenuItem>
                         <MenuItem><a>Completed</a></MenuItem>
                         <MenuItem><a>Left</a></MenuItem>
                         <MenuItem><a>Untouched</a></MenuItem>
                       </Menu>
                     </div>
                     <div className="menu-vertical-example" style={{paddingTop: "2em"}}>
                      <Menu isVertical>
                        <MenuItem><a>Categories</a></MenuItem>
                        <MenuItem><a>All</a></MenuItem>
                        <MenuItem><a>Furniture</a></MenuItem>
                        <MenuItem><a>Appliances</a></MenuItem>
                        <MenuItem><a>Electronics</a></MenuItem>
                        <MenuItem><a>Travel</a></MenuItem>
                      </Menu>
                    </div>
                    </div>
                    <div className = "column small-7 medium-7 large-7">
                      <Cart/>
                    </div>
                    <div className = "column small-3 medium-3 large-3">

                    </div>
                </div>
          </div>
        );
      }
  };


export default Wishlist;
