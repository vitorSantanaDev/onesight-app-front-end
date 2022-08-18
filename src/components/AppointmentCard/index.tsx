import React, { Fragment, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { toast } from 'react-toastify'

import { AppointmentsContext } from '../../contexts/AppointmentsContext'

import {
  CalendarCancel,
  CalendarAdd
} from '@styled-icons/fluentui-system-filled'

import { Delete } from '@styled-icons/material-outlined'

import {
  AppointmentStatusEnum,
  IAppointment
} from '../../interfaces/appointments'
import { routesNameEnum } from '../../routes/routesEnum'
import {
  approveOrCancelAppointment,
  deleteAppointment,
  getAllAppointments
} from '../../services/appointments.service'

import { IAppointmentCardProps } from './types'

import * as S from './styles'

const AppointmentCard = (props: IAppointmentCardProps) => {
  const {
    ID,
    appointmentDate,
    appointmentTitle,
    appointmentStatus,
    appointmentDescription
  } = props

  const [appointmentState, setAppointmentState] = useState<IAppointment>({
    _id: ID,
    date: appointmentDate,
    name: appointmentTitle,
    status: appointmentStatus,
    description: appointmentDescription
  })
  const { setAppointments } = useContext(AppointmentsContext)

  const appointmentStatusValid = appointmentState.status
    ? appointmentState.status
    : appointmentStatus

  const iconColor =
    appointmentStatusValid === AppointmentStatusEnum.APPROVED
      ? '#1a1a1a'
      : '#ffff'

  const appointmentDateFormatted = String(
    format(new Date(appointmentState.date), "iiii',' dd/MM/yyyy '-' p", {
      locale: ptBR
    })
  )

  const updatingStatusOfAppointment = (
    appointmentID: string,
    status: AppointmentStatusEnum
  ) => {
    ;(async () => {
      const newAppointment = await approveOrCancelAppointment(
        appointmentID,
        status
      )
      setAppointmentState(newAppointment.data.newAppointment)
      toast.success(`Status do compromisso alterado!`)
    })()
  }

  const deletingAppointment = (appointmentID: string) => {
    ;(async () => {
      await deleteAppointment(appointmentID)
      const newAppointmentsArray = await getAllAppointments()
      setAppointments?.(newAppointmentsArray.data.appointments)
      toast.success(`Compromisso deletado com sucesso!`)
    })()
  }

  const deletingAppointmentHandler = () => deletingAppointment(ID)

  return (
    <Fragment>
      {appointmentState && (
        <S.AppointmentCardWrapper status={appointmentStatusValid}>
          <S.AppointmentCardHeader>
            <S.AppointmentCardTitle status={appointmentStatusValid}>
              {appointmentState.name}
            </S.AppointmentCardTitle>
            <S.ButtonDeleteAppointment onClick={deletingAppointmentHandler}>
              <Delete size={22} color={iconColor} />
            </S.ButtonDeleteAppointment>
          </S.AppointmentCardHeader>
          <S.AppointmentCardDate status={appointmentStatusValid}>
            {appointmentDateFormatted}
          </S.AppointmentCardDate>
          <S.AppointmentCardDescription status={appointmentStatusValid}>
            {appointmentState.description}
          </S.AppointmentCardDescription>
          <S.ButtonsActionsWrapper>
            <S.ButtonAction
              onClick={() =>
                updatingStatusOfAppointment(ID, AppointmentStatusEnum.CANCELED)
              }
            >
              <CalendarCancel size={22} color={iconColor} />
            </S.ButtonAction>
            <Link to={`${routesNameEnum.APPOINTMENT_DETAILS}/${ID}`}>
              <S.ButtonActionDetails status={appointmentStatusValid}>
                Detalhes
              </S.ButtonActionDetails>
            </Link>
            <S.ButtonAction
              onClick={() =>
                updatingStatusOfAppointment(ID, AppointmentStatusEnum.APPROVED)
              }
            >
              <CalendarAdd size={22} color={iconColor} />
            </S.ButtonAction>
          </S.ButtonsActionsWrapper>
        </S.AppointmentCardWrapper>
      )}
    </Fragment>
  )
}

export default AppointmentCard
