import React, { Fragment } from 'react'
import { Close } from '@styled-icons/material-outlined'

import AppointmentRegistrationForm from '../AppointmentRegistrationForm'

import { IAppointmentCreationModalProps } from './types'

import * as S from './styles'

const AppointmentCreationModal = (props: IAppointmentCreationModalProps) => {
  const { isVisible, onCloseHandler, appointmentDate } = props

  return (
    <Fragment>
      {isVisible ? (
        <S.ModalWrapper>
          <S.ModalContentWrapper>
            <S.ButtonCloseModalWrapper>
              <Close
                size={32}
                cursor="pointer"
                color="#1a1a1a"
                onClick={() => onCloseHandler(!isVisible)}
              />
            </S.ButtonCloseModalWrapper>
            <AppointmentRegistrationForm appointmentDate={appointmentDate} />
          </S.ModalContentWrapper>
        </S.ModalWrapper>
      ) : null}
    </Fragment>
  )
}

export default AppointmentCreationModal
