import { combineReducers } from 'redux';

import extract from './extract';
import balance from './balance';
import btc from './btc';
import history from './history';
import volume from './volume';
import successModal from './successModal';

export default combineReducers({
  extract,
  balance,
  btc,
  history,
  volume,
  successModal,
});
