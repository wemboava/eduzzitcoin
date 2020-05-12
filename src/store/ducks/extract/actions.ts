import { action } from 'typesafe-actions';
import { ExtractTypes, Extract } from './types';

export const loadRequest = () => action(ExtractTypes.LOAD_REQUEST);

export const loadSuccess = (data: Extract[]) =>
  action(ExtractTypes.LOAD_SUCCCES, { data });

export const loadFailure = () => action(ExtractTypes.LOAD_FAILURE);
