const CREATE_BRIDECOUPLE = 'create/BRIDECOUPLE'
const CREATE_GROOMCOUPLE = 'create/GROOMCOUPLE'
import configure from '../store/configureStore';
import axios from 'axios';

//axios.defaults.headers.common['Authorization'] = store.getState().accounts.user.authToken;
import {browserHistory} from 'react-router';


export function bridecouplecreate(id) {
    return function(dispatch){

      return axios.post('http://6764e80f.ngrok.io/couples',
        {
          'groomId': id
        })
        .then((response) => {
          console.log(response.data.data),
        //  console.log(store.getState().accounts.user.authToken)
          dispatch ({
              type: CREATE_BRIDECOUPLE,
              payload: response.data.data
          });
        })
        .catch((error) => {
          console.log(error);
      })
    }
};

export function groomcouplecreate(id) {
    return function(dispatch){
      return axios.post('http://6764e80f.ngrok.io/couples',
      {
        'brideId': id
      }
    )

        .then((response) => {
          console.log(response.data.data),
          console.log(store.getState().accounts.user.authToken)
          dispatch ({
              type: CREATE_GROOMCOUPLE,
              payload: response.data.data
          });
        })
        .catch((error) => {
          console.log(error);
      })
    }
  };
