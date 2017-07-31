const VIEW_PRODUCT = 'product/VIEW';
//import { getProduct } from '../reducers/productsReducer';

export default function (state = null, action) {
  switch (action.type) {
      case VIEW_PRODUCT:
          console.log(action.payload)
          return action.payload;
          break;
    }
          return state;
        //  console.log(action.payload, this.state)
}

//
// export function getDescProduct(state, props) {
//     return state.descProduct.product.map(id => getProduct(state, { id }));
// }
