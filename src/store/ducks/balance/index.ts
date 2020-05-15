import { Reducer } from 'redux';
import { BalanceState, BalanceTypes, DepositTypes } from './types';

const INITIAL_STATE: BalanceState = {
  data: {
    value: 0,
  },
  error: false,
  loading: false,
  depositLoading: false,
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

    case DepositTypes.LOAD_REQUEST:
      return { ...state, depositLoading: true };
    case DepositTypes.LOAD_SUCCCES:
      return {
        ...state,
        loading: false,
        error: false,
        depositLoading: false,
        data: { value: action.payload.data },
      };
    case DepositTypes.LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        depositLoading: false,
        data: {
          value: state.data.value,
        },
      };
    default:
      return state;
  }
};

export default reducer;
