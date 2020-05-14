import { action } from 'typesafe-actions';
import { HistoryTypes, History } from './types';

export const loadRequest = () => action(HistoryTypes.LOAD_REQUEST);

export const loadSuccess = (data: History) =>
  action(HistoryTypes.LOAD_SUCCCES, { data });

export const loadFailure = () => action(HistoryTypes.LOAD_FAILURE);
