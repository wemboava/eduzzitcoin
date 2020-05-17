import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #eef4fb;
  border-radius: 10px;
  padding: 13px;
  width: 100%;

  border: 2px solid #eef4fb;
  color: #000;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  transition: color 0.2s;
  transition: border-color 0.2s;

  & > img {
    width: 25px;
  }

  ${(props) =>
    props.isFocused &&
    css`
      color: #4b68ed;
      border-color: #4b68ed;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #4b68ed;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #000;
    font-size: 20px;
    padding-left: 8px;
    padding-top: 2px;
    &::placeholder {
      color: #000;
    }

    & + input {
      margin-top: 8px;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled.div`
  height: 16px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
