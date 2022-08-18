import React from 'react'

import { ILabelComponentProps } from './types'

import * as S from './styles'

const LabelComponent = (props: ILabelComponentProps) => {
  const { children, htmlFor } = props
  return <S.LabelElement htmlFor={htmlFor}>{children}</S.LabelElement>
}

export default LabelComponent
