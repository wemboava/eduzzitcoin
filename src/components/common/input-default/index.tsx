import React from 'react';
import { Input } from '@rocketseat/unform';
import { InputWrapper } from './styles';

interface InputDefaultProps {
  label: string;
  icon: string;
  name: string;
  isPassword?: boolean;
}

const InputDefault: React.FC<InputDefaultProps> = ({
  label,
  icon,
  name,
  isPassword,
}) => {
  return (
    <InputWrapper isLastField={false}>
      <div className="input-group">
        <img
          className="icon"
          src={`https://img.icons8.com/ios/120/f79318/${icon}.png`}
          alt="test"
        />
        <Input
          required
          type={!isPassword ? '' : 'password'}
          name={name}
          className="input"
          autoComplete="off"
        />
        <label htmlFor={name}>{label}</label>
      </div>
    </InputWrapper>
  );
};

export default InputDefault;
