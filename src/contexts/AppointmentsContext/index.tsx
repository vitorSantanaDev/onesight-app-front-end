import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState
} from 'react'
import { IAppointment } from '../../interfaces/appointments'

const initialState = {
  appointments: [],
  setAppointments: null
}

export const AppointmentsContext = createContext<{
  appointments: IAppointment[]
  setAppointments: Dispatch<SetStateAction<IAppointment[]>> | null
}>(initialState)

export interface IAppointmentsContextProps {
  children: ReactNode
}

const AppointmentsContextProvider = ({
  children
}: IAppointmentsContextProps) => {
  const [appointments, setAppointments] = useState<IAppointment[]>([])
  return (
    <AppointmentsContext.Provider value={{ appointments, setAppointments }}>
      {children}
    </AppointmentsContext.Provider>
  )
}

export default AppointmentsContextProvider
