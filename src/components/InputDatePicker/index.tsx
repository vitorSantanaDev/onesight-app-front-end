import React from 'react'
import { registerLocale } from 'react-datepicker'
import ptBR from 'date-fns/locale/pt-BR'

import LabelComponent from '../LabelComponent'

import { IInputDatePickerProps } from './types'

import 'react-datepicker/dist/react-datepicker.css'
import * as S from './styles'

registerLocale('pt-BR', ptBR)

const InputDatePicker = (props: IInputDatePickerProps) => {
  const { date, setDate } = props
  return (
    <S.InputWrapper>
      <LabelComponent>Escolha uma data*</LabelComponent>
      <S.InputElement
        locale="pt-BR"
        selected={date}
        placeholderText="Defina uma data para seu compromisso"
        onChange={(date: Date) => setDate(date)}
      />
    </S.InputWrapper>
  )
}

export default InputDatePicker
