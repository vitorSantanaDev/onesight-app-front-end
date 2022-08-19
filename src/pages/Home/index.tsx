import React, { useContext, useEffect } from 'react'

import { ModalContext } from '../../contexts/ModalContext'
import { AppointmentsContext } from '../../contexts/AppointmentsContext'
import { AppointmentCard, Calendar, TitleComponent } from '../../components'

import Illustration from '../../assets/undraw_date_picker_re_r0p8.svg'

import { AppointmentStatusEnum } from '../../interfaces/appointments'

import { getAllAppointments } from '../../services/appointments.service'

import * as S from './styles'

const Home = () => {
  const { showModal, setShowModal } = useContext(ModalContext)
  const { appointments, setAppointments } = useContext(AppointmentsContext)

  const fetchAllAppointments = () => {
    ;(async () => {
      const appointmentsData = await getAllAppointments()
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
      <S.AppointmentsWrapper>
        {appointments.length > 0 &&
          appointments.map(({ name, description, date, status, _id }) => (
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
    </S.HomePageWrapper>
  )
}

export default Home
