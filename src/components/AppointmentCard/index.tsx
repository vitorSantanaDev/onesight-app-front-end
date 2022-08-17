import React from 'react'
import { Link } from 'react-router-dom'

import { routesNameEnum } from '../../routes/routesEnum'

import { IAppointmentCardProps } from './types'

import * as S from './styles'

const AppointmentCard = (props: IAppointmentCardProps) => {
  const { appointmentDescription, appointmentStatus, appointmentTitle } = props
  return (
    <Link to={routesNameEnum.APPOINTMENT_DETAILS}>
      <S.AppointmentCardWrapper status={appointmentStatus}>
        <S.AppointmentCardTitle>{appointmentTitle}</S.AppointmentCardTitle>
        <S.AppointmentCardDescription>
          {appointmentDescription}
        </S.AppointmentCardDescription>
      </S.AppointmentCardWrapper>
    </Link>
  )
}

export default AppointmentCard
