import React, { useEffect, useState } from "react";
import apiClients from "../services/api-clients";
import { Text } from "@chakra-ui/react";

interface Games {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  results: Games[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Games[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClients.get<FetchGamesResponse>("/games").then((res) => {
      setGames(res.data.results);
      console.log(res.data)
    }).catch(err=>{
        setError(err.message)
    });
  },[]);
  return (
    <>
    {error && <Text>{error}</Text>}
    <ul>
        {games.map(game=><li key={game.id} >{game.name}</li>)}
    </ul>
    </>
  )
};
useState;

export default GameGrid;
