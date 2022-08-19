import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { ModalContext } from '../../contexts/ModalContext'

import { IAppointment } from '../../interfaces/appointments'
import { getAppointment } from '../../services/appointments.service'

import Illustration from '../../assets/undraw_time_management_re_tk5w.svg'

import {
  AppointmentDetailComponent,
  Loading,
  TitleComponent
} from '../../components'

import * as S from './styles'

const AppointmentDetailsPage = () => {
  const { ID: appointmentID } = useParams()
  const { showModal } = useContext(ModalContext)
  const [appointmentState, setAppointmentState] = useState<IAppointment>()
  const [isLoading, setIsLoading] = useState(false)

  const fetchAppointment = () => {
    ;(async () => {
      if (appointmentID) {
        setIsLoading(true)
        const appointmentData = await getAppointment(appointmentID)
        setIsLoading(false)
        setAppointmentState(appointmentData.data.appointment)
      }
    })()
  }

  useEffect(fetchAppointment, [appointmentID, showModal])

  return (
    <S.AppointmentDetailsPageWrapper>
      <TitleComponent>Detalhes do compromisso</TitleComponent>
      <S.SectionHeroWrapper>
        {appointmentState && !isLoading ? (
          <AppointmentDetailComponent {...appointmentState} />
        ) : (
          <S.LoadingWrapper>
            <Loading />
          </S.LoadingWrapper>
        )}
        <S.Illustration src={Illustration} />
      </S.SectionHeroWrapper>
    </S.AppointmentDetailsPageWrapper>
  )
}

export default AppointmentDetailsPage
