import styled from 'styled-components';

const Container = styled.div`
  padding: 30px;
  display: flex;
  .col-one {
    width: 350px;
    border-right: 0.5px solid rgba(181, 176, 176, 0.5);
    strong {
      color: #8e9eb0;
      font-size: 0.9em;
      font-weight: bold;
    }

    &__value-wrapper {
      font-weight: 700;
      font-size: 2.2em;
    }
  }

  .col-two {
    padding-left: 30px;
    & > strong {
      color: #8e9eb0;
      font-size: 0.9em;
      font-weight: bold;
    }
    &__btc-wrapper {
      margin-top: 10px;
      display: flex;
      align-items: center;
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
        margin-right: 100px;
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
    }
  }
`;

export { Container };
