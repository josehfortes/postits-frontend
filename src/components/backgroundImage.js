import styled from 'styled-components'

const StyledBackground = styled.div`
  height: 100vh;
  background-image: url('/background.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

function BackgroundImage ({ children }) {
  return (
    <StyledBackground>
      { children }
    </StyledBackground>
  )
}

export default BackgroundImage