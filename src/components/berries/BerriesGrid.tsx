'use client';
import React, { useState } from 'react';
import { BerriesSimples } from '@/interfaces/berries/berries-simples';
import { BerriesCard } from './BerriesCard';
import PaginationButtons from '../buttons/PaginationButtons';


interface Berries {
  Berries: BerriesSimples[];
  cant: number;
}

export const BerriesGrid = ({ Berries, cant }: Berries) => {
  const [listadoBerries, setlistadoBerries] = useState(5);

  const handleShowMore = () => {
    setlistadoBerries((prev) => Math.min(prev + 10, cant));
  };

  const handleShowLess = () => {
    setlistadoBerries((prev) => Math.max(prev - 10, 5));
  };

  return (
    <div>
      <div className="container-pokemons">
        {Berries.slice(0, listadoBerries).map((berrie) => (
          <BerriesCard key={berrie.id} berries={berrie} />
        ))}
      </div>
      {listadoBerries <= Berries.length && (
        <PaginationButtons
          showMore={handleShowMore}
          showLess={handleShowLess}
          canShowLess={listadoBerries > 5}
          currentCount={listadoBerries}
          totalCount={cant}
        />
      )}
    </div>
  );
};
