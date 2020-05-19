import styled, { keyframes } from 'styled-components';
import { opacify, lighten } from 'polished';

interface ButtonProps {
  bgColor: string;
  isActivity: boolean;
}

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

export const Container = styled.section``;

export const Content = styled.div`
  max-width: 1224px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  padding: 0 20px;
  @media (max-width: 900px) {
    flex-direction: column;
  }
  .chart-wrapper {
    height: fit-content;
    flex: 1;
    margin-right: 30px;
    position: sticky;
    top: 20px;
    animation: ${appearFromLeft} 1s;
    @media (max-width: 900px) {
      position: initial;
      margin-right: 0;
    }
    &__header {
      display: flex;
      justify-content: space-between;
      strong {
        color: #8e9eb0;
        font-size: 1.3em;
        font-weight: bold;
      }
      @media (max-width: 900px) {
        flex-direction: column;
      }
      &__actions {
        display: flex;
        justify-content: flex-end;
        & button {
          @media (max-width: 900px) {
            width: 100%;
            margin-right: 0;
          }
        }
        & button + button {
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
    &__chart {
      @media (max-width: 900px) {
        margin: 0 -15px;
      }
    }
  }
  .extract-wrapper {
    min-width: 350px;
    animation: ${appearFromRight} 1s;
    @media (max-width: 900px) {
      min-width: auto;
      max-width: 100%;
      margin-top: 20px;
    }
    strong {
      font-weight: bold;
    }
    & > strong {
      color: #8e9eb0;
      font-size: 1.3em;
      font-weight: bold;
    }
  }
`;

export const Button = styled.button<ButtonProps>`
  color: ${(props) => (props.isActivity ? '#fff' : props.bgColor)};
  background-color: ${(props) =>
    props.isActivity ? props.bgColor : 'transparent'};
  font-weight: bold;
  border: 1px solid ${(props) => props.bgColor};
  border-radius: 12px;
  width: 200px;
  font-size: 1.1em;
  padding: 7px 20px;
  margin-right: 20px;
  transition: 0.3s ease-in-out;
  box-shadow: 0px 5px 20px -5px ${(props) => (props.isActivity ? opacify(0.1, props.bgColor) : 'transparent')};
  &:hover {
    background-color: ${(props) => lighten(0.05, props.bgColor)};
    color: #fff;
  }
`;
