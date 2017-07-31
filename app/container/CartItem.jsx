import { connect } from 'react-redux';
import CartItem from '../components/CartItem';
import { addToCart, removeFromCart} from '../actions/cartAction';
import { isInCart } from '../reducers/cartReducer';

const mapStateToProps = (state, props) => {
    return {
        isInCart: isInCart(state, props)
    }
}

const mapDispatchToProps = (dispatch) => ({
    addToCart: (id) => dispatch(addToCart(id)),
    removeFromCart: (id) => dispatch(removeFromCart(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
