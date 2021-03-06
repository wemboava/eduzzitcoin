import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import { IoLogoBitcoin } from 'react-icons/io';

import { ApplicationState } from '../../../store';
import {
  loadRequest,
  depositRequest,
} from '../../../store/ducks/balance/actions';

import {
  btcBalanceRequest,
  loadRequest as loadBtcRequest,
} from '../../../store/ducks/btc/actions';

import { loadRequest as loadVolumeRequest } from '../../../store/ducks/volume/actions';

import ModalTemplate from '../modalTemplate';
import InputNumber from '../inputNumber';
import BuyAndSell from '../../buyAndSell';

import { Container, Button, DepositModalContent } from './styles';

const Header: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRequest());
    dispatch(loadBtcRequest());
    dispatch(loadVolumeRequest());
    dispatch(btcBalanceRequest());
  }, [dispatch]);

  const [openedDepositModal, setOpenedDepositModal] = useState<boolean>(false);
  const [depositValue, setDepositValue] = useState<string>('');

  const typedUseSelector: TypedUseSelectorHook<ApplicationState> = useSelector;

  const balanceData = typedUseSelector((state) => state.balance);
  const btcData = typedUseSelector((state) => state.btc);
  const volumeData = typedUseSelector((state) => state.volume);

  const formatData = useCallback((value: string) => {
    const newValue = parseFloat(value.replace(/\./g, '').replace(/,/g, '.'));
    return newValue;
  }, []);

  const handleDeposit = useCallback(() => {
    dispatch(depositRequest(formatData(depositValue)));
    setDepositValue('');
    setOpenedDepositModal(false);
  }, [dispatch, depositValue, formatData, setOpenedDepositModal]);

  return (
    <Container>
      <div className="col-one">
        <strong>BALANCE DETAIL</strong>
        <div className="col-one__value-wrapper">
          <span className="col-one__value-wrapper__real">
            {balanceData.data.value?.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
            })}
          </span>
          <span className="col-one__value-wrapper__btc">
            BTC {btcData.data?.btcBalance}
          </span>
        </div>
        <div className="col-one__deposit-wrapper">
          <Button onClick={() => setOpenedDepositModal(true)}>Deposit</Button>
        </div>
      </div>

      <div className="col-two">
        <strong>BITCOIN DETAIL</strong>
        <div className="col-two__btc-wrapper">
          <div className="col-two__btc-wrapper__header">
            <span className="col-two__btc-wrapper__header__icon">
              <IoLogoBitcoin size={30} />
            </span>
            <div className="col-two__btc-wrapper__header__name">
              <strong>BTC</strong>
              <span>Bitcoin</span>
            </div>
          </div>
          <div className="col-two__btc-wrapper__prices">
            <span>
              Sale price{' '}
              <span>
                {btcData.data.price?.buy?.toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </span>
            </span>
            <span>
              Purchase price{' '}
              <span>
                {btcData.data.price?.sell?.toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </span>
            </span>
          </div>
          <div className="col-two__btc-wrapper__volume">
            <span>
              Volume sold{' '}
              <span>
                {volumeData.data.buy.toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </span>
            </span>
            <span>
              Purchased volume{' '}
              <span>
                {volumeData.data.sell.toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </span>
            </span>
          </div>
        </div>
      </div>

      <div className="col-three">
        <strong>BUY & SELL</strong>
        <BuyAndSell />
      </div>

      <ModalTemplate
        isActivity={openedDepositModal}
        toggleModal={() => setOpenedDepositModal(!openedDepositModal)}
      >
        <DepositModalContent>
          <div className="modal-header">
            <strong>Deposit</strong>
            <p>Enter a deposit amount</p>
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
