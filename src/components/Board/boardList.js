import styled from 'styled-components'

import BoardColumn from '../Cards/boardColumn'

const StyledBoardList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 60px;
`

function BoardList () {
  return (
    <StyledBoardList>
      <BoardColumn title="A fazer" />
      <BoardColumn title="Em desenvolvimento" />
      <BoardColumn title="Feito" />
    </StyledBoardList>
  )
}

export default BoardList