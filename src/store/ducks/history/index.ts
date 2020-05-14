import { Reducer } from 'redux';
import { HistoryState, HistoryTypes } from './types';

const INITIAL_STATE: HistoryState = {
  data: [],
  error: false,
  loading: false,
};

const reducer: Reducer<HistoryState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HistoryTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case HistoryTypes.LOAD_SUCCCES:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case HistoryTypes.LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        data: [],
      };
    default:
      return state;
  }
};

export default reducer;
