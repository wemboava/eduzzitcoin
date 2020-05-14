/**
 * Action types
 */
export enum VolumeTypes {
  LOAD_REQUEST = '@volume/LOAD_REQUEST',
  LOAD_SUCCCES = '@volume/LOAD_SUCCCES',
  LOAD_FAILURE = '@volume/LOAD_FAILURE',
}

/**
 * Data types
 */
export interface Volume {
  buy: number;
  sell: number;
}

/**
 * State type
 */
export interface VolumeState {
  readonly data: Volume;
  readonly loading: boolean;
  readonly error: boolean;
}
