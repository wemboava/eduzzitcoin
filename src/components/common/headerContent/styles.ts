import styled from 'styled-components';
import { opacify, lighten } from 'polished';

const Container = styled.div`
  padding: 20px 30px 30px 30px;
  display: flex;
  @media (max-width: 900px) {
    flex-direction: column;
    padding: 20px 20px 30px 20px;
  }
  .col-one {
    width: 33.33%;
    border-right: 0.5px solid rgba(181, 176, 176, 0.5);
    padding-right: 30px;
    @media (max-width: 900px) {
      width: 100%;
      border-right: none;
      padding: 0;
    }
    strong {
      color: #8e9eb0;
      font-size: 0.9em;
      font-weight: bold;
    }

    &__value-wrapper {
      font-weight: 700;
      display: flex;
      flex-direction: column;
      &__real {
        font-size: 2.2em;
      }

      &__btc {
        color: #8e9eb0;
        font-size: 1.15em;
        margin-top: -10px;
      }
    }
  }

  .col-two {
    width: 33.33%;
    padding: 0 30px;
    border-right: 0.5px solid rgba(181, 176, 176, 0.5);
    @media (max-width: 900px) {
      width: 100%;
      border-right: none;
      padding: 0;
      margin-top: 20px;
    }
    & > strong {
      color: #8e9eb0;
      font-size: 0.9em;
      font-weight: bold;
    }
    &__btc-wrapper {
      margin-top: 10px;
      display: flex;
      flex-direction: column;
      &__header {
        display: flex;
        margin-bottom: 6px;
        &__icon {
          width: 40px;
          height: 40px;

          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 10px;
          background: rgba(246, 153, 50, 0.21);
          border-radius: 8px;
          color: #f69932;
          box-shadow: 0px 1px 6px 0px rgba(113, 113, 113, 0.2);
          & > svg {
            transform: rotate(10deg);
          }
        }
        &__name {
          display: flex;
          flex-direction: column;
          margin-right: 80px;
          & > strong {
            height: 25px;
            font-size: 1.25em;
            font-weight: bold;
          }
          & > span {
            color: #8e9eb0;
            font-size: 0.8em;
            font-weight: 300;
          }
        }
      }
      &__prices {
        display: flex;
        flex-direction: column;
        & > span {
          color: #000;
          font-size: 0.9em;
          font-weight: 500;
          & > span {
            font-weight: 300;
            color: #8e9eb0;
          }
        }
      }
      &__volume {
        display: flex;
        flex-direction: column;
        & > span {
          color: #000;
          font-size: 0.9em;
          font-weight: 500;
          & > span {
            font-weight: 300;
            color: #8e9eb0;
          }
        }
      }
    }
  }
  .col-three {
    width: 33.33%;
    margin-left: 30px;
    @media (max-width: 900px) {
      width: 100%;
      margin-left: 0px;
      margin-top: 20px;
    }
    & > strong {
      color: #8e9eb0;
      font-size: 0.9em;
      font-weight: bold;
    }
    &__content {
      margin-top: 15px;
      &__actions {
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
    }
  }
`;

const Button = styled.button`
  width: 220px;
  color: #fff;
  background-color: #f69932;
  font-weight: bold;
  border: none;
  border-radius: 12px;
  font-size: 1.1em;
  padding: 7px 20px;
  margin-top: 20px;
  transition: 0.3s ease-in-out;
  box-shadow: 0px 5px 20px -5px ${opacify(0.1, '#f69932')};
  @media (max-width: 900px) {
    width: 100%;
    margin-top: 10px;
  }
  &:hover {
    background-color: ${lighten(0.05, '#f69932')};
  }
`;

export const DepositModalContent = styled.div`
  width: 400px;
  height: 280px;
  max-width: 100%;

  padding: 30px 20px;
  @media (max-width: 900px) {
    padding: 20px 15px;
  }
  & .modal-header {
    margin-bottom: 30px;
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

export { Container, Button };
