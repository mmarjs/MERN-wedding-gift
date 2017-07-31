import { connect } from 'react-redux';
import ProductDesc from '../components/ProductDesc';
import { addToCart, removeFromCart} from '../actions/cartAction';
import { isInCart } from '../reducers/cartReducer';
//import { product } from '../reducers/productsReducer';
//import { descProduct } from '../reducers/descProductReducer';
//import { descProductReducer } from '../reducers/descProductReducer';


const mapStateToProps = (state, props) => {
    return {
      product: state.descProduct,
      isInCart: isInCart(state, props)
    }
}

const mapDispatchToProps = (dispatch) => ({
    addToCart: (id) => dispatch(addToCart(id)),
    removeFromCart: (id) => dispatch(removeFromCart(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductDesc);
