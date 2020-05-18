import { call, put, select } from 'redux-saga/effects';
import { uuid } from 'uuidv4';

import { ApplicationState } from '../..';

import api from '../../../services/api';
import {
  loadSuccess,
  loadFailure,
  depositRequest,
  depositSuccess,
  depositFailure,
} from './actions';

import { extractLoadSuccess } from '../extract/actions';
import { openSuccessModal } from '../successModal/actions';

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

    const extract = yield select(
      (state: ApplicationState) => state.extract.data,
    );

    const id = uuid();

    const newDeposit = {
      createdAt: new Date().toString(),
      id,
      type: 'deposit',
      value: action.payload,
    };

    extract.unshift(newDeposit);

    yield put(extractLoadSuccess(extract));
    yield put(depositSuccess(data.balance));
    yield put(
      openSuccessModal({
        opened: true,
        message: 'Your deposit was successful!',
      }),
    );
  } catch (err) {
    yield put(depositFailure());
    yield put(
      openSuccessModal({
        opened: true,
        message: 'We had a problem, try again!',
        isError: true,
      }),
    );
  }
}
