const FETCH_PRODUCT = 'product/FETCH';
import axios from 'axios';

export function fetchproduct() {
    return function(dispatch){
      return axios.get('http://69890a3b.ngrok.io/products?categoryId=94F44E3B-E0FA-48D1-82E8-E4C7BBCB3D6A')
      .then((response) => {
        console.log(response.data.data.products)
        dispatch ({
            type: FETCH_PRODUCT,
            payload: response.data.data.products
        });
      })
        .catch((error) => {
          console.log(error);
      })
    }
}
