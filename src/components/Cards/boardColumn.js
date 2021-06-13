import { useState, useContext } from 'react'
import styled from 'styled-components'
import _ from 'lodash'
import { Droppable, Draggable } from 'react-beautiful-dnd'

import PostIt from '../Cards/postit'
import Input from '../Inputs/input'

import { store, CONSTANTS } from '../../contexts/board'

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

function BoardColumn ({ title, id, cards }) {
  const [text, setText] = useState('')
  const { state, dispatch } = useContext(store)

  const titleDictionary = {
    TODO: 'A Fazer',
    DOING: 'Em Desenvolvimento',
    DONE: 'Feito'
  }

  const handleForm = (e) => {
    e.preventDefault()
    const localData = _.cloneDeep(state.data)

    const { cards } = localData.find(({ _id }) => _id === id)
    cards.push(text)

    dispatch({
      type: CONSTANTS.EDIT_BOARD,
      payload: {
        data: localData
      }
    })

    setText('')
  }

  const handleDelete = (pos) => {
    const localData = _.cloneDeep(state.data)
    const { cards } = localData.find(({ _id }) => _id === id)
    cards.splice(pos, 1)

    dispatch({
      type: CONSTANTS.EDIT_BOARD,
      payload: {
        data: localData
      }
    })
  }

  return (
    <StyledBoardColumn>
      <H4>{titleDictionary[title] || title}</H4>
      <BoardContent>
        <Droppable key={id} droppableId={id}>
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {
                cards.map((text, i) => (
                  <Draggable
                    key={`${id}-${i}`}
                    draggableId={`${id}-${i}`}
                    index={i}
                  >
                    {
                      (provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <PostIt key={`postit-${id}-${i}`} text={text} position={i} onDelete={() => handleDelete(i)} />
                        </div>
                      )
                    }
                  </Draggable>
                ))
              }
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </BoardContent>
      <form onSubmit={handleForm}>
        <Input 
          type="text"
          placeholder="Texto do card"
          required
          fullWidth
          value={text}
          onChange={({ target }) => setText(target.value)}
        />
      </form> 
    </StyledBoardColumn>
  )
}

BoardColumn.defaultProps = {
  title: 'Title test'
}

export default BoardColumn