import { AppointmentStatusEnum } from '../../interfaces/appointments'

export interface IAppointmentCardProps {
  ID: string
  appointmentTitle: string
  appointmentDescription: string
  appointmentDate: Date
  appointmentStatus: AppointmentStatusEnum
}
