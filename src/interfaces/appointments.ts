export enum AppointmentStatusEnum {
  CANCELED = 'CANCELED',
  APPROVED = 'APPROVED',
  OPENED = 'OPENED'
}

export interface IAppointment {
  _id?: string
  date: Date
  name: string
  description: string
  status?: AppointmentStatusEnum
}
