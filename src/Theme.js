import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    primary: '#7D2ECC',
    light: '#F0F0F0',
    white: '#FFFFFF',
  }
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{ children }</ThemeProvider>
)

export default Theme