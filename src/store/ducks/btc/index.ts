import { Reducer } from 'redux';
import { BtcState, BtcTypes } from './types';

const INITIAL_STATE: BtcState = {
  data: {
    buy: 0,
    sell: 0,
  },
  error: false,
  loading: false,
};

const reducer: Reducer<BtcState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BtcTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case BtcTypes.LOAD_SUCCCES:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case BtcTypes.LOAD_FAILURE:
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
