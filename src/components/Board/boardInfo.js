import { useContext, useEffect } from 'react'
import dayjs from 'dayjs'

import H1 from '../typography/h1'
import Subtitle from '../typography/subtitle'
import BoardList from './boardList'

import { store, CONSTANTS } from '../../contexts/board'

function BoardInfo ({ board }) {
  const { state, dispatch } = useContext(store)

  useEffect(() => {
    dispatch({
      type: CONSTANTS.SET_BOARD,
      payload: board
    })
  }, [board])

  return (
    <>
      <H1>{state.name}</H1>
      <Subtitle>Atualizado em {dayjs(state.updatedDate).format('LLL')}</Subtitle>
      <BoardList />
    </>
  )
}

export default BoardInfo