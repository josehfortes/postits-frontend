import styled from 'styled-components'

import BackgroundImage from '../src/components/backgroundImage'
import FormSpace from '../src/components/LoginPage/formSpace'

const StyledHomePage = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

function HomePage () {
  return (
    <BackgroundImage>
      <StyledHomePage>
        <FormSpace isLoginPage />
      </StyledHomePage>
    </BackgroundImage>
  )
}

export default HomePage