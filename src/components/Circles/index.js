import React from 'react';
import * as S from './styles';

function Circles({heading, value}) {
  return (
    <S.Container>
      <S.Title>{heading}</S.Title>
      <S.Text>{value}</S.Text>
    </S.Container>
  )
}

export default Circles;
