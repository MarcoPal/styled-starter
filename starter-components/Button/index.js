import React from 'react';
import * as S from './style';

export const Button = (props) => (
  <S.Button {...props}>
    {props.children}
  </S.Button>
);