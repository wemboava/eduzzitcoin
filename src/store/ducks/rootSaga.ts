import { all, takeLatest } from 'redux-saga/effects';

import { ExtractTypes } from './extract/types';
import { load } from './extract/sagas';

export default function* rootSaga() {
  return yield all([takeLatest(ExtractTypes.LOAD_REQUEST, load)]);
}
