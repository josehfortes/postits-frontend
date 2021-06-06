import { useState } from 'react'

import styled from 'styled-components'

import Input from '../Inputs/input'
import Button from '../Buttons/button'

const StyledForm = styled.form`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
`

const StyledText = styled.a`
  margin-top: 15px;
  font-size: 14px;
  color: ${({theme}) => theme.colors.white};
  text-align: center;
`

const Error = styled.p`
  color: ${({theme}) => theme.colors.error};
  text-align: center;
`

function Form ({ onSubmit, submitButtonText, linkText, onLinkClick, isRegister, error }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({ email, password, firstName, lastName })
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      {
        isRegister && <Input 
          type='text'
          placeholder='Nome'
          required
          value={firstName}
          onChange={({ target }) => setFirstName(target.value)}
        />
      }
      {
        isRegister && <Input 
          type='text'
          placeholder='Sobrenome'
          required
          value={lastName}
          onChange={({ target }) => setLastName(target.value)}
        />
      }
      <Input 
        type='email'
        placeholder='E-mail'
        required
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />
      <Input 
        type='password' 
        placeholder='Senha' 
        required 
        value={password}
        onChange={({ target }) => setPassword(target.value)}
        />
      <Button type='submit'>{submitButtonText}</Button>
      <StyledText href="#" onClick={onLinkClick }>{linkText}</StyledText>
      {error && <Error>Erro ao {isRegister ? 'Cadastrar' : 'Entrar'}.</Error>}
    </StyledForm>
  )
}

Form.defaultProps = {
  onSubmit: () => {},
  submitButtonText: '',
  linkText: '',
  onLinkClick: () => {},
}

export default Form