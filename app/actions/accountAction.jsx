const FETCH_ACCOUNT = 'account/FETCH';
import axios from 'axios';
import {browserHistory} from 'react-router';

export function fetchAccount(accessToken) {
    return function(dispatch){
      return axios.post('http://6764e80f.ngrok.io/users',
        {
        'token': accessToken,
        'authType': 'facebook'
        })
        .then((response) => {
          console.log(response.data.data)
          dispatch ({
              type: FETCH_ACCOUNT,
              payload: response.data.data
          });
          browserHistory.push('/story');
        })
        .catch((error) => {
          console.log(error);
      })
    }
};
