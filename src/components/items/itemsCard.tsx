'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import { Items } from '@/interfaces/items/items';
import { ItemsSimples } from '@/interfaces/items/items-simple';
import { getItemsById } from '@/services/items/get-items-by-id';

interface Props {
  Items: ItemsSimples;
}

export const ItemsCard = ({ Items }: Props) => {
  const { id, name } = Items;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemsDetails, setItemsDetails] = useState<Items | null>(null);
  const [showAllFlavors, setShowAllFlavors] = useState(false);

  const handleMoreInfo = async () => {
    try {
      const data = await getItemsById(id);
      setItemsDetails(data);
      setIsModalOpen(true);
    } catch (error) {
      console.error('Error fetching Items details:', error);
    }
  };

  const toggleFlavors = () => setShowAllFlavors(!showAllFlavors);

  return (
    <>
      <div className="card">
        <div className="card-banner">
          <Image
            width={50}
            height={50}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${name}.png`}
            alt={name}
          />
        </div>
        <div className="card-content">
          <p><b>Objeto Pokémon</b></p>
          <h1>{name}</h1>
        </div>
        <div className="button-wrapper">
          <button className="btn fill" onClick={handleMoreInfo}>Más información</button>
        </div>
      </div>

      {isModalOpen && itemsDetails && (
        <div className="modal">
          <div className="modal-content">
            <h2>{itemsDetails.name}</h2>
            <button className="close-btn" onClick={() => setIsModalOpen(false)}>×</button>

            <Image
              width={50}
              height={50}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${name}.png`}
              alt={name}
            />

            <h3>Categoría:</h3>
            {itemsDetails?.category?.name && (
              <p>Categoría: {itemsDetails.category.name}</p>
            )}


            <h3>Costo:</h3>
            <p>{itemsDetails.cost}</p>

            <h3>Efectos:</h3>
            {itemsDetails?.effect_entries?.length > 0 && (
              <ul>
                {itemsDetails.effect_entries.map((effect, index) => (
                  <li key={index}>{effect.effect}</li>
                ))}
              </ul>
            )}


            <h3>Descripciones de sabor:</h3>
            {itemsDetails?.flavor_text_entries?.length > 0 && (
              <ul>
                {itemsDetails.flavor_text_entries.slice(0, showAllFlavors ? undefined : 5).map((flavor, index) => (
                  <li key={index}>{flavor.language.name}: {flavor.text}</li>
                ))}
              </ul>
            )}

            {itemsDetails?.flavor_text_entries && itemsDetails.flavor_text_entries.length > 5 && (
              <div className='btn fill' onClick={toggleFlavors}>
                {showAllFlavors ? "Ver menos" : `Ver más (${itemsDetails.flavor_text_entries.length - 5} restantes)`}
              </div>
            )}


            <h3>Atributos:</h3>
            {itemsDetails?.attributes && itemsDetails.attributes.length > 0 && (
              <ul>
                {itemsDetails.attributes.map((attribute, index) => (
                  <li key={index}>{attribute.name}</li>
                ))}
              </ul>
            )}

            <h3>Índices de juego:</h3>
            {itemsDetails?.game_indices && itemsDetails.game_indices.length > 0 && (
              <ul>
                {itemsDetails.game_indices.map((index, i) => (
                  <li key={i}>
                    Índice: {index.game_index}, Generación: {index.generation.name}
                  </li>
                ))}
              </ul>
            )}


            <div className="btn fill" onClick={() => setIsModalOpen(false)}>Cerrar</div>
          </div>
        </div>
      )}
    </>
  );
};
