import { all, takeLatest } from 'redux-saga/effects';

import { ExtractTypes } from './extract/types';
import { BalanceTypes } from './balance/types';
import { BtcTypes } from './btc/types';

import { load } from './extract/sagas';
import { loadBalance } from './balance/sagas';
import { loadBtcPrice } from './btc/sagas';

export default function* rootSaga() {
  return (
    yield all([takeLatest(ExtractTypes.LOAD_REQUEST, load)]),
    yield all([takeLatest(BalanceTypes.LOAD_REQUEST, loadBalance)]),
    yield all([takeLatest(BtcTypes.LOAD_REQUEST, loadBtcPrice)])
  );
}
