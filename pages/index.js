import H1 from '../src/components/typography/h1'
import Container from '../src/components/layout/container'
import InfoBar from '../src/components/InfoBar'

import NewBoard from '../src/components/Dashboard/newBoard'
import BoardList from '../src/components/Dashboard/dashboardList'
import withAuth from '../src/HOCs/withAuth'

function DashboardPage () {
  return (
    <>
      <InfoBar />
      <Container>
        <H1>Quadros</H1>
        <NewBoard />
        <BoardList />
      </Container>
    </>
  )
}

export default withAuth(DashboardPage)