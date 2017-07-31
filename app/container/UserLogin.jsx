import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import UserLogin from '../components/UserLogin';
import { getAccounts } from '../reducers/accountsReducer';
import {fetchAccount} from '../actions/accountAction';

const mapStateToProps = (state, props) => {
    return {
        //accounts: state.accounts
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchAccount:(response) => dispatch(fetchAccount(response))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);
