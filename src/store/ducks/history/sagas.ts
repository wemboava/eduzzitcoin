import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import { History } from './types';
import { loadSuccess, loadFailure } from './actions';

interface ChartData {
  buy: number;
  sell: number;
  createdAt: string;
}

export function* loadBtcHistory() {
  try {
    const { data } = yield call(api.get, '/history');

    const day = new Date();
    day.setDate(day.getDate() - 1);

    const historyFiltered = data.filter(
      (item: History) => new Date(item.createdAt) > day,
    );

    const newChartData = historyFiltered.map((item: ChartData) => {
      return {
        buy: item.buy.toLocaleString(),
        sell: item.sell.toLocaleString(),
        createdAt: new Date(item.createdAt),
      };
    });

    yield put(loadSuccess(newChartData));
  } catch (err) {
    yield put(loadFailure());
  }
}
