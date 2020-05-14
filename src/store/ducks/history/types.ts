/**
 * Action types
 */
export enum HistoryTypes {
  LOAD_REQUEST = '@history/LOAD_REQUEST',
  LOAD_SUCCCES = '@history/LOAD_SUCCCES',
  LOAD_FAILURE = '@history/LOAD_FAILURE',
}

/**
 * Data types
 */
export interface History {
  buy: number;
  sell: number;
  createdAt: string;
}

/**
 * State type
 */
export interface HistoryState {
  readonly data: History[];
  readonly loading: boolean;
  readonly error: boolean;
}
