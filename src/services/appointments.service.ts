/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosInstance from './api'

import { AppointmentStatusEnum, IAppointment } from '../interfaces/appointments'

export type IAppointmentRequest = IAppointment

export async function getAllAppointments() {
  try {
    const response = await axiosInstance.get(`/appointments`)
    return response.data
  } catch (err) {
    const error = err as any
    console.log(error.message)
  }
}

export async function getAppointment(appointmentID: string) {
  try {
    const response = await axiosInstance.get(`/appointments/${appointmentID}`)
    return response.data
  } catch (err) {
    const error = err as any
    console.log(error.message)
  }
}

export async function createAppointment(payload: IAppointmentRequest) {
  try {
    const response = await axiosInstance.post(`/appointments`, { ...payload })
    return response.data
  } catch (err) {
    const error = err as any
    console.log(error.message)
  }
}

export async function approveOrCancelAppointment(
  appointmentID: string,
  status: AppointmentStatusEnum
) {
  try {
    const response = await axiosInstance.patch(
      `/appointments/approve-or-cancel-appointment/${appointmentID}`,
      { status }
    )
    return response.data
  } catch (err) {
    const error = err as any
    console.log(error.message)
  }
}

export async function deleteAppointment(appointmentID: string) {
  try {
    const response = await axiosInstance.delete(
      `/appointments/${appointmentID}`
    )
    return response.data
  } catch (err) {
    const error = err as any
    console.log(error.message)
  }
}
