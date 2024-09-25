'use client'
import { EncounterSimples } from '@/interfaces/encounters/encounter-simples';
import { EncountersCard } from './EncountersCard';
import PaginationButtons from '../buttons/PaginationButtons';
import { useState } from 'react';

interface props {
  Encounters: EncounterSimples[];
}

export const EncountersGrid = ({ Encounters }: props) => {

  const [listadoEncounters, setlistadoEncounters] = useState(5);

  const handleShowMore = () => {
    setlistadoEncounters((prev) => Math.min(prev + 10, Encounters.length));
  };

  const handleShowLess = () => {
    setlistadoEncounters((prev) => Math.max(prev - 10, 5));
  };
  return (
    <div>
      <div className="container-pokemons">
        {Encounters.slice(0, listadoEncounters).map((encounter) => (
          <EncountersCard key={encounter.id} encounter={encounter}  />
        ))}
      </div>
      {
        listadoEncounters <= Encounters.length && (
          <PaginationButtons
            showMore={handleShowMore}
            showLess={handleShowLess}
            canShowLess={listadoEncounters > 5}
            currentCount={listadoEncounters}
            totalCount={Encounters.length}
          />
        )
      }
    </div>
  );
};
