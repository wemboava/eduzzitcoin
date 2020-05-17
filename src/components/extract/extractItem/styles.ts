import styled from 'styled-components';
import { animated } from 'react-spring';

interface StyleProps {
  type: 'deposit' | 'investment' | 'liquidation';
}

const color = {
  deposit: '#4B68ED',
  investment: '#5ED8F7',
  liquidation: '#F69932',
};

export const Container = styled(animated.div)<StyleProps>`
  width: 340px;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Baloo 2', cursive;
  position: relative;

  & + div {
    margin-top: 15px;
  }
  .wrapper {
    display: flex;
    &__icon {
      width: 40px;
      height: 40px;

      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 10px;
      background: #fff;
      border-radius: 8px;
      color: ${(props) => color[props.type]};
      box-shadow: 0px 1px 6px 0px rgba(113, 113, 113, 0.2);
    }
    &__info {
      display: flex;
      justify-content: center;
      flex-direction: column;
      text-transform: capitalize;

      & span {
        font-weight: 100;
        font-size: 0.8em;
        margin-top: -3px;
        color: #8e9eb0;
      }
    }
  }
  .value {
    font-size: 1.5em;
    color: ${(props) => color[props.type]};
    @media (max-width: 900px) {
      font-size: 1.3em;
    }
  }
`;
