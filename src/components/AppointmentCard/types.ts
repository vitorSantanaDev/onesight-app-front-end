export enum AppointmentStatusEnum {
  CANCELED = 'CANCELED',
  APPROVED = 'APPROVED'
}

export interface IAppointmentCardProps {
  appointmentTitle: string
  appointmentDescription: string
  appointmentStatus: AppointmentStatusEnum
}
