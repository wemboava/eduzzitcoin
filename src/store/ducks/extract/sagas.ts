import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import { extractLoadSuccess, extractLoadFailure } from './actions';

export function* load() {
  try {
    const response = yield call(api.get, '/extract');

    yield put(extractLoadSuccess(response.data));
  } catch (err) {
    yield put(extractLoadFailure());
  }
}
