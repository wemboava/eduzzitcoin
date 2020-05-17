import React, { memo } from 'react';
import { BsArrowDown, BsArrowUp, BsArrowUpDown } from 'react-icons/bs';
import moment from 'moment';

import { Container } from './styles';
import { Extract } from '../../../store/ducks/extract/types';

const icons = {
  deposit: <BsArrowDown size={30} />,
  liquidation: <BsArrowUp size={30} />,
  investment: <BsArrowUpDown size={30} />,
};

const ExtractItem: React.FC<Extract> = ({ type, value, createdAt }) => {
  return (
    <Container type={type}>
      <div className="wrapper">
        <span className="wrapper__icon">{icons[type]}</span>
        <div className="wrapper__info">
          <strong>{type}</strong>
          <span>{moment(createdAt).format('DD MMM, YYYY [ás] HH:m')}</span>
        </div>
      </div>
      <span className="value">
        {value.toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL',
        })}
      </span>
    </Container>
  );
};

export default memo(ExtractItem);
