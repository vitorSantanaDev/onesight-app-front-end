import styled from 'styled-components'

export const AppointmentDetailsPageWrapper = styled.main`
  width: 100%;
  padding: 32px 24px;
  min-height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

export const AppointmentDetailsPageTitle = styled.h2`
  font-size: 32px;
  margin-bottom: 32px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`
