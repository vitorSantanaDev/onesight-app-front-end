import styled, { css } from 'styled-components'
import { AppointmentStatusEnum } from '../../interfaces/appointments'

type AppointmentStatus = {
  status: AppointmentStatusEnum
}

export const AppointmentDetailComponentWrapper = styled.div<AppointmentStatus>`
  width: 100%;
  padding: 32px;
  max-width: 580px;

  background-color: #006edc;

  border-radius: 5px;

  ${({ status }) =>
    status === AppointmentStatusEnum.APPROVED &&
    css`
      color: #1b1b1b;
      background-color: #03fc24;
    `}

  ${({ status }) =>
    status === AppointmentStatusEnum.CANCELED &&
    css`
      background-color: #fc0352;
    `}
`

export const AppointmentTitle = styled.h2<AppointmentStatus>`
  color: #fff;
  font-size: 24px;
  margin-bottom: 16px;

  ${({ status }) =>
    status === AppointmentStatusEnum.APPROVED &&
    css`
      color: #1b1b1b;
    `}

  ${({ status }) =>
    status === AppointmentStatusEnum.CANCELED &&
    css`
      text-decoration: line-through;
    `}
`

export const AppointmentDate = styled.span<AppointmentStatus>`
  color: #fff;
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 16px;
  display: inline-block;

  ${({ status }) =>
    status === AppointmentStatusEnum.APPROVED &&
    css`
      color: #1b1b1b;
    `}

  ${({ status }) =>
    status === AppointmentStatusEnum.CANCELED &&
    css`
      text-decoration: line-through;
    `}
`

export const AppointmentDescription = styled.p<AppointmentStatus>`
  font-size: 16px;
  color: #e3e4e6;
  margin-bottom: 16px;

  ${({ status }) =>
    status === AppointmentStatusEnum.APPROVED &&
    css`
      color: #363433;
    `}

  ${({ status }) =>
    status === AppointmentStatusEnum.CANCELED &&
    css`
      text-decoration: line-through;
    `}
`

export const StatusLabel = styled.strong<AppointmentStatus>`
  color: #ffff;
  font-size: 16px;
  margin-top: 10px;
  display: inline-block;

  ${({ status }) =>
    status === AppointmentStatusEnum.APPROVED &&
    css`
      color: #1b1b1b;
    `}
`

export const ButtonsActionsWrapper = styled.div`
  width: 100%;
  margin-top: 20px;

  display: flex;
  align-items: baseline;
  justify-content: space-between;
`

export const ButtonActionGoToHome = styled.button<AppointmentStatus>`
  color: #fff;
  border: none;
  font-size: 18px;
  cursor: pointer;
  text-decoration: underline;
  background-color: transparent;

  ${({ status }) =>
    status === AppointmentStatusEnum.APPROVED &&
    css`
      color: #363433;
    `}

  ${({ status }) =>
    status === AppointmentStatusEnum.CANCELED &&
    css`
      text-decoration: line-through;
    `}

  transition: ease-in-out 300ms all;

  &:hover {
    transform: scale(1.01);
  }
`

export const ButtonEditAppointment = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
`
