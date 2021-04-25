import styled from 'styled-components'

import BackgroundImage from '../src/components/backgroundImage'

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
        Hello World
      </StyledHomePage>
    </BackgroundImage>
  )
}

export default HomePage