import React, { useContext, useEffect, useState } from 'react'

import { ModalContext } from '../../contexts/ModalContext'
import { AppointmentsContext } from '../../contexts/AppointmentsContext'
import {
  AppointmentCard,
  Calendar,
  Loading,
  TitleComponent
} from '../../components'

import Illustration from '../../assets/undraw_date_picker_re_r0p8.svg'

import { AppointmentStatusEnum } from '../../interfaces/appointments'

import { getAllAppointments } from '../../services/appointments.service'

import * as S from './styles'

const Home = () => {
  const { showModal, setShowModal } = useContext(ModalContext)
  const { appointments, setAppointments } = useContext(AppointmentsContext)
  const [isLoading, setIsLoading] = useState(false)

  const fetchAllAppointments = () => {
    ;(async () => {
      setIsLoading(true)
      const appointmentsData = await getAllAppointments()
      setIsLoading(false)
      setAppointments?.(appointmentsData.data.appointments)
    })()
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setShowModal?.(false), [])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(fetchAllAppointments, [])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(fetchAllAppointments, [showModal])

  return (
    <S.HomePageWrapper>
      <S.TitleWrapper>
        <TitleComponent>Marque os seus compromissos</TitleComponent>
      </S.TitleWrapper>
      <S.SectionHeroWrapper>
        <Calendar />
        <S.Illustration src={Illustration} alt="" />
      </S.SectionHeroWrapper>
      {appointments.length > 0 && !isLoading ? (
        <S.AppointmentsWrapper>
          {appointments.map(({ name, description, date, status, _id }) => (
            <AppointmentCard
              key={_id}
              ID={_id as string}
              appointmentDate={date}
              appointmentTitle={name}
              appointmentDescription={description}
              appointmentStatus={status as AppointmentStatusEnum}
            />
          ))}
        </S.AppointmentsWrapper>
      ) : (
        <S.LoadingWrapper>
          <Loading />
        </S.LoadingWrapper>
      )}
    </S.HomePageWrapper>
  )
}

export default Home
