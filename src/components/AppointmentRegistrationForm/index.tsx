import React, { ChangeEvent, useEffect, useState } from 'react'

import ButtonComponent from '../ButtonComponent'
import InputComponent from '../InputComponent'
import InputDatePicker from '../InputDatePicker'
import TextareaComponent from '../TextareaComponent'

import { IAppointmentRegistrationFormProps } from './types'

import * as S from './styles'

const AppointmentRegistrationForm = (
  props: IAppointmentRegistrationFormProps
) => {
  const { appointmentDate } = props

  const [newDateSelected, setNewDateSelected] = useState<Date>(appointmentDate)
  const [appointmentName, setAppointmentName] = useState('')
  const [notesAboutTheAppointment, setNotesAboutTheAppointment] = useState('')

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

  useEffect(() => {
    if (appointmentDate) {
      setNewDateSelected(appointmentDate)
    }
  }, [appointmentDate])

  return (
    <S.FormWrapper>
      <InputDatePicker date={newDateSelected} setDate={setNewDateSelected} />
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
      <ButtonComponent onClickHandler={() => console.log('Salvando')}>
        Salvar
      </ButtonComponent>
    </S.FormWrapper>
  )
}

export default AppointmentRegistrationForm
