import { action } from 'typesafe-actions';
import {
  BtcTypes,
  PurchaseTypes,
  SellTypes,
  BtcBalanceTypes,
  Btc,
} from './types';

// BTC

export const loadRequest = () => action(BtcTypes.LOAD_REQUEST);

export const loadSuccess = (data: Btc) =>
  action(BtcTypes.LOAD_SUCCCES, { data });

export const loadFailure = () => action(BtcTypes.LOAD_FAILURE);

// Purchase

export const purchaseRequest = (data: number) =>
  action(PurchaseTypes.LOAD_REQUEST, data);

export const purchaseSuccess = (data: number) =>
  action(PurchaseTypes.LOAD_SUCCCES, { data });

export const purchaseFailure = () => action(PurchaseTypes.LOAD_FAILURE);

// Sell

export const sellRequest = (data: number) =>
  action(SellTypes.LOAD_REQUEST, data);

export const sellSuccess = (data: number) =>
  action(SellTypes.LOAD_SUCCCES, { data });

export const sellFailure = () => action(SellTypes.LOAD_FAILURE);

// Sell

export const btcBalanceRequest = () => action(BtcBalanceTypes.LOAD_REQUEST);

export const btcBalanceSuccess = (data: number) =>
  action(BtcBalanceTypes.LOAD_SUCCCES, { data });

export const btcBalanceFailure = () => action(BtcBalanceTypes.LOAD_FAILURE);
