import { connect } from 'react-redux';
import OurStory from '../components/OurStory';
//import { getAccounts } from '../reducers/accountsReducer';
import {bindActionCreators} from 'redux';
//import {fetchAccount} from '../actions/accountAction';
import {bridecouplecreate, groomcouplecreate} from '../actions/ourStoryAction';

const mapStateToProps = (state, props) => {
    return {

        accounts: state.accounts,

    };
}

const mapDispatchToProps = (dispatch) => ({
  //fetchAccount:(response) => dispatch(fetchAccount(response))

  bridecouplecreate: (id) => dispatch(bridecouplecreate(id)),
  groomcouplecreate: (id) => dispatch(groomcouplecreate(id))


})

export default connect(mapStateToProps, mapDispatchToProps)(OurStory);
