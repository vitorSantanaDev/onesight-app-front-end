import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { IAppointment } from '../../interfaces/appointments'
import { getAppointment } from '../../services/appointments.service'

import { AppointmentDetailComponent } from '../../components'

import * as S from './styles'

const AppointmentDetailsPage = () => {
  const { ID: appointmentID } = useParams()
  const [appointmentState, setAppointmentState] = useState<IAppointment>()

  const fetchAppointment = () => {
    ;(async () => {
      if (appointmentID) {
        const appointmentData = await getAppointment(appointmentID)
        setAppointmentState(appointmentData.data.appointment)
      }
    })()
  }

  useEffect(fetchAppointment, [appointmentID])

  return (
    <S.AppointmentDetailsPageWrapper>
      {appointmentState && <AppointmentDetailComponent {...appointmentState} />}
    </S.AppointmentDetailsPageWrapper>
  )
}

export default AppointmentDetailsPage
