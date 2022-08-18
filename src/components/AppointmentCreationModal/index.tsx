import React, { Fragment, useContext } from 'react'
import { Close } from '@styled-icons/material-outlined'

import AppointmentRegistrationForm from '../AppointmentRegistrationForm'

import { ModalContext } from '../../contexts/ModalContext'

import * as S from './styles'

const AppointmentCreationModal = () => {
  const { showModal, setShowModal } = useContext(ModalContext)

  return (
    <Fragment>
      {showModal ? (
        <S.ModalWrapper>
          <S.ModalContentWrapper>
            <S.ButtonCloseModalWrapper>
              <Close
                size={32}
                cursor="pointer"
                color="#1a1a1a"
                onClick={() => setShowModal?.(!showModal)}
              />
            </S.ButtonCloseModalWrapper>
            <AppointmentRegistrationForm />
          </S.ModalContentWrapper>
        </S.ModalWrapper>
      ) : null}
    </Fragment>
  )
}

export default AppointmentCreationModal
