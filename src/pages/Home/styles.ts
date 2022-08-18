import styled from 'styled-components'

export const HomePageWrapper = styled.main`
  width: 100%;
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
