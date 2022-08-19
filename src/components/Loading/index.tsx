import React from 'react'

import * as S from './styles'

const Loading = () => {
  return (
    <S.SpinnerOverlay>
      <S.SpinnerContainer />
    </S.SpinnerOverlay>
  )
}

export default Loading
