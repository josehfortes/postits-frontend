import styled from 'styled-components'
import dayjs from 'dayjs'

import { useRouter } from 'next/router'

const StyledBoardCard = styled.div`
  min-width: 310px;
  min-height: 80px;
  background-color: ${({theme}) => theme.colors.white};
  padding: 10px 15px;
  border-left: 10px solid ${({theme}) => theme.colors.primary};
  border-radius: 5px;
  cursor: pointer;
  margin: 20px 0;

  :hover {
    background-color: ${({theme}) => theme.colors.grey};
  }
`

const H4 = styled.h4`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 0;
`

const P = styled.p`
  font-weight: 300;
  font-size: 12px;
  line-height: 0;
`

function BoardName ({ id, name, updated }) {
  const router = useRouter()
  return (
    <StyledBoardCard onClick={() => router.push(`/board/${id}`)}>
      <H4>{name}</H4>
      <P>Atualizado em {dayjs(updated).format('LLL')}</P>
    </StyledBoardCard>
  )
}

BoardName.defaultProps = {
  id: '',
  name: '',
  updated: '',
}

export default BoardName