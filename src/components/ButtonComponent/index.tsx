import React from 'react'

import { IButtonComponentProps } from './types'

import * as S from './styles'

const ButtonComponent = (props: IButtonComponentProps) => {
  const { children, onClickHandler, type = 'button' } = props
  return (
    <S.ButtonElement type={type} onClick={onClickHandler}>
      {children}
    </S.ButtonElement>
  )
}

export default ButtonComponent
