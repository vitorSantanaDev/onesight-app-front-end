import React, { Fragment, useState } from 'react'
import Calendar from 'react-calendar'

import 'react-calendar/dist/Calendar.css'

function CalendarComponent() {
  const [selectedDate, setSelectedDate] = useState(new Date())

  return (
    <Fragment>
      <Calendar onChange={setSelectedDate} value={selectedDate} />
    </Fragment>
  )
}

export default CalendarComponent
