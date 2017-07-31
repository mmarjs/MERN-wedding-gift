var React = require('react');
var {Link, IndexLink} = require('react-router');
var FontAwesome = require('react-fontawesome');
const logo = require('../images/logo.png');
var Asset13 = require('../images/Asset13.png');
var Asset14 = require('../images/Asset14.png');
var Asset15 = require('../images/Asset15.png');
var Asset16 = require('../images/Asset16.png');
var Asset17 = require('../images/Asset17.png');
import { Row, Column } from 'react-foundation/lib/components/grid.js';
var Footer = React.createClass({

  render: function() {
    return(

      <div className="footer">
        <Row upOnSmall={1} upOnMedium={5} upOnLarge={5}>
          <Column isColumn centerOnSmall style={{width:"20%"}}>
            <ul className="no-bullet">
              <img src={logo}/>
              <Row style={{paddingTop:"10%"}}>
                <img src={Asset13} style={{padding:"3%"}}/>
                <img src={Asset14} style={{padding:"3%"}}/>
                <img src={Asset15} style={{padding:"3%"}}/>
              </Row>
              <li>#BadGiftsArePasse’</li>
              <li>#WhereWishesComeTrue</li>
            </ul>
          </Column>
          <Column isColumn centerOnSmall style={{width:"20%"}}>
            <ul className="no-bullet">
              <h5 style={{marginTop:"15%"}}>Work With Us</h5>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Partners as Vendors</a></li>
            </ul>
          </Column>
          <Column isColumn centerOnSmall style={{width:"20%"}}>
            <ul className="no-bullet">
              <h5 style={{marginTop:"15%"}}>Get to know Us</h5>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Press Release</a></li>

            </ul>
          </Column>
          <Column isColumn centerOnSmall style={{width:"20%"}}>
            <ul className="no-bullet">
              <h5 style={{marginTop:"15%"}}>Need Help?</h5>
              <li><a href="#">Your Account</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Order Status</a></li>
            </ul>
          </Column>
          <Column isColumn centerOnSmall style={{width:"20%"}}>
            <ul className="no-bullet">
              <h5 style={{marginTop:"15%"}}>Contact</h5>
              <li>32, HSR Layout,</li>
              <li>Bangalore-560087</li>
                <li><a href="#">support@nuwed.in</a></li>
                <li><a href="#">+91 8877556600</a></li>
            </ul>
          </Column>
        </Row>
        <div className="copyright">
          © 2018 Wishing Wells Pvt Ltd.
        </div>
      </div>
    );
  }
});

module.exports = Footer;
