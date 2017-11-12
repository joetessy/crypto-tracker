import { FETCHING_DATA, FETCHING_DATA_FAIL, FETCHING_DATA_SUCCESS}
  from './../actions/fetch_coin_data.js';
import _ from 'lodash';

const initialState = {
  isFetching: false,
  data: null,
  hasError: false,
  errorMessage: null
};

export default function(state = initialState, action){
  Object.freeze(state);
  const nextState = _.merge({}, state);
  switch(action.type){
    case FETCHING_DATA:
      nextState.data = null;
      nextState.hasError = false;
      nextState.errorMessage = null;
      nextState.isFetching = true;
      break;
    case FETCHING_DATA_SUCCESS:
      nextState.isFetching = false;
      nextState.errorMessage = null;
      nextState.hasError = false;
      nextState.data = action.payload;
      break;
    case FETCHING_DATA_FAIL:
      nextState.data = null;
      nextState.isFetching = false;
      nextState.hasError = true;
      nextState.errorMessage = action.payload;
      break;
  }
  return nextState;
}
