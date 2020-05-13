import { combineReducers } from 'redux';

import extract from './extract';
import balance from './balance';
import btc from './btc';

export default combineReducers({
  extract,
  balance,
  btc,
});
