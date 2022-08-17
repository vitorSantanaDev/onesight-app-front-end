import React, { useState } from 'react'

import * as S from './styles'
import { IInputComponentProps } from './types'

const InputComponent = (props: IInputComponentProps) => {
  const { label, name, placeholder, type, onChangeHandler, value } = props

  return (
    <S.InputWrapper>
      <S.InputLabel htmlFor={name}>{label}</S.InputLabel>
      <S.InputElement
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChangeHandler}
        placeholder={placeholder}
      />
    </S.InputWrapper>
  )
}

export default InputComponent
