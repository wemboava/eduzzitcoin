import { call, put } from 'redux-saga/effects';

import api from '../../../services/api';
import {
  loadSuccess,
  loadFailure,
  depositRequest,
  depositSuccess,
  depositFailure,
} from './actions';

// Load balance

export function* loadBalance() {
  try {
    const response = yield call(api.get, '/account/balance');
    const { data } = response;

    yield put(loadSuccess(data.balance));
  } catch (err) {
    const response = JSON.parse(err.request.response);
    const invalidToken = response.name === 'TokenExpiredError';

    if (invalidToken) {
      localStorage.removeItem('token');
      window.location.reload();
    }

    yield put(loadFailure());
  }
}

// Deposit

export function* deposit(action: ReturnType<typeof depositRequest>) {
  try {
    const response = yield call(api.post, '/account/deposit', {
      amount: action.payload,
    });
    const { data } = response;

    yield put(depositSuccess(data.balance));
  } catch (err) {
    yield put(depositFailure());
  }
}
