const CREATE_BRIDECOUPLE = 'create/BRIDECOUPLE'
const CREATE_GROOMCOUPLE = 'create/GROOMCOUPLE'
import axios from 'axios';
//var store = require('configureStore').configure();


export default function ourStoryReducer(state = [], action = {}) {

  switch (action.type) {
      case CREATE_BRIDECOUPLE:

          return action.payload;
          break;
      case CREATE_GROOMCOUPLE:
          return action.payload;
          break;
    }
          return state;
}
