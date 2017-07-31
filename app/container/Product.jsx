import { connect } from 'react-redux';
import Product from '../components/Product';
import { addToCart, removeFromCart} from '../actions/cartAction';
import { isInCart } from '../reducers/cartReducer';
import { getProducts, getDescProduct } from '../reducers/productsReducer';
import { viewProduct } from '../actions/descProductAction';

const mapStateToProps = (state, props) => {
    return {
        //isInCart: isInCart(state, props)
    }
}

const mapDispatchToProps = (dispatch) => ({
    addToCart: (id) => dispatch(addToCart(id)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    viewProduct: (user) => dispatch(viewProduct(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Product);
