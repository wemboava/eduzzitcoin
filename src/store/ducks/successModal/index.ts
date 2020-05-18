import { Reducer } from 'redux';
import { SuccessModalState, SuccessModalTypes } from './types';

const INITIAL_STATE: SuccessModalState = {
  data: {
    opened: false,
    message: '',
    isError: false,
  },
};

const reducer: Reducer<SuccessModalState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SuccessModalTypes.OPEN_MODAL:
      return {
        ...state,
        data: action.payload.data,
      };
    case SuccessModalTypes.CLOSE_MODAL:
      return {
        ...state,
        data: {
          opened: false,
          message: '',
          isError: state.data.isError,
        },
      };
    default:
      return state;
  }
};

export default reducer;
