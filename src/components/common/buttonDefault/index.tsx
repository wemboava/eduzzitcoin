import React from 'react';
import { IconBaseProps } from 'react-icons';

import { Button } from './styles';

interface ButtonProps {
  icon?: React.ComponentType<IconBaseProps>;
  bgColor: string;
  isActivity: boolean;
  handleClick(): void;
}

const ButtonDefault: React.FC<ButtonProps> = ({
  children,
  icon: Icon,
  bgColor,
  handleClick,
  isActivity,
}) => {
  return (
    <Button onClick={handleClick} bgColor={bgColor} isActivity={isActivity}>
      {children}
    </Button>
  );
};

export default ButtonDefault;
