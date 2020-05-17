import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import {
  loadSuccess,
  loadFailure,
  purchaseRequest,
  purchaseSuccess,
  purchaseFailure,
  sellRequest,
  sellSuccess,
  sellFailure,
  btcBalanceSuccess,
  btcBalanceFailure,
} from './actions';

// btcBalance

export function* loadbtcBalance() {
  try {
    const response = yield call(api.get, '/btc');

    const btcBalance = response.data.reduce(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (a: number, b: any) => a + (b.purchasedBtcAmount || 0),
      0,
    );

    yield put(btcBalanceSuccess(btcBalance.toFixed(6)));
  } catch (err) {
    yield put(btcBalanceFailure());
  }
}

// BtcPrice

export function* loadBtcPrice() {
  try {
    const response = yield call(api.get, '/btc/price');

    yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}

// Purchase

export function* purchaseBtc(action: ReturnType<typeof purchaseRequest>) {
  try {
    const response = yield call(api.post, '/btc/purchase', {
      amount: action.payload,
    });
    const { data } = response;
    console.log('data', data);
    // yield put(purchaseSuccess(data.balance));
  } catch (err) {
    yield put(purchaseFailure());
  }
}

// Sell

export function* sellBtc(action: ReturnType<typeof sellRequest>) {
  try {
    const response = yield call(api.post, '/btc/sell', {
      amount: action.payload,
    });
    const { data } = response;
    console.log('data', data);
    // yield put(sellSuccess(data.balance));
  } catch (err) {
    yield put(sellFailure());
  }
}
