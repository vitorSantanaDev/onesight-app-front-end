import React from 'react'

import LabelComponent from '../LabelComponent'

import { IInputComponentProps } from './types'

import * as S from './styles'

const InputComponent = (props: IInputComponentProps) => {
  const { label, name, placeholder, type, onChangeHandler, value } = props

  return (
    <S.InputWrapper>
      <LabelComponent htmlFor={name}>{label}</LabelComponent>
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
