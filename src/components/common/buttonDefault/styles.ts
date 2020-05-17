import styled from 'styled-components';
import { opacify, lighten } from 'polished';

interface ButtonProps {
  bgColor: string;
  isActivity: boolean;
}

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
  transition: 0.3s ease-in-out;
  box-shadow: 0px 5px 20px -5px ${(props) => (props.isActivity ? opacify(0.1, props.bgColor) : 'transparent')};
  &:hover {
    background-color: ${(props) => lighten(0.05, props.bgColor)};
    color: #fff;
  }
`;
