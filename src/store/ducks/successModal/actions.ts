import { action } from 'typesafe-actions';
import { SuccessModalTypes, SuccessModal } from './types';

export const openSuccessModal = (data: SuccessModal) =>
  action(SuccessModalTypes.OPEN_MODAL, { data });

export const closeSuccessModal = () => action(SuccessModalTypes.CLOSE_MODAL);
