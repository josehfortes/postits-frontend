import { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { DragDropContext } from 'react-beautiful-dnd'
import _ from 'lodash'

import BoardColumn from '../Cards/boardColumn'

import { store, CONSTANTS } from '../../contexts/board'

const StyledBoardList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 60px;
`

function BoardList () {
  const { state, dispatch } = useContext(store)

  const onDragEnd = ({ source, destination }) => {
    if (source && destination) {
      const localData = _.cloneDeep(state.data)
      const sourceCards = localData.find(({ _id }) => _id === source.droppableId).cards
      const destinationCards = localData.find(({ _id }) => _id === destination.droppableId).cards

      const sourceCard = _.cloneDeep(sourceCards[source.index])
      sourceCards.splice(source.index, 1)
      destinationCards.splice(destination.index, 0, sourceCard)
      
      dispatch({
        type: CONSTANTS.EDIT_BOARD,
        payload: {
          data: localData
        }
      })
    }
  }

  return (
    <StyledBoardList>
      <DragDropContext onDragEnd={onDragEnd}>
        {
          state.data.map(({ name, _id, cards }) => 
            <BoardColumn key={`board-column-${_id}`} title={name} id={_id} cards={cards} />
          )
        }
      </DragDropContext>
    </StyledBoardList>
  )
}

export default BoardList