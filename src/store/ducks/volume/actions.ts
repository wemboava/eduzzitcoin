import { action } from 'typesafe-actions';
import { VolumeTypes, Volume } from './types';

export const loadRequest = () => action(VolumeTypes.LOAD_REQUEST);

export const loadSuccess = (data: Volume) =>
  action(VolumeTypes.LOAD_SUCCCES, { data });

export const loadFailure = () => action(VolumeTypes.LOAD_FAILURE);
