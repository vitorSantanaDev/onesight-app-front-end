import React, { useContext, useEffect } from 'react'

import { AppointmentCard, Calendar } from '../../components'
import { AppointmentsContext } from '../../contexts/AppointmentsContext'
import { ModalContext } from '../../contexts/ModalContext'

import { AppointmentStatusEnum } from '../../interfaces/appointments'

import { getAllAppointments } from '../../services/appointments.service'

import * as S from './styles'

const Home = () => {
  const { showModal } = useContext(ModalContext)
  const { appointments, setAppointments } = useContext(AppointmentsContext)

  const fetchAllAppointments = () => {
    ;(async () => {
      const appointmentsData = await getAllAppointments()
      setAppointments?.(appointmentsData.data.appointments)
    })()
  }

  useEffect(fetchAllAppointments, [showModal, setAppointments])

  return (
    <S.HomePageWrapper>
      <Calendar />
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
