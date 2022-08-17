import React from 'react'

import { ITextareaComponentProps } from './types'

import * as S from './styles'

const TextareaComponent = (props: ITextareaComponentProps) => {
  const { label, name, placeholder, onChangeHandler, value } = props

  return (
    <S.TextareaWrapper>
      <S.TextareaLabel>{label}</S.TextareaLabel>
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
