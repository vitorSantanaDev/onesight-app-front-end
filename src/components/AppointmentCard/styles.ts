import styled, { css } from 'styled-components'

import { AppointmentStatusEnum } from '../../interfaces/appointments'

type AppointmentStatus = {
  status: AppointmentStatusEnum
}

export const AppointmentCardWrapper = styled.div<AppointmentStatus>`
  width: 100%;
  padding: 16px;
  cursor: pointer;
  border-radius: 5px;
  background-color: #006edc;
  transition: ease-in-out all 300ms;

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

  &:hover {
    transform: scale(1.01);
  }
`

export const AppointmentCardHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`

export const ButtonDeleteAppointment = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;

  transition: ease-in-out 300ms all;

  &:hover {
    transform: scale(1.01);
  }
`

export const AppointmentCardTitle = styled.h2<AppointmentStatus>`
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 12px;

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

export const AppointmentCardDate = styled.span<AppointmentStatus>`
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 12px;
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

export const AppointmentCardDescription = styled.p<AppointmentStatus>`
  color: #e3e4e6;
  font-size: 14px;
  margin-bottom: 16px;

  overflow: hidden;
  display: -webkit-box;
  text-overflow: ellipsis;

  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

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

export const ButtonsActionsWrapper = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ButtonAction = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;

  transition: ease-in-out 300ms all;

  &:hover {
    transform: scale(1.01);
  }
`

export const ButtonActionDetails = styled.button<AppointmentStatus>`
  border: none;
  cursor: pointer;
  color: #fff;
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
