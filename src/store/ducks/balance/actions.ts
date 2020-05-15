import { action } from 'typesafe-actions';
import { BalanceTypes, DepositTypes, Balance } from './types';

// Balance

export const loadRequest = () => action(BalanceTypes.LOAD_REQUEST);

export const loadSuccess = (data: Balance[]) =>
  action(BalanceTypes.LOAD_SUCCCES, { data });

export const loadFailure = () => action(BalanceTypes.LOAD_FAILURE);

// Deposit

export const depositRequest = (data: number) =>
  action(DepositTypes.LOAD_REQUEST, data);

export const depositSuccess = (data: Balance) =>
  action(DepositTypes.LOAD_SUCCCES, { data });

export const depositFailure = () => action(DepositTypes.LOAD_FAILURE);
