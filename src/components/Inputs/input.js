import styled from 'styled-components'

const StyledInput = styled.input`
  background: ${({ theme }) => theme.colors.inputBackground};
  border: 0;
  margin: 10px 0;
  padding: 15px; 20px;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 50px;
  min-width: 250px;
  font-size: 14px;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${({ theme }) => theme.colors.white};
  }
`

export default StyledInput