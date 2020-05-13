/**
 * Action types
 */
export enum BtcTypes {
  LOAD_REQUEST = '@btc/LOAD_REQUEST',
  LOAD_SUCCCES = '@btc/LOAD_SUCCCES',
  LOAD_FAILURE = '@btc/LOAD_FAILURE',
}

/**
 * Data types
 */
export interface Btc {
  buy: number;
  sell: number;
}

/**
 * State type
 */
export interface BtcState {
  readonly data: Btc;
  readonly loading: boolean;
  readonly error: boolean;
}
