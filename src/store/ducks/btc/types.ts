/**
 * Action types
 */
export enum BtcTypes {
  LOAD_REQUEST = '@btc/LOAD_REQUEST',
  LOAD_SUCCCES = '@btc/LOAD_SUCCCES',
  LOAD_FAILURE = '@btc/LOAD_FAILURE',
}

export enum PurchaseTypes {
  LOAD_REQUEST = '@purchase/LOAD_REQUEST',
  LOAD_SUCCCES = '@purchase/LOAD_SUCCCES',
  LOAD_FAILURE = '@purchase/LOAD_FAILURE',
}

export enum SellTypes {
  LOAD_REQUEST = '@sell/LOAD_REQUEST',
  LOAD_SUCCCES = '@sell/LOAD_SUCCCES',
  LOAD_FAILURE = '@sell/LOAD_FAILURE',
}

export enum BtcBalanceTypes {
  LOAD_REQUEST = '@btcBalance/LOAD_REQUEST',
  LOAD_SUCCCES = '@btcBalance/LOAD_SUCCCES',
  LOAD_FAILURE = '@btcBalance/LOAD_FAILURE',
}

/**
 * Data types
 */
export interface Btc {
  price: {
    buy: number;
    sell: number;
  };
  btcBalance: number;
}

/**
 * State type
 */
export interface BtcState {
  readonly data: Btc;
  readonly loading: boolean;
  readonly purchaseLoading: boolean;
  readonly sellLoading: boolean;
  readonly error: boolean;
}
