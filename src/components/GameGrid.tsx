import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const {data, error, isLoading } = useGame();

  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={10}
        padding="20px"
      >
        {isLoading &&
          skeletons.map((skelton) => (
            <GameCardContainer>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {error && <Text>{error}</Text>}

        {data.map((game) => (
          <GameCardContainer>
            <GameCard key={game.id} game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
