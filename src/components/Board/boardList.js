import { useContext, useEffect } from 'react'
import styled from 'styled-components'

import BoardColumn from '../Cards/boardColumn'

import { store } from '../../contexts/board'

const StyledBoardList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 60px;
`

function BoardList () {
  const { state } = useContext(store)

  return (
    <StyledBoardList>
      {
        state.data.map(({ name, _id, cards }) => 
          <BoardColumn key={`board-column-${_id}`} title={name} id={_id} cards={cards} />
        )
      }
    </StyledBoardList>
  )
}

export default BoardList