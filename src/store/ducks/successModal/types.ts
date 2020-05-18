/**
 * Action types
 */
export enum SuccessModalTypes {
  OPEN_MODAL = '@successModal/OPEN_MODAL',
  CLOSE_MODAL = '@successModal/CLOSE_MODAL',
}

/**
 * Data types
 */
export interface SuccessModal {
  opened: boolean;
  message: string;
  isError?: boolean;
}

/**
 * State type
 */
export interface SuccessModalState {
  readonly data: SuccessModal;
}
