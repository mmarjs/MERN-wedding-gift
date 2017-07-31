import { connect } from 'react-redux';
import ProductList from '../components/ProductList';
import { getProducts, getDescProduct } from '../reducers/productsReducer';
import { viewProduct } from '../actions/descProductAction';
import {bindActionCreators} from 'redux';
import {fetchproduct} from '../actions/products';

const mapStateToProps = (state, props) => {
    return {
      products: state.products
    };
}

const mapDispatchToProps = (dispatch) => ({
  //  return bindActionCreators({viewProduct: viewProduct}, dispatch);
   viewProduct: (product) => dispatch(viewProduct(product)),
   fetchproduct: () => dispatch(fetchproduct())
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
