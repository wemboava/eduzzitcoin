import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { purchaseRequest, sellRequest } from '../../store/ducks/btc/actions';

import ModalTemplate from '../common/modalTemplate';
import InputNumber from '../common/inputNumber';
import ButtonDefault from '../common/buttonDefault';

import { Container, DepositModalContent } from './styles';

interface TargetData {
  title: string;
  text: string;
  action(): void;
}

const Header: React.FC = () => {
  const dispatch = useDispatch();

  const [openedDepositModal, setOpenedDepositModal] = useState<boolean>(false);
  const [buyAndSellValue, setBuyAndSellValue] = useState<string>('');

  const [confirmModalData, setConfirmModalData] = useState<TargetData>(
    {} as TargetData,
  );

  const formatData = useCallback((value: string) => {
    const newValue = parseFloat(value.replace(/\./g, '').replace(/,/g, '.'));
    return newValue;
  }, []);

  const handlePurchase = useCallback(() => {
    dispatch(purchaseRequest(formatData(buyAndSellValue)));
    setBuyAndSellValue('');
  }, [dispatch, buyAndSellValue, formatData]);

  const handleSell = useCallback(() => {
    dispatch(sellRequest(formatData(buyAndSellValue)));
    setBuyAndSellValue('');
  }, [dispatch, buyAndSellValue, formatData]);

  const handleTarget = useCallback(
    (target: string) => {
      const textType: { [key: string]: TargetData } = {
        buy: {
          title: 'Buy',
          text: `Are you sure you want to buy R$ ${buyAndSellValue} in bitcoin`,
          action: handlePurchase,
        },
        sell: {
          title: 'Sell',
          text: `Are you sure you want to sell R$${buyAndSellValue} in bitcoin`,
          action: handleSell,
        },
      };

      setConfirmModalData({ ...textType[target] });
      setOpenedDepositModal(!openedDepositModal);
    },
    [openedDepositModal, buyAndSellValue, handlePurchase, handleSell],
  );

  const handleConfirm = useCallback(() => {
    confirmModalData.action();
    setOpenedDepositModal(!openedDepositModal);
  }, [openedDepositModal, confirmModalData]);

  return (
    <Container>
      <InputNumber
        name="buyAndSell"
        value={buyAndSellValue}
        handleChange={setBuyAndSellValue}
      />
      <div className="actions">
        <ButtonDefault
          handleClick={() => handleTarget('buy')}
          bgColor="#4B68ED"
          isActivity
          disabled={!buyAndSellValue}
        >
          Exchange Buy
        </ButtonDefault>

        <ButtonDefault
          handleClick={() => handleTarget('sell')}
          bgColor="#5ED8F7"
          isActivity
          disabled={!buyAndSellValue}
        >
          Exchange Sell
        </ButtonDefault>
      </div>

      <ModalTemplate
        isActivity={openedDepositModal}
        toggleModal={() => setOpenedDepositModal(!openedDepositModal)}
      >
        <DepositModalContent>
          <div className="modal-header">
            <strong>{confirmModalData.title}</strong>
            <p>{confirmModalData.text}</p>
          </div>
          <button type="button" onClick={handleConfirm}>
            Confirm {confirmModalData.title}
          </button>
        </DepositModalContent>
      </ModalTemplate>
    </Container>
  );
};

export default Header;
