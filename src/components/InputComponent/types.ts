import { ChangeEvent } from 'react'

export interface IInputComponentProps {
  type: string
  name: string
  label: string
  value: string
  placeholder: string
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void
}
