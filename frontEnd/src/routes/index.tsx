import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { AppointmentDetails, Home } from '../pages'

import { routesNameEnum } from './routesEnum'

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routesNameEnum.HOME} element={<Home />} />
        <Route
          path={routesNameEnum.APPOINTMENT_DETAILS}
          element={<AppointmentDetails />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp
