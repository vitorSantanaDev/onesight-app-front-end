import React, { Fragment, useEffect, useState } from 'react'
import Calendar from 'react-calendar'

import AppointmentCreationModal from '../AppointmentCreationModal'

import * as S from './styles'

import 'react-calendar/dist/Calendar.css'

function CalendarComponent() {
  const [showModal, setShowModal] = useState(false)
  const [selectedDate, setSelectedDate] = useState<Date>()

  useEffect(() => {
    if (selectedDate) {
      setShowModal(true)
    }
  }, [selectedDate])

  return (
    <S.CalendarWrapper>
      <AppointmentCreationModal
        isVisible={showModal}
        onCloseHandler={setShowModal}
        appointmentDate={selectedDate as Date}
      />
      <Calendar onChange={setSelectedDate} value={selectedDate} />
    </S.CalendarWrapper>
  )
}

export default CalendarComponent
