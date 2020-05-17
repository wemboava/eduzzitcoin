import styled, { keyframes } from 'styled-components';
import { opacify, lighten } from 'polished';

interface ButtonProps {
  bgColor: string;
  isActivity: boolean;
}

const appearFromLeft = keyframes`
  from{
    opacity: 0;
    transform: translateX(-50px);
  }
  to{
    opacity: 1;
    transform: translateX(0px);
  }
`;

const appearFromRight = keyframes`
  from{
    opacity: 0;
    transform: translateX(50px);
  }
  to{
    opacity: 1;
    transform: translateX(0px);
  }
`;

export const Container = styled.section``;

export const Content = styled.div`
  max-width: 1124px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  .chart-wrapper {
    height: fit-content;
    flex: 1;
    margin-right: 30px;
    position: sticky;
    top: 20px;
    animation: ${appearFromLeft} 1s;
    &__header {
      display: flex;
      justify-content: space-between;
      strong {
        color: #8e9eb0;
        font-size: 1.3em;
        font-weight: bold;
      }
      &__actions {
        display: flex;
        justify-content: flex-end;
      }
    }
  }
  .extract-wrapper {
    min-width: 350px;
    animation: ${appearFromRight} 1s;
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
