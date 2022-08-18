import React, {
  Dispatch,
  FormEvent,
  useContext,
  ChangeEvent,
  SetStateAction,
  useState,
  useEffect
} from 'react'
import { toast } from 'react-toastify'
import { parseISO } from 'date-fns'

import ButtonComponent from '../ButtonComponent'
import InputComponent from '../InputComponent'
import InputDatePicker from '../InputDatePicker'
import TextareaComponent from '../TextareaComponent'

import { DateContext } from '../../contexts/DateContext'
import { ModalContext } from '../../contexts/ModalContext'

import {
  createAppointment,
  updatingAppointment
} from '../../services/appointments.service'

import { IAppointmentRegistrationFormProps } from './types'

import * as S from './styles'

const AppointmentRegistrationForm = (
  props: IAppointmentRegistrationFormProps
) => {
  const {
    valueDate,
    isItEditing,
    appointmentID,
    valueNameAppointment,
    valueDescriptionAppointment
  } = props

  const { showModal, setShowModal } = useContext(ModalContext)
  const { selectedDate, setSelectedDate } = useContext(DateContext)

  const [appointmentName, setAppointmentName] = useState(
    valueNameAppointment ? valueNameAppointment : ''
  )
  const [notesAboutTheAppointment, setNotesAboutTheAppointment] = useState(
    valueDescriptionAppointment ? valueDescriptionAppointment : ''
  )

  useEffect(() => {
    if (valueDate) {
      setSelectedDate?.(parseISO(String(valueDate)))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueDate])

  const appointmentNameHandler = ({
    target
  }: ChangeEvent<HTMLInputElement>) => {
    setAppointmentName(target.value)
  }

  const notesAboutTheAppointmentHandler = ({
    target
  }: ChangeEvent<HTMLTextAreaElement>) => {
    setNotesAboutTheAppointment(target.value)
  }

  const registeringNewAppointment = () => {
    ;(async () => {
      if (selectedDate) {
        await createAppointment({
          date: selectedDate,
          name: appointmentName,
          description: notesAboutTheAppointment
        })
        toast.success(`Lembrete definido com sucesso!`)
        setShowModal?.(!showModal)
      }
    })()
  }

  const editingAppointmentData = () => {
    ;(async () => {
      if (appointmentID) {
        await updatingAppointment(appointmentID, {
          name: appointmentName,
          date: selectedDate as Date,
          description: notesAboutTheAppointment
        })
        toast.success(`Lembrete Atualizado com sucesso!`)
        setShowModal?.(!showModal)
      }
    })()
  }

  const formSubmissionHandlerFunction = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (isItEditing) {
      editingAppointmentData()
      return
    }
    registeringNewAppointment()
  }

  const dateValueValid = selectedDate ? selectedDate : new Date()

  return (
    <S.FormWrapper onSubmit={formSubmissionHandlerFunction}>
      <InputDatePicker
        setDate={setSelectedDate as Dispatch<SetStateAction<Date>>}
        date={dateValueValid}
      />
      <InputComponent
        type="text"
        name="event"
        value={appointmentName}
        label="Evento/compromisso"
        onChangeHandler={appointmentNameHandler}
        placeholder="Digite aqui o nome do seu evento/compromisso"
      />
      <TextareaComponent
        name="nota"
        label="Nota"
        value={notesAboutTheAppointment}
        onChangeHandler={notesAboutTheAppointmentHandler}
        placeholder="Digite aqui observações sobre seu evento/compromisso"
      />
      <S.ButtonSubmitWrapper>
        <ButtonComponent type="submit">
          {isItEditing ? 'Editar' : 'Salvar'}
        </ButtonComponent>
      </S.ButtonSubmitWrapper>
    </S.FormWrapper>
  )
}

export default AppointmentRegistrationForm
