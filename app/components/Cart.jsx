import React, { PropTypes } from 'react';
import {Button,Colors} from 'react-foundation';
import CartItem from '../container/CartItem';
import {browserHistory} from 'react-router';
import ProductList from 'ProductList';
var {Link} = require('react-router');

class Cart extends React.Component {
    handleClick = () => {
        this.context.router.push('/products');
    }
    render(){
      const { items, total, currency } = this.props;
    return (
        <div>
            <div className="cart">
                <div className="panel panel-default">
                      <div style={{marginLeft: "80%"}}>
                            <Button color={Colors.SECONDARY} isHollow className="giftbutton" onClick={this.handleClick.bind(this)}>Add Gifts</Button>
                      </div>
                    <div className="panel-body">
                        {items.length > 0 && (
                          <div>
                              Showing 1 out of {items.length}
                              <ul className="no-bullet">
                                  {items.map(item => (
                                    <li key={item.id}>
                                      <CartItem {...item} />
                                    </li>
                                  ))}
                              </ul>
                          </div>

                        )}
                        {items.length === 0 && (
                            <div className="alert alert-info" style={{marginLeft: "40%", fontSize:'20px', color:"green"}}>Wishlist is empty</div>
                        )}
                        {/* <div className="cart__total">Total: {total} {currency}</div> */}
                    </div>
                </div>
            </div>
        </div>
    );
  }
};

Cart.contextTypes = {
router: React.PropTypes.object.isRequired
};

Cart.propTypes = {
    items: PropTypes.array,
    total: PropTypes.number,
    currency: PropTypes.string,
};

export default Cart;
