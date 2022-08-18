import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify'

import App from './App'

import {
  AppointmentsContextProvider,
  DateContextProvider,
  ModalContextProvider
} from './contexts'

import GlobalStyles from './styles/global'
import 'react-toastify/dist/ReactToastify.min.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <AppointmentsContextProvider>
      <DateContextProvider>
        <ModalContextProvider>
          <GlobalStyles />
          <App />
          <ToastContainer />
        </ModalContextProvider>
      </DateContextProvider>
    </AppointmentsContextProvider>
  </React.StrictMode>
)
