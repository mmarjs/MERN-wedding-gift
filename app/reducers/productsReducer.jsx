const FETCH_PRODUCT   = 'product/FETCH';

export default function productsReducer(state = [], action = {}) {

  switch (action.type) {
      case FETCH_PRODUCT:
          console.log(action.payload)
          return action.payload;
          break;
    }
          return state;
}


//selectors
export function getProducts(state, props) {
    return state.products;
}


export function getProduct(state, props) {
    return state.products.find(item => item.id === props.id);
}
