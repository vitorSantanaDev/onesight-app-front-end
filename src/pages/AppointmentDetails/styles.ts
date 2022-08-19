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

export const SectionHeroWrapper = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;

  @media screen and (max-width: 768px) {
    gap: 24px;
    flex-direction: column;
  }
`

export const Illustration = styled.img`
  width: 100%;
`

export const LoadingWrapper = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
`
