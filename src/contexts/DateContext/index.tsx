import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState
} from 'react'

const initialState = {
  selectedDate: null,
  setSelectedDate: null
}

export const DateContext = createContext<{
  selectedDate: Date | null
  setSelectedDate: Dispatch<SetStateAction<Date | null>> | null
}>(initialState)

export interface IDateContextProps {
  children: ReactNode
}

const DateContextProvider = ({ children }: IDateContextProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  return (
    <DateContext.Provider value={{ selectedDate, setSelectedDate }}>
      {children}
    </DateContext.Provider>
  )
}

export default DateContextProvider
