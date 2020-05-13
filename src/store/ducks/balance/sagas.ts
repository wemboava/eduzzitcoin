import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import { loadSuccess, loadFailure } from './actions';

export function* loadBalance() {
  try {
    const response = yield call(api.get, '/account/balance');
    const { data } = response;

    yield put(loadSuccess(data.balance));
  } catch (err) {
    yield put(loadFailure());
  }
}
