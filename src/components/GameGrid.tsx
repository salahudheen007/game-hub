import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenre";


interface Props {
  selectGenre:Genre | null
}


const GameGrid = ({ selectGenre }: Props) => {
  const { data, error, isLoading } = useGame(selectGenre);

  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={3}
        padding="20px"
      >
        {isLoading &&
          skeletons.map((skelton) => (
            <GameCardContainer key={skelton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {error && <Text>{error}</Text>}

        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
