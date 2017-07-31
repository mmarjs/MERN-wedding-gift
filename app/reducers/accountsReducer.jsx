const FETCH_ACCOUNT = 'account/FETCH';
import axios from 'axios';

export default function accountsReducer(state = [], action = {}) {

  switch (action.type) {
      case FETCH_ACCOUNT:
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + action.payload.user.authToken;
        axios.defaults.headers.common['Content-Type'] = 'application/json';
         return action.payload;
         break;
    }
          return state;
}
