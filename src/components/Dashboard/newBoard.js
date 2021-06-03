import styled from 'styled-components'
import Input from '../Inputs/input'
import Button from '../Buttons/button'

const StyledForm = styled.form`
  display: flex;

  @media (max-width: 550px){
    flex-direction: column;
  }
`

const InputSpacing = styled.div`
  margin-right: 20px;
`

function NewBoard () {

  const handleSubmitNewForm = (e) => {
    e.preventDefault()
  }

  return (
    <StyledForm onSubmit={handleSubmitNewForm}>
      <InputSpacing>
        <Input type="text" placeholder="Nome do quadro" required />
      </InputSpacing>
      <Button type="submit">Criar novo quadro</Button>
    </StyledForm>
  )
}

export default NewBoard