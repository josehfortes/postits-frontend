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

function Form ({ onSubmit, submitButtonText, linkText, onLinkClick }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({ email, password })
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
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