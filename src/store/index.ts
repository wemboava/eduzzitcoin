import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension';

import { ExtractState } from './ducks/extract/types';
import { BalanceState } from './ducks/balance/types';
import { BtcState } from './ducks/btc/types';
import { HistoryState } from './ducks/history/types';
import { VolumeState } from './ducks/volume/types';
import { SuccessModalState } from './ducks/successModal/types';

import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';

export interface ApplicationState {
  extract: ExtractState;
  balance: BalanceState;
  btc: BtcState;
  history: HistoryState;
  volume: VolumeState;
  successModal: SuccessModalState;
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

export default store;
