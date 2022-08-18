import styled from 'styled-components'

export const ModalWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  z-index: 1000;

  position: absolute;

  background-color: rgba(0, 0, 0, 0.4);

  display: flex;
  align-items: center;
  justify-content: center;
`

export const ModalContentWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 32px 16px;

  border-radius: 4px;
  background-color: #fff;
`

export const ButtonCloseModalWrapper = styled.div`
  width: 100%;
  padding-right: 16px;

  display: flex;
  justify-content: flex-end;
`
