export interface IAppointmentCreationModalProps {
  isVisible: boolean
  appointmentDate: Date
  onCloseHandler: React.Dispatch<React.SetStateAction<boolean>>
}
