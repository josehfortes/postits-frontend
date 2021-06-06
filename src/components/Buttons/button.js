import styled from 'styled-components'

const OUTLINED = 'outlined'

const StyledButton = styled.button`
  background-color: ${({ theme, variant }) => variant === OUTLINED ? 'transparent' : theme.colors.primary};
  border: 0;
  border-radius: 50px;
  padding: 15px 20px;
  margin: 10px 0;
  color: ${({ theme, variant }) => variant === OUTLINED ? theme.colors.primary : theme.colors.white};
  font-weight: bold;
  cursor: pointer;
  font-size: 14px;

  ${({ variant, theme }) => variant === OUTLINED ? `border: 1px solid ${theme.colors.primary}` : ''};

  ${({ fullWidth }) => fullWidth ? 'width: 100%' : ''};
  
  :hover {
    background-color: ${({ theme, variant }) => variant === OUTLINED ? theme.colors.grey : theme.colors.primaryHover };
  }
`

export default StyledButton