import { Reducer } from 'redux';
import {
  BtcState,
  BtcTypes,
  PurchaseTypes,
  SellTypes,
  BtcBalanceTypes,
} from './types';

const INITIAL_STATE: BtcState = {
  data: {
    price: {
      buy: 0,
      sell: 0,
    },
    btcBalance: 0,
  },
  error: false,
  loading: false,
  purchaseLoading: false,
  sellLoading: false,
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
        data: { ...state.data, price: action.payload.data },
      };
    case BtcTypes.LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        data: {
          price: {
            buy: 0,
            sell: 0,
          },
          btcBalance: 0,
        },
      };

    case BtcBalanceTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case BtcBalanceTypes.LOAD_SUCCCES:
      return {
        ...state,
        loading: false,
        error: false,
        data: { ...state.data, btcBalance: action.payload.data },
      };
    case BtcBalanceTypes.LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        data: {
          price: {
            buy: 0,
            sell: 0,
          },
          btcBalance: 0,
        },
      };

    case PurchaseTypes.LOAD_REQUEST:
      return { ...state, purchaseLoading: true };
    case PurchaseTypes.LOAD_SUCCCES:
      return {
        ...state,
        purchaseLoading: false,
        error: false,
        data: { ...state.data, ...action.payload.data },
      };
    case PurchaseTypes.LOAD_FAILURE:
      return {
        ...state,
        purchaseLoading: false,
        error: true,
        data: {
          price: {
            buy: 0,
            sell: 0,
          },
          btcBalance: 0,
        },
      };

    case SellTypes.LOAD_REQUEST:
      return { ...state, sellLoading: true };
    case SellTypes.LOAD_SUCCCES:
      return {
        ...state,
        sellLoading: false,
        error: false,
        data: action.payload.data,
      };
    case SellTypes.LOAD_FAILURE:
      return {
        ...state,
        sellLoading: false,
        error: true,
        data: {
          price: {
            buy: 0,
            sell: 0,
          },
          btcBalance: 0,
        },
      };
    default:
      return state;
  }
};

export default reducer;
