import { all, takeLatest } from 'redux-saga/effects';

import { ExtractTypes } from './extract/types';
import { BalanceTypes, DepositTypes } from './balance/types';
import { BtcTypes } from './btc/types';
import { HistoryTypes } from './history/types';
import { VolumeTypes } from './volume/types';

import { load } from './extract/sagas';
import { loadBalance, deposit } from './balance/sagas';
import { loadBtcPrice } from './btc/sagas';
import { loadBtcHistory } from './history/sagas';
import { loadVolume } from './volume/sagas';

export default function* rootSaga() {
  return (
    yield all([takeLatest(ExtractTypes.LOAD_REQUEST, load)]),
    yield all([takeLatest(BalanceTypes.LOAD_REQUEST, loadBalance)]),
    yield all([takeLatest(DepositTypes.LOAD_REQUEST, deposit)]),
    yield all([takeLatest(BtcTypes.LOAD_REQUEST, loadBtcPrice)]),
    yield all([takeLatest(HistoryTypes.LOAD_REQUEST, loadBtcHistory)]),
    yield all([takeLatest(VolumeTypes.LOAD_REQUEST, loadVolume)])
  );
}
