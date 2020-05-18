import styled from 'styled-components';
import { opacify, lighten } from 'polished';

export const Container = styled.div`
  margin-top: 15px;
  & .actions {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    & button {
      @media (max-width: 900px) {
        width: 100%;
      }
    }
    & button + button {
      margin-left: 20px;
      @media (max-width: 900px) {
        width: 100%;
        margin-left: 0;
        margin-top: 10px;
      }
    }
    @media (max-width: 900px) {
      flex-direction: column;
    }
  }
`;

export const DepositModalContent = styled.div`
  width: 400px;
  height: 220px;
  max-width: 100%;

  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 900px) {
    padding: 20px 15px;
  }
  & .modal-header {
    & > strong {
      color: #8e9eb0;
      font-size: 1.75em;
      font-weight: bold;
    }
  }
  & button {
    width: 100%;
    color: #fff;
    background-color: #4b68ed;
    font-weight: bold;
    border: none;
    border-radius: 12px;
    font-size: 1.1em;
    padding: 10px 20px;
    margin-top: 20px;
    transition: 0.3s ease-in-out;
    box-shadow: 0px 5px 20px -5px ${opacify(0.1, '#4B68ED')};
    &:hover {
      background-color: ${lighten(0.05, '#4B68ED')};
    }
  }
`;
