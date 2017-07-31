import React, { PropTypes, Component } from 'react';
var {Link} = require('react-router');
import { Row, Column } from 'react-foundation/lib/components/grid.js';
import ReactDOM from 'react-dom';
var images = require('../images/asset4.png');
import Product from '../container/Product'
import BrowseGiftsSubNav from 'BrowseGiftsSubNav';
var Asset32 = require('../images/Asset32.png');
var Asset33 = require('../images/Asset33.png');
var Asset34 = require('../images/Asset34.png');
var Asset35 = require('../images/Asset35.png');
var Asset36 = require('../images/Asset36.png');

const NavLink = props => (<Link to={props.to} {...props}><i className={`fa ${props.icon}`} />{props.label}</Link>);

class BrowseGifts extends Component {

    render(){

    return (
        <div>
            <BrowseGiftsSubNav/>
            <div className="newaddition">
              <div>New Addition</div>
              <img src={Asset32} style={{width:"30%"}}/>
            </div>
            <Row upOnSmall={1} upOnMedium={3} upOnLarge={3} className="newaddition-images">
                  <Column isColumn centerOnSmall style={{paddingRight:"1px"}}>
                    <img src={require('../images/Asset8.png')} style={{height: "20%"}}/>
                    <p>Wooden Long Table</p>
                  </Column>
                  <Column isColumn centerOnSmall style={{paddingRight:"1px"}}>
                    <img src={require('../images/Asset10.png')} style={{height: "20%"}}/>
                    <p>Wooden Spatulas Set of 6</p>
                  </Column>
                  <Column isColumn centerOnSmall style={{paddingRight:"1px"}}>
                    <img src={require('../images/Asset9.png')} style={{height: "20%"}}/>
                    <p>Wall Cupboards</p>
                  </Column>
             </Row>
             <p style={{textAlign:"center", paddingTop:"2em",color:"#ae573c"}}>more ></p>
             <div className="trending">
               Trending
             </div>
            <div className="grid-block-example">
                <Row upOnSmall={1} upOnMedium={4} upOnLarge={4}>
                  <Column isColumn>
                    <Product name={'Sessel Little'} price={'500'} currency={'INR'}/>
                  </Column>
                  <Column isColumn>
                    <Product name={'Sessel Little'} price={'500'} currency={'INR'}/>
                  </Column>
                  <Column isColumn>
                    <Product name={'Sessel Little'} price={'500'} currency={'INR'}/>
                  </Column>
                  <Column isColumn>
                    <Product name={'Sessel Little'} price={'500'} currency={'INR'}/>
                  </Column>
                </Row>
            </div>
            <div style={{borderBottom:"1px solid #ae573c",width:"30%",marginLeft:"35%",marginTop:"5%"}}>

            </div>
            <p style={{textAlign:"center", paddingTop:"1em",color:"#ae573c"}}>more ></p>
            <img src={Asset33}/>
            <div className="grid-block-example">
                  <Row upOnSmall={1} upOnMedium={4} upOnLarge={4}>
                    <Column isColumn>
                      <Product name={'Sessel Little'} price={'500'} currency={'INR'}/>
                    </Column>
                    <Column isColumn>
                      <Product name={'Sessel Little'} price={'500'} currency={'INR'}/>
                    </Column>
                    <Column isColumn>
                      <Product name={'Sessel Little'} price={'500'} currency={'INR'}/>
                    </Column>
                    <Column isColumn>
                      <Product name={'Sessel Little'} price={'500'} currency={'INR'}/>
                    </Column>
                  </Row>
              </div>
              <div style={{borderBottom:"1px solid #ae573c",width:"30%",marginLeft:"35%",marginTop:"5%"}}>

              </div>
              <p style={{textAlign:"center", paddingTop:"1em",paddingBottom:"5em",color:"#ae573c"}}>more ></p>
                <div className="recommended">
                  <div>Recommended</div>
                </div>
                <Row upOnSmall={1} upOnMedium={3} upOnLarge={3} className="newaddition-images">
                      <Column isColumn centerOnSmall style={{paddingRight:"1px"}}>
                        <img src={Asset34}/>
                      </Column>
                      <Column isColumn centerOnSmall style={{paddingRight:"1px"}}>
                        <img src={Asset35}/>
                      </Column>
                      <Column isColumn centerOnSmall style={{paddingRight:"1px"}}>
                        <img src={Asset36}/>
                      </Column>
                 </Row>
                 <div style={{borderBottom:"1px solid #ae573c",width:"30%",marginLeft:"35%",marginTop:"5%"}}>

                 </div>
                 <p style={{textAlign:"center", paddingTop:"1em",paddingBottom:"10%", color:"#ae573c"}}>more ></p>
        </div>
    );
}
}

BrowseGifts.contextTypes = {
router: React.PropTypes.object.isRequired
};


export default BrowseGifts;
