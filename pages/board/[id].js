import cookie from 'cookie'

import Container from '../../src/components/layout/container'
import InfoBar from '../../src/components/InfoBar'
import BoardInfo from '../../src/components/Board/boardInfo'
import withAuth from '../../src/HOCs/withAuth'

import APIClient from '../../src/utils/APIClient'
import { StateProvider } from '../../src/contexts/board'

function Board ({ board }) {
  return (
    <>
      <InfoBar />
      <Container>
        <StateProvider>
          <BoardInfo board={board} />
        </StateProvider>
      </Container>
    </>
  )
}

export async function getServerSideProps({ params, req }) {
  try {
    const { authorization } = cookie.parse(req.headers?.cookie || '')
    const { data } = await APIClient(authorization).get(`/board?id=${params.id}`)

    return {
      props: {
        board: data
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

export default withAuth(Board)