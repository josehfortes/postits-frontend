import Image from 'next/image'
import styled from 'styled-components'

import LoginForm from './loginForm'

const StyledFormSpace = styled.div`
  display: flex;
  flex-direction: column;
`

function FormSpace () {
  return (
    <StyledFormSpace>
      <Image src='/logo.svg' width='145' height='63' />
      <LoginForm />
    </StyledFormSpace>
  )
}

export default FormSpace