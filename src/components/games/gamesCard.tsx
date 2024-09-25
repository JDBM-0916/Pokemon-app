import React, { useState } from 'react';
import { TfiGame } from 'react-icons/tfi';
import { Games} from '@/interfaces/games/games';
import { getGamesById } from '@/services/games/get-games-by-id';
import { GamesSimples } from '@/interfaces/games/games-simple';

interface Props {
  games: GamesSimples;
}

export const GamesCard = ({ games }: Props) => {
  const { id, name } = games;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [gamesDetails, setGamesDetails] = useState<Games | null>(null);

  const handleMoreInfo = async () => {
    try {
      const data = await getGamesById(id);
      setGamesDetails(data);
      setIsModalOpen(true);
    } catch (error) {
      console.error('Error fetching Games details:', error);
    }
  };

  return (
    <>
      <div className="card">
        <div className="card-banner">
          <TfiGame size={70} />
        </div>
        <div className="card-content">
          <p><b>Juegos Pokemon</b></p>
          <h1>{name}</h1>
        </div>
        <div className="button-wrapper">
          <button className="btn fill" onClick={handleMoreInfo}>Más información</button>
        </div>
      </div>

      {isModalOpen && gamesDetails && (
        <div className="modal">
          <div className="modal-content">

            <h2>{gamesDetails.name}</h2>
            <button className="close-btn" onClick={() => setIsModalOpen(false)}>×</button>

            <h3>Región principal:</h3>
            <p>{gamesDetails.main_region.name}</p>

            <h3>Nombre en diferentes idiomas:</h3>
            <ul>
              {gamesDetails.names.map((nameObj, index) => (
                <li key={index}>{nameObj.language.name}: {nameObj.name}</li>
              ))}
            </ul>


            <h3>Tipos:</h3>
            <ul>
              {gamesDetails.types.map((type, index) => (
                <li key={index}>{type.name}</li>
              ))}
            </ul>

            <h3>Especies de Pokémones agregadas:</h3>
            <ul>
              {gamesDetails.pokemon_species.slice(0, 10).map((species, index) => (
                <li key={index}>{species.name}</li>
              ))}
            </ul>
            {gamesDetails.pokemon_species.length > 10 && <p>... y {gamesDetails.pokemon_species.length - 10} más</p>}

            <h3>Movimientos Agregados:</h3>
            <ul>
              {gamesDetails.moves.slice(0, 10).map((move, index) => (
                <li key={index}>{move.name}</li>
              ))}
            </ul>
            {gamesDetails.moves.length > 10 && <p>... y {gamesDetails.moves.length - 10} más</p>}

            <h3>Grupos de versiones:</h3>
            <ul>
              {gamesDetails.version_groups.map((group, index) => (
                <li key={index}>{group.name}</li>
              ))}
            </ul>

            <div className="btn fill" onClick={() => setIsModalOpen(false)}>Cerrar</div>
          </div>
        </div>
      )}
    </>
  );
};
