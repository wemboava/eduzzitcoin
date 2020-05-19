import React from 'react';

import { Button } from './styles';

interface ButtonProps {
  bgColor: string;
  isActivity: boolean;
  handleClick(): void;
  disabled?: boolean;
}

const ButtonDefault: React.FC<ButtonProps> = ({
  children,
  bgColor,
  handleClick,
  isActivity,
  disabled = false,
}) => {
  return (
    <Button
      disabled={disabled}
      onClick={handleClick}
      bgColor={bgColor}
      isActivity={isActivity}
    >
      {children}
    </Button>
  );
};

export default ButtonDefault;
