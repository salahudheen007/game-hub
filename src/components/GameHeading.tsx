import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../App'

interface Props{
    gameQuery:GameQuery
}

const GameHeading = ({ gameQuery }:Props) => {
    const headiing = `${gameQuery.platform?.name || ""} ${
      gameQuery.genre?.name || ""
    } Game`;
  return <Heading marginY={5} fontSize='1.8rem' as="h1">{headiing}</Heading>;
};

export default GameHeading