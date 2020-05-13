/**
 * Action types
 */
export enum BalanceTypes {
  LOAD_REQUEST = '@balance/LOAD_REQUEST',
  LOAD_SUCCCES = '@balance/LOAD_SUCCCES',
  LOAD_FAILURE = '@balance/LOAD_FAILURE',
}

/**
 * Data types
 */
export interface Balance {
  value: number;
}

/**
 * State type
 */
export interface BalanceState {
  readonly data: Balance;
  readonly loading: boolean;
  readonly error: boolean;
}
