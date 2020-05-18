import React from 'react';
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';

import { AuthProvider } from './auth';
import { ToastProvider } from './toast';
import SuccessModal from '../components/common/successModal';
import { ApplicationState } from '../store';
import { closeSuccessModal } from '../store/ducks/successModal/actions';

const AppProvider: React.FC = ({ children }) => {
  const dispatch = useDispatch();
  const typedUseSelector: TypedUseSelectorHook<ApplicationState> = useSelector;
  const { data } = typedUseSelector((state) => state.successModal);

  return (
    <AuthProvider>
      <ToastProvider>{children}</ToastProvider>
      <SuccessModal
        {...data}
        toggleModal={() => {
          dispatch(closeSuccessModal());
        }}
      />
    </AuthProvider>
  );
};

export default AppProvider;
