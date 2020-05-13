import { Reducer } from 'redux';
import { BalanceState, BalanceTypes } from './types';

const INITIAL_STATE: BalanceState = {
  data: {
    value: 0,
  },
  error: false,
  loading: false,
};

const reducer: Reducer<BalanceState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BalanceTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case BalanceTypes.LOAD_SUCCCES:
      return {
        ...state,
        loading: false,
        error: false,
        data: { value: action.payload.data },
      };
    case BalanceTypes.LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        data: {
          value: 0,
        },
      };
    default:
      return state;
  }
};

export default reducer;
