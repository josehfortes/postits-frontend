import H1 from '../src/components/typography/h1'
import Container from '../src/components/layout/container'
import InfoBar from '../src/components/InfoBar'
import Subtitle from '../src/components/typography/subtitle'

import BoardList from '../src/components/Board/boardList'

function Board () {
  return (
    <>
      <InfoBar />
      <Container>
        <H1>Nome do quadro</H1>
        <Subtitle>Atualizado em 01 de Janeiro de 3000</Subtitle>
        <BoardList />
      </Container>
    </>
  )
}

export default Board