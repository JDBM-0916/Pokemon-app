'use client'

import { ItemsSimples } from '@/interfaces/items/items-simple';
import PaginationButtons from '../buttons/PaginationButtons';
import { useState } from 'react';
import { ItemsCard } from './itemsCard';


interface props {
  Items: ItemsSimples[];
}

export const ItemsGrid = ({ Items }: props) => {

  const [listadoItems, setlistadoItems] = useState(5);

  const handleShowMore = () => {
    setlistadoItems((prev) => Math.min(prev + 10, Items.length));
  };

  const handleShowLess = () => {
    setlistadoItems((prev) => Math.max(prev - 10, 5));
  };
  return (
    <div>
      <div className="container-pokemons">
        {Items.slice(0, listadoItems).map((game) => (
          <ItemsCard key={game.id} Items={game} />
        ))}
      </div>
      {
        listadoItems <= Items.length && (
          <PaginationButtons
            showMore={handleShowMore}
            showLess={handleShowLess}
            canShowLess={listadoItems > 5}
            currentCount={listadoItems}
            totalCount={Items.length}
          />
        )
      }
    </div>
  );
};
