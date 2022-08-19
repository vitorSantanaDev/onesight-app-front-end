export enum AppointmentStatusEnum {
  CANCELED = 'CANCELED',
  APPROVED = 'APPROVED',
  OPENED = 'OPENED'
}

export interface IAppointment {
  _id?: string
  date: Date
  name: string
  createdAt?: Date
  description: string
  status?: AppointmentStatusEnum
}
