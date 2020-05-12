import { Reducer } from 'redux';
import { ExtractState, ExtractTypes } from './types';

const INITIAL_STATE: ExtractState = {
  data: [],
  error: false,
  loading: false,
};

const reducer: Reducer<ExtractState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ExtractTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case ExtractTypes.LOAD_SUCCCES:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case ExtractTypes.LOAD_FAILURE:
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
