import styled from 'styled-components'

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  border: 0;
  border-radius: 50px;
  padding: 15px 20px;
  margin: 10px 0;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  cursor: pointer;
  font-size: 14px;
`

export default StyledButton