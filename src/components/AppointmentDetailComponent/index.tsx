import React, { Fragment, useContext } from 'react'
import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useNavigate } from 'react-router-dom'

import { Edit } from '@styled-icons/material-outlined'

import { ModalContext } from '../../contexts/ModalContext'

import AppointmentCreationModal from '../AppointmentCreationModal'

import { routesNameEnum } from '../../routes/routesEnum'
import { AppointmentStatusEnum } from '../../interfaces/appointments'

import { IAppointmentDetailComponentProps } from './types'

import * as S from './styles'

const AppointmentDetailComponent = (
  props: IAppointmentDetailComponentProps
) => {
  const navigation = useNavigate()
  const { showModal, setShowModal } = useContext(ModalContext)
  const { date, description, name, status, _id } = props

  const dateAppointmentFormated = String(
    format(new Date(date), "iiii',' dd/MM/yyyy", { locale: ptBR })
  )

  const appointmentStatusValid = status as AppointmentStatusEnum

  const iconColor =
    appointmentStatusValid === AppointmentStatusEnum.APPROVED
      ? '#1a1a1a'
      : '#ffff'

  const appointmentStatus =
    status === AppointmentStatusEnum.APPROVED
      ? 'Aceito'
      : status === AppointmentStatusEnum.CANCELED
      ? 'Cancelado'
      : 'Em Aberto'

  const goToHomeHandler = () => navigation(routesNameEnum.HOME)

  const openModalToEditAppointmentHandler = () => {
    setShowModal?.(!showModal)
  }

  return (
    <Fragment>
      <AppointmentCreationModal
        isItEditing
        valueDate={date}
        valueNameAppointment={name}
        appointmentID={_id as string}
        valueDescriptionAppointment={description}
      />
      <S.AppointmentDetailComponentWrapper status={appointmentStatusValid}>
        <S.AppointmentTitle status={appointmentStatusValid}>
          {name}
        </S.AppointmentTitle>
        <S.AppointmentDate status={appointmentStatusValid}>
          {dateAppointmentFormated}
        </S.AppointmentDate>
        <S.AppointmentDescription status={appointmentStatusValid}>
          {description}
        </S.AppointmentDescription>
        <S.StatusLabel status={appointmentStatusValid}>
          Status - {appointmentStatus}
        </S.StatusLabel>
        <S.ButtonsActionsWrapper>
          <S.ButtonActionGoToHome
            onClick={goToHomeHandler}
            status={appointmentStatusValid}
          >
            Voltar
          </S.ButtonActionGoToHome>
          <S.ButtonEditAppointment onClick={openModalToEditAppointmentHandler}>
            <Edit size={24} color={iconColor} />
          </S.ButtonEditAppointment>
        </S.ButtonsActionsWrapper>
      </S.AppointmentDetailComponentWrapper>
    </Fragment>
  )
}

export default AppointmentDetailComponent
