import { ChangeEvent } from 'react'

export interface ITextareaComponentProps {
  name: string
  label: string
  placeholder: string
  value: string
  onChangeHandler: (event: ChangeEvent<HTMLTextAreaElement>) => void
}
