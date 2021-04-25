import { useState } from 'react'

import Image from 'next/image'
import styled from 'styled-components'

import Form from './form'

const StyledFormSpace = styled.div`
  display: flex;
  flex-direction: column;
`

function FormSpace () {
  const [formState, setFormState] = useState(true)

  const handleLogin = ({ email, password }) => {
    console.log({ email, password })
  }

  const handleRegister = ({ email, password }) => {
    console.log({ email, password })
  }

  return (
    <StyledFormSpace>
      <Image src='/logo.svg' width='145' height='63' />
      {
        formState ?
          <Form 
            onSubmit={handleLogin}
            submitButtonText='Entrar'
            linkText='Não possui conta? Clique aqui'
            onLinkClick={() => setFormState(false)}
          /> :
          <Form 
            onSubmit={handleRegister}
            submitButtonText='Cadastrar'
            linkText='Já possui conta? Clique aqui'
            onLinkClick={() => setFormState(true)}
          />
      }
    </StyledFormSpace>
  )
}

export default FormSpace