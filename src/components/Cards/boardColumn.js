import styled from 'styled-components'

import PostIt from '../Cards/postit'
import Button from '../Buttons/button'

const StyledBoardColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 230px;
  min-height: 300px;
  background-color: ${({theme}) => theme.colors.white};
  border-top: 10px solid ${({theme}) => theme.colors.primary};
  border-radius: 5px;
  padding: 0 20px;
`

const H4 = styled.h4`
  font-weight: 500;
  font-size: 20px;
`

const BoardContent = styled.div`
  flex: 1;
`

function BoardColumn ({ title }) {
  return (
    <StyledBoardColumn>
      <H4>{title}</H4>
      <BoardContent>
        <PostIt />
        <PostIt />
      </BoardContent>
      <Button fullWidth variant="outlined">Adicionar Card</Button>
    </StyledBoardColumn>
  )
}

BoardColumn.defaultProps = {
  title: 'Title test'
}

export default BoardColumn