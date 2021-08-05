import styled from 'styled-components'
import Image from 'next/image'
import { useCookies } from 'react-cookie'

const StyledInfoBar = styled.div`
  height: 70px;
  background-color: ${({theme}) => theme.colors.primary};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const StyledLinkLogo = styled.a`
  
`

const StyledLogout = styled.span`
  margin-right: 20px;
  color: ${({theme}) => theme.colors.white};
  cursor: pointer;
  float: right;
`

function InfoBar () {
  const [cookie, setCookie, removeCookie] = useCookies(['authorization'])

  const handleLogout = () => {
    removeCookie('authorization')
  }

  return (
    <StyledInfoBar>
      <StyledLinkLogo href="/"><Image src="/logo.svg" width="145" height="63" /></StyledLinkLogo>
      <StyledLogout onClick={handleLogout}>Desconectar</StyledLogout>
    </StyledInfoBar>
  )
}

export default InfoBar