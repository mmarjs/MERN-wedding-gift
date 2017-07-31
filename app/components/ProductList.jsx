import React, { PropTypes, Component } from 'react';
var FontAwesome = require('react-fontawesome');
import Product from '../container/Product';
var {Link} = require('react-router');
import ProductDesc from '../container/ProductDesc';
import { Row, Column } from 'react-foundation/lib/components/grid.js';
import {SideMenu, Item} from 'react-sidemenu';
import ReactDOM from 'react-dom';
import BrowseGiftsSubNav from 'BrowseGiftsSubNav';
import {Pagination,PaginationPrevious,PaginationItem,PaginationNext,PaginationEllipsis,Inline} from 'react-foundation';
var images = require('../images/asset4.png');
import { SideNav, Chevron, Icon } from 'react-side-nav';
//import 'react-checkbox-tree/lib/react-checkbox-tree.css';
var FontAwesome = require('react-fontawesome');
import Slider from 'react-rangeslider';
require ('style!css!react-rangeslider/lib/index.css');
import { CirclePicker } from 'react-color';
import Select from 'react-select';
require('style!css!react-select/dist/react-select.css');
var Asset39 = require('../images/Asset39.png');

var options = [
  { value: 'one', label: 'Material' },
  { value: 'two', label: 'Two' }
];

var sort = [
  { value: 'one', label: 'High to Low' },
  { value: 'two', label: 'Low to High' }
];

const menuItems = [
  { id: 1,
    label: 'Kitchen',
    icon: 'fa-battery-half',
    items: [
      { id: 11,
        label: 'Dining',
        icon: 'fa-car',
        link: '/item11',
      },
      { id: 12,
        label: 'Experience',
        icon: 'fa-bullhorn',
        link: '/item12',
      },
      { id: 13,
        label: 'Assesories Experience',
        icon: 'fa-bullhorn',
        link: '/item12',
      },
      { id: 14,
        label: 'Beauty & Grooming',
        icon: 'fa-bullhorn',
        link: '/item12',
      },
      { id: 15,
        label: 'Must haves',
        icon: 'fa-bullhorn',
        link: '/item12',
      },
    ]},
    {id: 2,
      label: 'Dining',
      icon: 'fa-battery-half',
      items: [
        { id: 21,
          label: 'Experience',
          icon: 'fa-bullhorn',
          link: '/item12',
        },
        { id: 22,
          label: 'Assesories Experience',
          icon: 'fa-bullhorn',
          link: '/item12',
        },
      ]},
      {id: 3,
        label: 'Experience',
        icon: 'fa-bullhorn',
        link: '/item12',
  },
      {id: 4,
        label: 'Accessories',
        icon: 'fa-bullhorn',
        link: '/item12',
    },
    {id: 5,
      label: 'Beauty & Grooming',
      icon: 'fa-bullhorn',
      link: '/item12',
    },
    {id: 6,
      label: 'Must Haves',
      icon: 'fa-bullhorn',
      link: '/item12',
    },
    {id: 7,
      label: 'NuWed Kits',
      icon: 'fa-bullhorn',
      link: '/item12',
    }
];

const NavLink = props => (
  <Link to={props.to} {...props}>
    <i className={`fa ${props.icon}`} />{props.label}
  </Link>
);

class ProductList extends Component {

    constructor(props, context) {
      super(props, context);
      this.state = {
        pricerange: 0
      }
    }

    componentDidMount() {
      this.props.fetchproduct();
    }


    handleOnChange = (value) => {
      this.setState({
        pricerange: value
      });
    }

    logChange = (val) => {
      console.log("Selected: " + val);
    }

    render() {
      let { pricerange } = this.state;
      let { products, id } = this.props;
      if (!products) {
        products = [];
      }
      console.log(this.props);

    return (
        <div>
            <BrowseGiftsSubNav/>
            <Row style={{marginTop:"5%"}}>
              <span style={{paddingLeft:"40px"}}><img src={Asset39}/>Refine</span><button isHollow onClick={this.handleSubmit} style={{border:"1px solid grey",padding:"7px 20px 7px 20px",borderRadius:"20px", color:"grey",marginLeft:"3%"}}>Apply</button>
              <Column medium={2} className="product_desc_sidebar">
                <p style={{textAlign:"right",color:"#58b9b0", paddingTop:"2px"}}>Clear All</p>
                <div style={{marginLeft:"2.5em",fontWeight:"bold"}}>Categories</div>
                <SideNav
                    items={menuItems}
                    linkComponent={NavLink}
                    chevronComponent={Chevron}
                    iconComponent={Icon}
                  />
                <div style={{marginLeft:"2.5em",marginBottom:"10px"}}>Price</div>
                  <Slider
                    min={0}
                    max={12000}
                    value={pricerange}
                    orientation="horizontal"
                    onChange={this.handleOnChange}
                    className="circle-picker"
                    circleSize="15"
                  />
                <div style={{marginLeft:"2.5em",marginBottom:"10px"}}>Specify Range</div>
                <Select
                          name="form-field-name"
                          value="one"
                          options={options}
                          onChange={this.logChange}
                />
                <div style={{marginLeft:"2.5em",marginBottom:"10px"}}>Brand</div>
                <div style={{marginLeft:"2.5em",marginBottom:"10px"}}>Color</div>
                <CirclePicker style/>

              </Column>
              <Column small={12} medium={10}>
              <Row style={{marginLeft:"50%",marginRight:"10%"}} upOnSmall={2} >
                <Column isColumn small={2}>
                  <div style={{textAlign:"right",paddingTop:"10px"}}>SORT:</div>
                </Column>
                <Column isColumn small={10} style={{marginTop:0}}>
                            <Select
                            name="form-field-name"
                            value="one"
                            options={sort}
                            onChange={this.logChange}
                            />
                </Column>
              </Row>
                <ul className="product-list">
                  {products.map(product => (
                      <li key={product.id} className="product-list__item" onClick={() => {this.props.viewProduct(product),this.context.router.push('ProductDesc')}}>
                        <Product {...product}/>
                      </li>
                  ))}
                </ul>
              </Column>
            </Row>
            <div className="pagination-center-example" style={{marginTop:"5em"}}>
              <Pagination aria-label="Pagination" isCentered>
                <PaginationPrevious isDisabled>Previous <Inline showForSr>page</Inline></PaginationPrevious>
                <PaginationItem isCurrent><Inline showForSr>You're on page</Inline> 1</PaginationItem>
                <PaginationItem><a aria-label="Page 2">2</a></PaginationItem>
                <PaginationItem><a aria-label="Page 3">3</a></PaginationItem>
                <PaginationItem><a aria-label="Page 4">4</a></PaginationItem>
                <PaginationEllipsis/>
                <PaginationItem><a aria-label="Page 12">12</a></PaginationItem>
                <PaginationItem><a aria-label="Page 13">13</a></PaginationItem>
                <PaginationNext><a aria-label="Next page">Next <Inline showForSr>page</Inline></a></PaginationNext>
              </Pagination>
            </div>
            <h5 style={{color:"red", marginTop:"3em",textAlign:"center"}}> Similar Products</h5>
            <img src={require('../images/asset4.png')} style={{marginLeft:"40%",marginBottom:"3em"}}/>
            <div className="grid-block-example">
                <Row upOnSmall={1} upOnMedium={5} upOnLarge={5}>
                  <Column isColumn>
                    <Product/>
                      <div className="caption">
                          <div>Sessel Little</div>
                          <div>Installa on: Amazon will raise an installa on</div>
                          <div className="product__price">500 INR</div>
                      </div>
                  </Column>
                  <Column isColumn className="caption">
                    <Product/>
                      <div>Sessel Little</div>
                      <div>Installa on: Amazon will raise an installa on</div>
                      <div className="product__price">500 INR</div>
                  </Column>
                  <Column isColumn className="caption">
                    <Product/>
                      <div>Sessel Little</div>
                      <div>Installa on: Amazon will raise an installa on</div>
                      <div className="product__price">500 INR</div>
                  </Column>
                  <Column isColumn className="caption">
                    <Product/>
                      <div>Sessel Little</div>
                      <div>Installa on: Amazon will raise an installa on</div>
                      <div className="product__price">500 INR</div>
                  </Column>
                  <Column isColumn className="caption">
                    <Product/>
                      <div>Sessel Little</div>
                      <div>Installa on: Amazon will raise an installa on</div>
                      <div className="product__price">500 INR</div>
                  </Column>
                </Row>
            </div>
            <h5 style={{color:"red", marginTop:"3em",textAlign:"center"}}> Starter Kits</h5>
            <img src={require('../images/asset4.png')} style={{marginLeft:"40%",marginBottom:"10em"}}/>
        </div>
    );
}
}

ProductList.contextTypes = {
router: React.PropTypes.object.isRequired
};

ProductList.propTypes = {
    products: PropTypes.array,
    id: PropTypes.number.isRequired,

}

export default ProductList;
