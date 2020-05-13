import { action } from 'typesafe-actions';
import { BtcTypes, Btc } from './types';

export const loadRequest = () => action(BtcTypes.LOAD_REQUEST);

export const loadSuccess = (data: Btc) =>
  action(BtcTypes.LOAD_SUCCCES, { data });

export const loadFailure = () => action(BtcTypes.LOAD_FAILURE);
