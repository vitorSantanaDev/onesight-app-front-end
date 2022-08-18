import React, {
  Dispatch,
  Fragment,
  useEffect,
  useContext,
  SetStateAction
} from 'react'
import Calendar from 'react-calendar'

import { DateContext } from '../../contexts/DateContext'
import { ModalContext } from '../../contexts/ModalContext'

import AppointmentCreationModal from '../AppointmentCreationModal'

import 'react-calendar/dist/Calendar.css'

import * as S from './styles'

function CalendarComponent() {
  const { showModal, setShowModal } = useContext(ModalContext)
  const { selectedDate, setSelectedDate } = useContext(DateContext)

  useEffect(() => {
    if (selectedDate) {
      setShowModal?.(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDate])

  useEffect(() => {
    if (!showModal) {
      setSelectedDate?.(null)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showModal])

  return (
    <Fragment>
      <AppointmentCreationModal />
      <S.CalendarWrapper>
        <Calendar
          value={selectedDate}
          onChange={setSelectedDate as Dispatch<SetStateAction<Date>>}
        />
      </S.CalendarWrapper>
    </Fragment>
  )
}

export default CalendarComponent
