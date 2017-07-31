import React, { Component, PropTypes } from 'react';
//import ProductDesc from '../components/ProductDesc';

class Product extends Component {


    render() {
        const { name, price, image,desc } = this.props;
        var images = require('../images/01.jpg');
        const underline=require('../images/Asset22.png');
        return (
            <div className="product">
                <img src={images} alt="product" style={{height:"60%",width:"60%"}}/>
                <img src={underline} style={{height:"60%",width:"60%"}}/>
                <div className="caption">
                    <div>{name}</div>
                    <div>{desc}</div>
                    <div className="product__price">{price} INR</div>
                </div>
            </div>

        );
    }
}

Product.contextTypes = {
router: React.PropTypes.object.isRequired
};

Product.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number,
    currency: PropTypes.string,
    image: PropTypes.string,
    isInCart: PropTypes.bool.isRequired,
    addToCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired,
}

export default Product;
