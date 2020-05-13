import { action } from 'typesafe-actions';
import { BalanceTypes, Balance } from './types';

export const loadRequest = () => action(BalanceTypes.LOAD_REQUEST);

export const loadSuccess = (data: Balance[]) =>
  action(BalanceTypes.LOAD_SUCCCES, { data });

export const loadFailure = () => action(BalanceTypes.LOAD_FAILURE);
