var React = require('react');
import { Row, Column } from 'react-foundation/lib/components/grid.js';
var ReactDOM = require('react-dom');
var {Link, IndexLink} = require('react-router');
var Carousel = require('nuka-carousel');
var NavLogin = require('NavLogin');
var Footer = require('Footer');
var slider1 = require('../images/slider1.png');
var slider2 = require('../images/slider2.png');
var slider3 = require('../images/slider3.png');
var asset1 = require('../images/asset1.png');
var asset2 = require('../images/asset2.png');
var asset3 = require('../images/asset3.png');
var asset4 = require('../images/asset4.png');
var Asset18 = require('../images/Asset18.png');
var Asset19 = require('../images/Asset19.png');

var HomePage = React.createClass({
  mixins: [Carousel.ControllerMixin],
  render:function() {
    return(
      <div>
        <div>
          <Carousel small-12 medium-12 large-12>
            <div className="slider1">
              <img src={slider1}/>
              <div className="box">
                <h4>Help your family & friends <br />bring a more meaningful <br />start to your new journey</h4>
                <h5>Making wedding gifts Convenient, Meaningful & Relevant</h5>
              </div>
              <div className="wishlistbutton small-centered medium-1 large-1">
                <button className="button">Make Your Wishlist</button>
              </div>
            </div>
            <div className="slider1">
              <img src={slider2}/>
              <div className="box">
                <h4>Make their day special <br />by making their wish come <br />true.</h4>
                <h5>Wedding is day is special, and now you can make it awesome</h5>
              </div>
              <div className="wishlistbutton small-centered medium-1 large-1">
                <button className="button">Find a Couple</button>
              </div>
            </div>
            <div className="slider1">
              <img src={slider3}/>
              <div className="box">
                <h4>Save the headache of making <br />them choose the perfect gift <br />for you.</h4>
                <h5>See your wishes come true by the people who matter.</h5>
              </div>
              <div className="wishlistbutton small-centered medium-1 large-1">
                <button className="button">Make Your Wishlist</button>
              </div>
            </div>
         </Carousel>
       </div>

        <div className="homepage">
            <Row upOnSmall={1} upOnMedium={3} upOnLarge={3} className="threeimages">
              <Column isColumn offsetOnLarge={3} offsetOnMedium={3} centerOnSmall centerOnLarge centerOnMedium >
                  <img src={asset1}/>
              </Column>
              <Column isColumn centerOnSmall>
                  <img src={asset2}/>
              </Column>
              <Column isColumn centerOnSmall>
                  <img src={asset3}/>
              </Column>
            </Row>
            <h3 style={{color:"red", marginTop:"3em"}}> NUWED Gifts Kits</h3>
            <img src={require('../images/asset4.png')}/>
              <Row upOnSmall={1} upOnMedium={2} upOnLarge={2} align-center className="row1">
                <Column isColumn centerOnSmall centerOnLarge centerOnMedium >
                    <img src={require('../images/Asset6.png')}/>
                </Column>
                <Column isColumn centerOnSmall>
                    <img src={require('../images/Asset7.png')}/>
                </Column>
              </Row>
              <Row upOnSmall={1} upOnMedium={3} upOnLarge={3} className="row2">
                    <Column isColumn centerOnSmall>
                      <img src={require('../images/Asset8.png')} style={{height: "20%"}}/>
                    </Column>
                    <Column isColumn centerOnSmall>
                      <img src={require('../images/Asset9.png')} style={{height: "20%"}}/>
                    </Column>
                    <Column isColumn centerOnSmall>
                      <img src={require('../images/Asset10.png')} style={{height: "20%"}}/>
                    </Column>
               </Row>
               <p><Link to='/products' activeClassName="active" activeStyle={{fontWeight: 'bold'}}>See More ></Link></p>
              </div>
              <div className="redbanner">
                <Row upOnSmall={1} upOnMedium={2} upOnLarge={2}>
                      <Column isColumn centerOnSmall>
                        <img src={require('../images/Asset11.png')} style={{height: "20%"}}/>
                        <h3>Manage on the Move</h3>
                        <p1>Take Control from Web and mobile device</p1>
                      </Column>
                      <Column isColumn centerOnSmall>
                        <img src={require('../images/Asset12.png')} style={{height: "20%"}}/>
                        <h3>On Demand Gifts with Nuwed</h3>
                        <p1 style={{paddingRight:"40%"}}>Submit request for special gi s, not listed on our website and our team will try their best to get it listed in your wishlist.</p1>
                      </Column>
                 </Row>
              </div>
              <div className="handpicked">
                <div className="handpickedgallery">
                  <h6> Handpicked </h6>
                  <Carousel slidesToShow = {3} cellSpacing={30} slidesToScroll={3} >
                   <img src={Asset18}/>
                   <img src={Asset18}/>
                   <img src={Asset18}/>
                   <img src={Asset18}/>
                   <img src={Asset18}/>
                   <img src={Asset18}/>
                 </Carousel>
                 <p>See more ></p>
                </div>
             </div>
              <div className="startbutton small-centered medium-1 large-1">
                <button className="button" style={{marginTop:"50%",marginBottom:"50%"}}>Start Now</button>
              </div>
        </div>
    );
  }
});

module.exports = HomePage;
