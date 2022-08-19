import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { ModalContext } from '../../contexts/ModalContext'

import { IAppointment } from '../../interfaces/appointments'
import { getAppointment } from '../../services/appointments.service'

import { AppointmentDetailComponent, TitleComponent } from '../../components'

import * as S from './styles'

const AppointmentDetailsPage = () => {
  const { ID: appointmentID } = useParams()
  const { showModal } = useContext(ModalContext)
  const [appointmentState, setAppointmentState] = useState<IAppointment>()

  const fetchAppointment = () => {
    ;(async () => {
      if (appointmentID) {
        const appointmentData = await getAppointment(appointmentID)
        setAppointmentState(appointmentData.data.appointment)
      }
    })()
  }

  useEffect(fetchAppointment, [appointmentID, showModal])

  return (
    <S.AppointmentDetailsPageWrapper>
      <TitleComponent>Detalhes do compromisso</TitleComponent>
      {appointmentState && <AppointmentDetailComponent {...appointmentState} />}
    </S.AppointmentDetailsPageWrapper>
  )
}

export default AppointmentDetailsPage
