import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import {
  loadSuccess,
  loadFailure,
  purchaseRequest,
  purchaseFailure,
  sellRequest,
  sellFailure,
  btcBalanceSuccess,
  btcBalanceFailure,
} from './actions';

import { loadSuccess as loadBalance } from '../balance/actions';

import { extractLoadSuccess } from '../extract/actions';
import { openSuccessModal } from '../successModal/actions';

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
    yield call(api.post, '/btc/purchase', {
      amount: action.payload,
    });

    const balanceResponse = yield call(api.get, '/account/balance');
    yield put(loadBalance(balanceResponse.data.balance));

    const btcResponse = yield call(api.get, '/btc');
    const btcBalance = btcResponse.data.reduce(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (a: number, b: any) => a + (b.purchasedBtcAmount || 0),
      0,
    );
    yield put(btcBalanceSuccess(btcBalance.toFixed(6)));

    const extractResponse = yield call(api.get, '/extract');

    yield put(extractLoadSuccess(extractResponse.data));
    yield put(
      openSuccessModal({
        opened: true,
        message: 'Your purchase was successful!',
      }),
    );
  } catch (err) {
    yield put(purchaseFailure());
    yield put(
      openSuccessModal({
        opened: true,
        message: 'We had a problem, try again!',
        isError: true,
      }),
    );
  }
}

// Sell

export function* sellBtc(action: ReturnType<typeof sellRequest>) {
  try {
    yield call(api.post, '/btc/sell', {
      amount: action.payload,
    });

    const balanceResponse = yield call(api.get, '/account/balance');
    yield put(loadBalance(balanceResponse.data.balance));

    const btcResponse = yield call(api.get, '/btc');
    const btcBalance = btcResponse.data.reduce(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (a: number, b: any) => a + (b.purchasedBtcAmount || 0),
      0,
    );
    yield put(btcBalanceSuccess(btcBalance.toFixed(6)));

    const extractResponse = yield call(api.get, '/extract');
    yield put(extractLoadSuccess(extractResponse.data));

    yield put(
      openSuccessModal({
        opened: true,
        message: 'Your sell was successful!',
      }),
    );
  } catch (err) {
    yield put(sellFailure());
    yield put(
      openSuccessModal({
        opened: true,
        message: 'We had a problem, try again!',
        isError: true,
      }),
    );
  }
}
