import React, { PropTypes, Component } from 'react';
const wishlistimage = require('../images/01.jpg');
import { Row, Column } from 'react-foundation/lib/components/grid.js';
import {Progress,Colors} from 'react-foundation';
var {Link, IndexLink} = require('react-router');

class CartItem extends Component {
  handleClick = () => {
      const { id, removeFromCart } = this.props;
              removeFromCart(id);
    }
  render() {
    const { name, price, currency } = this.props;

    return (
      <div className="cartitem row">
          <div className= "columns small-4 medium-3">
              <img src={wishlistimage} style={{height:"100px",width:"100% auto"}}/>
          </div>
          <div className= "columns small-8 medium-5">
              <p style={{fontSize:'20px',marginBottom:"0px"}}>{name}</p>
              <p style={{fontSize:'25px', color:"#58b9b0", paddingBottom:"0.5em"}}>{price} {currency}</p>
              <div className="progress-colors">
                  <Progress color={Colors.SECONDARY} tabIndex="0" min={0} max={100} value={25} valueText="25 percent"/>
              </div>
              <p style={{color:"green",marginLeft:"70%"}}> Rs. 5600 left</p>
          </div>
          <div className= "contribute small-7 medium-4 large-3 columns">
              <button className="conbutton">Contribute</button>
              <div className="edit" style={{paddingTop:"5%"}}>
                <ul className="menu">
                  <li>
                    <button>&nbsp; &nbsp; Edit &nbsp;</button>
                  </li>
                  <li>
                    <button onClick={this.handleClick}>Delete</button>
                  </li>
                </ul>
              </div>
          </div>
      </div>
    );
}
}
CartItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
}

export default CartItem;
