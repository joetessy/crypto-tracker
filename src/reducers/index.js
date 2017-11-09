import { combineReducers } from 'redux';
import CryptoReducer from './crypto_reducer';

export default combineReducers({
  crypto: CryptoReducer
});
