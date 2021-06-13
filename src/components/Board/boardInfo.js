import { useContext, useEffect } from 'react'
import { useCookies } from 'react-cookie'
import dayjs from 'dayjs'

import H1 from '../typography/h1'
import Subtitle from '../typography/subtitle'
import BoardList from './boardList'

import APIClient from '../../utils/APIClient'

import { store, CONSTANTS } from '../../contexts/board'

function BoardInfo ({ board }) {
  const { state, dispatch } = useContext(store)
  const [cookie, setCookie] = useCookies(['authorization'])

  useEffect(() => {
    dispatch({
      type: CONSTANTS.SET_BOARD,
      payload: board
    })
  }, [board])

  useEffect(() => {
    APIClient(cookie.authorization)
  }, [])

  return (
    <>
      <H1>{state.name}</H1>
      <Subtitle>Atualizado em {dayjs(state.updatedDate).format('LLL')}</Subtitle>
      <BoardList />
    </>
  )
}

export default BoardInfo