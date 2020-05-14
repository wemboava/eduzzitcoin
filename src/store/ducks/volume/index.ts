import { Reducer } from 'redux';
import { VolumeState, VolumeTypes } from './types';

const INITIAL_STATE: VolumeState = {
  data: {
    buy: 0,
    sell: 0,
  },
  error: false,
  loading: false,
};

const reducer: Reducer<VolumeState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case VolumeTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case VolumeTypes.LOAD_SUCCCES:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case VolumeTypes.LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        data: {
          buy: 0,
          sell: 0,
        },
      };
    default:
      return state;
  }
};

export default reducer;
