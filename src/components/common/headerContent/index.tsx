import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import { IoLogoBitcoin } from 'react-icons/io';

import { ApplicationState } from '../../../store';
import {
  loadRequest,
  depositRequest,
} from '../../../store/ducks/balance/actions';
import { loadRequest as loadBtcRequest } from '../../../store/ducks/btc/actions';
import { loadRequest as loadVolumeRequest } from '../../../store/ducks/volume/actions';
import { Balance } from '../../../store/ducks/balance/types';
import ModalTemplate from '../modalTemplate';
import InputNumber from '../inputNumber';

import { Container, Button, DepositModalContent } from './styles';

const Header: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRequest());
    dispatch(loadBtcRequest());
    dispatch(loadVolumeRequest());
  }, [dispatch]);

  const [openedDepositModal, setOpenedDepositModal] = useState<boolean>(true);
  const [depositValue, setDepositValue] = useState<number>(0);

  const typedUseSelector: TypedUseSelectorHook<ApplicationState> = useSelector;

  const balanceData = typedUseSelector((state) => state.balance);
  const btcData = typedUseSelector((state) => state.btc);
  const volumeData = typedUseSelector((state) => state.volume);

  const handleDeposit = useCallback(() => {
    dispatch(depositRequest(depositValue));
  }, [dispatch, depositValue]);

  return (
    <Container>
      <div className="col-one">
        <strong>BALANCE DETAIL</strong>
        <div className="col-one__value-wrapper">
          <span>R${balanceData.data.value?.toLocaleString()}</span>
        </div>
        <div className="col-one__deposit-wrapper">
          <Button onClick={() => setOpenedDepositModal(true)}>Deposit</Button>
        </div>
      </div>

      <div className="col-two">
        <strong>BITCOIN DETAIL</strong>
        <div className="col-two__btc-wrapper">
          <span className="col-two__btc-wrapper__icon">
            <IoLogoBitcoin size={30} />
          </span>
          <div className="col-two__btc-wrapper__name">
            <strong>BTC</strong>
            <span>Bitcoin</span>
          </div>
          <div className="col-two__btc-wrapper__prices">
            <span>
              Sale price <span>R${btcData.data.buy.toLocaleString()}</span>
            </span>
            <span>
              Purchase price <span>R${btcData.data.sell.toLocaleString()}</span>
            </span>
          </div>
          <div className="col-two__btc-wrapper__volume">
            <span>
              Volume sold <span>R${volumeData.data.buy.toLocaleString()}</span>
            </span>
            <span>
              Purchased volume{' '}
              <span>R${volumeData.data.sell.toLocaleString()}</span>
            </span>
          </div>
        </div>
      </div>
      <ModalTemplate
        isActivity={openedDepositModal}
        toggleModal={() => setOpenedDepositModal(!openedDepositModal)}
      >
        <DepositModalContent>
          <div className="modal-header">
            <strong>Deposit</strong>
            <p>Insire um valor para o depósito</p>
          </div>
          <InputNumber
            name="deposit"
            value={depositValue}
            handleChange={setDepositValue}
          />
          <button type="button" onClick={handleDeposit}>
            Confirm deposit
          </button>
        </DepositModalContent>
      </ModalTemplate>
    </Container>
  );
};

export default Header;
