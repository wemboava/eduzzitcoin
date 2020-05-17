import { action } from 'typesafe-actions';
import { ExtractTypes, Extract } from './types';

export const extractLoadRequest = () => action(ExtractTypes.LOAD_REQUEST);

export const extractLoadSuccess = (data: Extract[]) =>
  action(ExtractTypes.LOAD_SUCCCES, { data });

export const extractLoadFailure = () => action(ExtractTypes.LOAD_FAILURE);
