/**
 * Action types
 */
export enum ExtractTypes {
  LOAD_REQUEST = '@extract/LOAD_REQUEST',
  LOAD_SUCCCES = '@extract/LOAD_SUCCCES',
  LOAD_FAILURE = '@extract/LOAD_FAILURE',
}

/**
 * Data types
 */
export interface Extract {
  id: string;
  type: 'deposit' | 'investment' | 'liquidation';
  value: number;
  createdAt?: string;
  style?: object;
}

/**
 * State type
 */
export interface ExtractState {
  readonly data: Extract[];
  readonly loading: boolean;
  readonly error: boolean;
}
