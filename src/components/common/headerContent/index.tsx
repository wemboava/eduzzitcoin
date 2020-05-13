import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import { IoLogoBitcoin } from 'react-icons/io';

import { ApplicationState } from '../../../store';
import { loadRequest } from '../../../store/ducks/balance/actions';
import { loadRequest as loadBtcRequest } from '../../../store/ducks/btc/actions';
import { Balance } from '../../../store/ducks/balance/types';

import { Container } from './styles';

const Header: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRequest());
    dispatch(loadBtcRequest());
  }, [dispatch]);

  const typedUseSelector: TypedUseSelectorHook<ApplicationState> = useSelector;

  const balanceData = typedUseSelector((state) => state.balance);
  const btcData = typedUseSelector((state) => state.btc);

  console.log('balance =>', balanceData);

  return (
    <Container>
      <div className="col-one">
        <strong>BALANCE DETAIL</strong>
        <div className="col-one__value-wrapper">
          <span>R${balanceData.data.value?.toLocaleString()}</span>
        </div>
        <div className="col-one__btc-wrapper">
          <span>R${balanceData.data.value?.toLocaleString()}</span>
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
        </div>
      </div>
    </Container>
  );
};

export default Header;
