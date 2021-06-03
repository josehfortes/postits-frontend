import H1 from '../src/components/typography/h1'
import Container from '../src/components/layout/container'
import InfoBar from '../src/components/InfoBar'

import NewBoard from '../src/components/Dashboard/newBoard'

function DashboardPage () {
  return (
    <>
      <InfoBar />
      <Container>
        <H1>Quadros</H1>
        <NewBoard />
      </Container>
    </>
  )
}

export default DashboardPage