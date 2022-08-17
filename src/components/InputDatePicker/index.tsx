import React, { useState } from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'
import ptBR from 'date-fns/locale/pt-BR'

import { IInputDatePickerProps } from './types'

import 'react-datepicker/dist/react-datepicker.css'
import * as S from './styles'

registerLocale('pt-BR', ptBR)

const InputDatePicker = (props: IInputDatePickerProps) => {
  const { date, setDate } = props
  return (
    <S.InputElement
      locale="pt-BR"
      selected={date}
      onChange={(date: Date) => setDate(date)}
    />
  )
}

export default InputDatePicker
