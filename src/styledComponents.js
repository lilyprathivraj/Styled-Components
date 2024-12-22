import styled from 'styled-components'

export const Heading = styled.h1`
  color: red;
  font-family: Roboto;
`
export const CustomButton = styled.button`
  color: ${props => (props.outline ? 'green' : 'black')};
  font-family: Roboto;
`
