import styled from 'styled-components'

export const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100%;
  padding: 0px 32px;
  z-index: 1000;

  top: 0;
  left: 0;
  position: fixed;

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
