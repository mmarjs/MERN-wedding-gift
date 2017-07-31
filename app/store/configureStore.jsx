var redux = require('redux');
import thunk from 'redux-thunk';
//import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import productsData from '../data/products';
import productsReducer from '../reducers/productsReducer';
import cartReducer from '../reducers/cartReducer';
import descProductReducer from '../reducers/descProductReducer';
import accountsReducer from '../reducers/accountsReducer';
import accountsData from '../data/accounts';
import ourStoryReducer from '../reducers/ourStoryReducer';

// const client = axios.create({ //all axios can be used, shown in axios documentation
//   baseURL:'http://localhost:8080/api',
//   responseType: 'json'
// });

export var configure = () => {
  const reducer = redux.combineReducers({
    cart: cartReducer,
    products: productsReducer,
    descProduct: descProductReducer,
    accounts: accountsReducer,
    ourStory: ourStoryReducer
  });

  const store = redux.createStore(reducer, {
      //  products: productsData,
      //  accounts: accountsData
    },
    redux.compose(redux.applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
