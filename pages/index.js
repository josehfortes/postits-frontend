import { useState, useEffect } from 'react'

import H1 from '../src/components/typography/h1'
import Container from '../src/components/layout/container'
import InfoBar from '../src/components/InfoBar'

import NewBoard from '../src/components/Dashboard/newBoard'
import BoardList from '../src/components/Dashboard/dashboardList'
import withAuth from '../src/HOCs/withAuth'
import APIClient from '../src/utils/APIClient'

function DashboardPage ({ authorization }) {
  const [boards, setBoards] = useState([])

  useEffect(async () => {
    try {
      const { data } = await APIClient(authorization).get(`/board/all`)
      setBoards(data)
    } catch (err) {
      console.error(err)
    }
  }, [])

  const handleCreateBoard = async (name) => {
    try {
      const { data } = await APIClient(authorization).post(`/board`, {
        name
      })
      setBoards([...boards, { ...data }])
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <>
      <InfoBar />
      <Container>
        <H1>Quadros</H1>
        <NewBoard onCreate={handleCreateBoard} />
        <BoardList boards={boards} />
      </Container>
    </>
  )
}

export default withAuth(DashboardPage)