import React from 'react'

import * as S from './styles'
import { ITitleProps } from './types'

const TitleComponent = (props: ITitleProps) => {
  const { children } = props
  return <S.TitleElement>{children}</S.TitleElement>
}

export default TitleComponent
