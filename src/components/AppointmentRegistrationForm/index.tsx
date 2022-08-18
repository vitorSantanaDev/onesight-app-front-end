import React, {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useContext,
  useState
} from 'react'
import { toast } from 'react-toastify'

import ButtonComponent from '../ButtonComponent'
import InputComponent from '../InputComponent'
import InputDatePicker from '../InputDatePicker'
import TextareaComponent from '../TextareaComponent'

import { DateContext } from '../../contexts/DateContext'
import { ModalContext } from '../../contexts/ModalContext'

import { createAppointment } from '../../services/appointments.service'

import * as S from './styles'

const AppointmentRegistrationForm = () => {
  const { showModal, setShowModal } = useContext(ModalContext)
  const { selectedDate, setSelectedDate } = useContext(DateContext)
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

  const registeringNewAppointment = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
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

  return (
    <S.FormWrapper onSubmit={registeringNewAppointment}>
      <InputDatePicker
        date={selectedDate ? selectedDate : new Date()}
        setDate={setSelectedDate as Dispatch<SetStateAction<Date>>}
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
        <ButtonComponent type="submit">Salvar</ButtonComponent>
      </S.ButtonSubmitWrapper>
    </S.FormWrapper>
  )
}

export default AppointmentRegistrationForm
