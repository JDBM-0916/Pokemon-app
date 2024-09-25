// PokemonGrid.tsx
'use client';
import React, { useState } from 'react';
import { PokemonCard } from './PokemonCard';
import { pokemonesSimples } from '@/interfaces/pokemones/pokemon-simple';
import PaginationButtons from '../buttons/PaginationButtons';

interface Pokemones {
  Pokemones: pokemonesSimples[];
}

export const PokemonGrid = ({ Pokemones }: Pokemones) => {
  const [listadoPokemones, setlistadoPokemones] = useState(5);

  const handleShowMore = () => {
    setlistadoPokemones((prev) => Math.min(prev + 10, Pokemones.length));
  };

  const handleShowLess = () => {
    setlistadoPokemones((prev) => Math.max(prev - 10, 5));
  };

  return (
    <div>
      <div className="container-pokemons">
        {Pokemones.slice(0, listadoPokemones).map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
      {listadoPokemones < Pokemones.length && (
        <PaginationButtons
          showMore={handleShowMore}
          showLess={handleShowLess}
          canShowLess={listadoPokemones > 5}
          currentCount={listadoPokemones}
          totalCount={Pokemones.length}
        />
      )}
    </div>
  );
};
