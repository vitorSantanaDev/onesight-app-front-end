import React, { createContext, ReactNode, useState } from 'react'

const initialState = {
  showModal: false,
  setShowModal: null
}

export const ModalContext = createContext<{
  showModal: boolean
  setShowModal: React.Dispatch<React.SetStateAction<boolean>> | null
}>(initialState)

export interface IModalContextProps {
  children: ReactNode
}

const ModalContextProvider = ({ children }: IModalContextProps) => {
  const [showModal, setShowModal] = useState(false)
  return (
    <ModalContext.Provider value={{ showModal, setShowModal }}>
      {children}
    </ModalContext.Provider>
  )
}

export default ModalContextProvider
