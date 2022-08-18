import React from 'react'
import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { IAppointmentDetailComponentProps } from './types'

import * as S from './styles'

const AppointmentDetailComponent = (
  props: IAppointmentDetailComponentProps
) => {
  const { date, description, name, status } = props

  return (
    <S.AppointmentDetailComponentWrapper>
      <S.AppointmentTitle>{name}</S.AppointmentTitle>
      <S.AppointmentDate>
        {String(
          format(new Date(date), "iiii',' dd/MM/yyyy '-' p", { locale: ptBR })
        )}
      </S.AppointmentDate>
      <S.AppointmentDescription>{description}</S.AppointmentDescription>
      <S.AppointmentStatus>{status}</S.AppointmentStatus>
    </S.AppointmentDetailComponentWrapper>
  )
}

export default AppointmentDetailComponent
