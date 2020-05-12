import styled from 'styled-components';

import Background from '../../assets/images/bitcoin-bg.jpg';

export const Container = styled.div`
  height: 100%;
  background-color: #0e0e0e;
  @media (min-width: 768px) {
    background: url(${Background});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: right;
  }
`;

export const Content = styled.div`
  height: 100%;
  @media (min-width: 768px) {
    display: flex;
    justify-content: flex-end;
  }
`;
