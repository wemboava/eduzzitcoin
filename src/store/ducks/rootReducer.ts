import { combineReducers } from 'redux';

import extract from './extract';
import balance from './balance';
import btc from './btc';
import history from './history';
import volume from './volume';

export default combineReducers({
  extract,
  balance,
  btc,
  history,
  volume,
});
