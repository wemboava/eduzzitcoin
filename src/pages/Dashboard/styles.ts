import styled from 'styled-components';
import { opacify, lighten } from 'polished';

interface ButtonProps {
  bgColor: string;
  isActivity: boolean;
}

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
    strong {
      color: #8e9eb0;
      font-size: 1.1em;
      font-weight: bold;
    }
    &__actions {
      display: flex;
      margin-top: 15px;
    }
  }
  .extract-wrapper {
    strong {
      color: #8e9eb0;
      font-size: 1.1em;
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
  margin-right: 50px;
  transition: 0.3s ease-in-out;
  box-shadow: 0px 5px 20px -5px ${(props) => (props.isActivity ? opacify(0.1, props.bgColor) : 'transparent')};
  &:hover {
    background-color: ${(props) => lighten(0.05, props.bgColor)};
    color: #fff;
  }
`;
