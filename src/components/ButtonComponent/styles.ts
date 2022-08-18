import styled from 'styled-components'

export const ButtonElement = styled.button`
  width: 80%;
  border: 0;
  padding: 15px;
  color: #ffff;
  cursor: pointer;
  border-radius: 5px;
  background-color: #006edc;
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.01);
  }
`
