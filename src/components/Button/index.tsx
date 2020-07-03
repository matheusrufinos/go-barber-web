import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';
type ButtonProprs = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProprs> = ({ children, ...rest }) => <Container type="button" {...rest}>{children}</Container>;

export default Button;
