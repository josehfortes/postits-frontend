import { useState, useEffect } from 'react'
import cookie from 'cookie'

import H1 from '../src/components/typography/h1'
import Container from '../src/components/layout/container'
import InfoBar from '../src/components/InfoBar'

import NewBoard from '../src/components/Dashboard/newBoard'
import BoardList from '../src/components/Dashboard/dashboardList'
import withAuth from '../src/HOCs/withAuth'
import APIClient from '../src/utils/APIClient'

function DashboardPage ({ authorization, boards }) {
  const [localBoards, setLocalBoards] = useState([])

  useEffect(async () => {
    setLocalBoards(boards)
  }, [boards])

  const handleCreateBoard = async (name) => {
    try {
      const { data } = await APIClient(authorization).post(`/board`, {
        name
      })
      setLocalBoards([...boards, { ...data }])
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
        <BoardList boards={localBoards} />
      </Container>
    </>
  )
}

export async function getServerSideProps({ req }) {
  try {
    const { authorization } = cookie.parse(req.headers?.cookie || '')
    const { data } = await APIClient(authorization).get(`/board/all`)

    return {
      props: {
        boards: data
      }
    }
  } catch (err) {
    return {
      redirect: {
        destination: '/login',
      }
    }
  }
}

export default withAuth(DashboardPage)