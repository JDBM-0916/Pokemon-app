'use client'

import { GamesSimples } from '@/interfaces/games/games-simple';
import PaginationButtons from '../buttons/PaginationButtons';
import { useState } from 'react';
import { GamesCard } from './gamesCard';

interface props {
  Games: GamesSimples[];
}

export const GamesGrid = ({ Games }: props) => {

  const [listadoGames, setlistadoGames] = useState(5);

  const handleShowMore = () => {
    setlistadoGames((prev) => Math.min(prev + 10, Games.length));
  };

  const handleShowLess = () => {
    setlistadoGames((prev) => Math.max(prev - 10, 5));
  };
  return (
    <div>
      <div className="container-pokemons">
        {Games.slice(0, listadoGames).map((game) => (
          <GamesCard key={game.id} games={game} />
        ))}
      </div>
      {
        listadoGames <= Games.length && (
          <PaginationButtons
            showMore={handleShowMore}
            showLess={handleShowLess}
            canShowLess={listadoGames > 5}
            currentCount={listadoGames}
            totalCount={Games.length}
          />
        )
      }
    </div>
  );
};
