import React, { ButtonHTMLAttributes } from 'react';

import { boolean } from 'yup';
import { Container } from './styles';

type ButtonProprs = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const Button: React.FC<ButtonProprs> = ({ children, loading, ...rest }) => (
  <Container type="button" {...rest}>
    {loading ? 'Loading...' : children}
  </Container>
);

export default Button;
