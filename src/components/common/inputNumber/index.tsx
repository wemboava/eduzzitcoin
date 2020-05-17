import React, {
  InputHTMLAttributes,
  useRef,
  useState,
  useCallback,
} from 'react';
import { IconBaseProps } from 'react-icons';

import brlIcon from '../../../assets/images/brl.png';

import { Container, Error } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
  value: string;
  handleChange(value: string): void;
}

const Input: React.FC<InputProps> = ({
  name,
  icon: Icon,
  value,
  handleChange,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  const BRL = (int: string) => {
    const k = int.replace(/[\D]+/g, '');
    let tmp = `${k}`;
    tmp = tmp.replace(/([0-9]{2})$/g, ',$1');
    if (tmp.length > 6) tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, '.$1,$2');

    console.log('tmp', tmp);
    return tmp;
  };

  return (
    <Container isFilled={isFilled} isFocused={isFocused}>
      <img src={brlIcon} alt="BRL icon" />
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        ref={inputRef}
        name={name}
        value={value}
        onChange={(e) => handleChange(BRL(e.target.value.toString()))}
        placeholder="00,00"
      />

      {/* {error && (
        <Error title={error}>
          <FiAlertCircle color="#c53030" size={16} />
        </Error>
      )} */}
    </Container>
  );
};

export default Input;
