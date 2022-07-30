import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

function InputField({onClick}) {
  return (
    <S.Container>
        <S.Input>
          <input type="text" id="inputID" placeholder='Enter a Number'/>
        </S.Input>
        <S.Button>
           <button onClick={onClick}>Submit</button>
        </S.Button>
    </S.Container>
  )
}

InputField.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
};

export default InputField;
