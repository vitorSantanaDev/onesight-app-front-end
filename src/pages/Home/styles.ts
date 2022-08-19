import styled from 'styled-components'

export const HomePageWrapper = styled.main`
  width: 100%;
`

export const TitleWrapper = styled.div`
  padding: 24px;
  text-align: center;
`

export const AppointmentsWrapper = styled.section`
  gap: 30px;
  display: grid;
  padding: 32px 24px;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));

  > a {
    text-decoration: none;
  }
`

export const SectionHeroWrapper = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const Illustration = styled.img`
  width: 100%;
`
