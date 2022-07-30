import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

function Button({text, onClick}) {
  return (
    <S.Button onClick={onClick}>
      <S.Title>{text}</S.Title>
    </S.Button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
};

export default Button;
