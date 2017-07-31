import React, { PropTypes, Component } from 'react';
import ReactDom from 'react-dom';
const wishlistimage = require('../images/01.jpg');
import { Row, Column } from 'react-foundation/lib/components/grid.js';
//@import "node_modules/react-image-gallery/styles/scss/image-gallery.scss";
import ImageGallery from 'react-image-gallery';
import Product from '../container/Product';

import BrowseGiftsSubNav from 'BrowseGiftsSubNav';

class ProductDesc extends Component {
  handleClick = () => {
    const { product, addToCart, removeFromCart, isInCart } = this.props;
    console.log(this.props.product.id)
    const id = product.id;
      if (isInCart) {
          removeFromCart(id);
      } else {
          addToCart(id);
      }
  }

  render() {

    const images = [
      {
        original: wishlistimage,
        thumbnail: wishlistimage,
      },
      {
        original: wishlistimage,
        thumbnail: wishlistimage,
      },
      {
        original: wishlistimage,
        thumbnail: wishlistimage,
      },
      {
        original: wishlistimage,
        thumbnail: wishlistimage,
      },

    ]

    const { product, isInCart } = this.props;
    console.log(isInCart);
    if (!this.props){
      return(
        <h2>Nothing to display</h2>
      );
    }
    return (

      <div>
        <BrowseGiftsSubNav/>
        <Row style={{margin:"5em"}}>
          <Column small={12} medium={5}>
            <ImageGallery className="gallery"
              items={images}
              slideInterval={2000}
              disableArrowKeys = "true"
              onImageLoad={this.handleImageLoad}/>
          </Column>
         <Popup />
          <Column small={12} medium-offset={1} medium={5}>
            <p className="productname"> {product.name} </p>
            <p className="productdesc"> {product.description}</p>
            <p className="product_price"> {product.currency} {product.price}</p>
            <p>Delivery By : 28th May, 2017</p>
            <p>Lead Time for Dispatch : 5 Days</p>

              <div>
                          <button style={{ backgroundColor: "red", marginTop:"3em"}}
                              className={isInCart ? 'button' : 'button'}
                              onClick={this.handleClick}
                          >
                              {isInCart ? 'Remove' : 'Add to Wishlist'}
                          </button>
              </div>
              <p>{product.detailedDescription}</p>
          </Column>
          </Row>
          <div style={{marginBottom:"5em",alingItems:"center",textAlign:"center"}}>
            <h3 style={{color:"red", marginTop:"3em"}}> Similar Products</h3>
            <img src={require('../images/asset4.png')} style={{marginBottom:"3em"}}/>
            <div className="grid-block-example">
                <Row upOnSmall={1} upOnMedium={4} upOnLarge={4}>
                  <Column isColumn>
                    <Product/>
                          <div>Sessel Little</div>
                          <div>Installa on: Amazon</div>
                          <div className="product__price">500 INR</div>
                  </Column>
                  <Column isColumn>
                    <Product/>
                      <div>Sessel Little</div>
                      <div>Installa on: Amazon</div>
                      <div className="product__price">500 INR</div>
                  </Column>
                  <Column isColumn>
                    <Product/>
                      <div>Sessel Little</div>
                      <div>Installa on: Amazon</div>
                      <div className="product__price">500 INR</div>
                  </Column>
                  <Column isColumn>
                    <Product/>
                      <div>Sessel Little</div>
                      <div>Installa on: Amazon</div>
                      <div className="product__price">500 INR</div>
                  </Column>
                </Row>
            </div>
          </div>


        <div style={{marginBottom:"5em",alingItems:"center",textAlign:"center"}}>
          <h3 style={{color:"red", marginTop:"3em"}}> People Also Bought</h3>
          <img src={require('../images/asset4.png')} style={{marginBottom:"3em"}}/>
          <div className="grid-block-example">
              <Row upOnSmall={1} upOnMedium={4} upOnLarge={4}>
                <Column isColumn>
                  <Product/>
                        <div>Sessel Little</div>
                        <div>Installa on: Amazon</div>
                        <div className="product__price">500 INR</div>
                </Column>
                <Column isColumn>
                  <Product/>
                    <div>Sessel Little</div>
                    <div>Installa on: Amazon</div>
                    <div className="product__price">500 INR</div>
                </Column>
                <Column isColumn>
                  <Product/>
                    <div>Sessel Little</div>
                    <div>Installa on: Amazon</div>
                    <div className="product__price">500 INR</div>
                </Column>
                <Column isColumn>
                  <Product/>
                    <div>Sessel Little</div>
                    <div>Installa on: Amazon</div>
                    <div className="product__price">500 INR</div>
                </Column>
              </Row>
          </div>
        </div>

        </div>
    );
}
}
ProductDesc.propTypes = {
// id: PropTypes.number.isRequired,
// name: PropTypes.string.isRequired,
// price: PropTypes.number,
// currency: PropTypes.string,
// image: PropTypes.string,
// isInCart: PropTypes.bool.isRequired,
// addToCart: PropTypes.func.isRequired,
// removeFromCart: PropTypes.func.isRequired,
}

export default ProductDesc;
