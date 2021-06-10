import styled from 'styled-components'

import BoardName from '../Cards/boardName'

const StyledBoardList = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  margin-top: 80px;
`

function BoardList ({ boards }) {
  return (
    <StyledBoardList>
      {
        boards.map((board) => <BoardName />)
      }
    </StyledBoardList>
  )
}

BoardList.defaultProps = {
  boards: []
}

export default BoardList