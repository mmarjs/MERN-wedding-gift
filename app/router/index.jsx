
import React from 'react';
import {Route, Router, IndexRoute, browserHistory} from 'react-router';
import OurStory from '../container/OurStory';
import Main from 'Main';
import NavLogin from 'NavLogin';
import Wishlist from 'Wishlist';
import HomePage from 'HomePage';
import Publish from 'Publish';
import ProductDesc from '../container/ProductDesc';
import ProductList from '../container/ProductList';
import Cart from '../container/Cart';
import Login from '../container/UserLogin';
import Settings from 'Settings';
import Personalize from 'Personalize';
import AccountDetails from 'AccountDetails';
import PaymentGifts from 'PaymentGifts';
import BrowseGifts from 'BrowseGifts';
import Kits from 'Kits';

export default(
  <Router history={browserHistory}>
    <Route path="/" name='RouteName1' component={Main}>
      <Route name='story' path="story" component={OurStory}/>
      <Route name='wishlist' path="wishlist" component={Wishlist}/>
      <Route name='products' path="products" component={ProductList}/>
      <Route name='productdesc' path="productdesc" component={ProductDesc}/>
      <Route name='cart' path="cart" component={Cart}/>
      <Route name='login' path="login" component={Login}/>
      <Route name='publish' path="publish" component={Publish}/>
      <Route name='settings' path="settings" component={Settings}/>
      <Route name='personalize' path="personalize" component={Personalize}/>
      <Route name='accountdetails' path="accountdetails" component={AccountDetails}/>
      <Route name='paymentgifts' path="paymentgifts" component={PaymentGifts}/>
      <Route name='browsegifts' path="browsegifts" component={BrowseGifts}/>
      <Route name='kits' path="kits" component={Kits}/>
      <IndexRoute component={HomePage}/>
    </Route>
  </Router>
);
