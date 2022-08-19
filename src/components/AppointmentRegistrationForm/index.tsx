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
  const [descriptionAppointment, setDescriptionAppointment] = useState(
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

  const descriptionAppointmentHandler = ({
    target
  }: ChangeEvent<HTMLTextAreaElement>) => {
    setDescriptionAppointment(target.value)
  }

  const registeringNewAppointment = () => {
    ;(async () => {
      if (selectedDate) {
        await createAppointment({
          date: selectedDate,
          name: appointmentName,
          description: descriptionAppointment
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
          description: descriptionAppointment
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
        name="appointment"
        value={appointmentName}
        label="Compromisso*"
        onChangeHandler={appointmentNameHandler}
        placeholder="Digite aqui o nome do seu compromisso"
      />
      <TextareaComponent
        name="description"
        label="Descrição*"
        value={descriptionAppointment}
        onChangeHandler={descriptionAppointmentHandler}
        placeholder="Digite aqui observações sobre seu compromisso"
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
