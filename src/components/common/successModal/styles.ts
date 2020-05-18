import styled from 'styled-components';
import { opacify, lighten } from 'polished';

export const Content = styled.div`
  width: 300px;
  height: 250px;
  max-width: 100%;

  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 900px) {
    padding: 20px 15px;
  }
  & .modal-header {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #4ed68e;
  }
  & .modal-text {
    display: flex;
    justify-content: center;
    font-size: 1.2em;
    font-weight: 500;
    text-align: center;
    line-height: 25px;
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
