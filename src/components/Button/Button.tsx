import React from 'react';
import { RippleButton } from '../RippleButton';
import type { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({
  style,
  onPress,
  animatedDuration = 500,
  rippleColor = 'rgba(255, 255, 255, .25)',
  children,
}) => {
  return (
    <RippleButton
      onPress={onPress}
      animatedDuration={animatedDuration}
      style={style}
      rippleColor={rippleColor}>
      {children}
    </RippleButton>
  );
};

export default Button;
