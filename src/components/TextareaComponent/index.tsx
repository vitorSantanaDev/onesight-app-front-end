import React from 'react'

import LabelComponent from '../LabelComponent'

import { ITextareaComponentProps } from './types'

import * as S from './styles'

const TextareaComponent = (props: ITextareaComponentProps) => {
  const { label, name, placeholder, onChangeHandler, value } = props

  return (
    <S.TextareaWrapper>
      <LabelComponent>{label}</LabelComponent>
      <S.TextareaElement
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </S.TextareaWrapper>
  )
}

export default TextareaComponent
