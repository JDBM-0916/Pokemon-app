'use client'
import React, { useState } from 'react';
import { ContestSimples } from '@/interfaces/contest/contest-simple';
import { GiBattleGear } from 'react-icons/gi';
import { getContestTypeById } from '@/services/contest/get-contests-by-id';
import { Contest } from '@/interfaces/contest/contest';


interface Props {
  contest: ContestSimples;
}
export const ContestCard = ({ contest }: Props) => {
  const { id, name } = contest;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contestDetails, setContestDetails] = useState<Contest | null>(null);

  const handleMoreInfo = async () => {
    try {
      const details = await getContestTypeById(id);
      setContestDetails(details);
      setIsModalOpen(true);
    } catch (error) {
      console.error('Error fetching contest details:', error);
    }
  };

  return (
    <>
      <div className="card">
        <div className="card-banner">
          <GiBattleGear size={70} />
        </div>
        <div className="card-content">
          <p><b>concurso</b></p>
          <h1>{name}</h1>
        </div>
        <div className="button-wrapper">
          <button className="btn fill" onClick={handleMoreInfo}>Más información</button>
        </div>
      </div>

      {isModalOpen && contestDetails && (
        <div className="modal">
          <div className="modal-content">
            <h2>{contestDetails.name}</h2>
            <p>
              <span className="berry-flavor">Sabor De baya permitida: {contestDetails.berry_flavor.name}</span>
            </p>
            <h3>Nombre en diferentes idiomas: </h3>
            <ul>
              {contestDetails.names.map((nameObj, index) => (
                <li key={index}><b>Nombre:</b> {nameObj.name} <br /> <b>Idioma</b> ({nameObj.language.name})</li>
              ))}
            </ul>
            <button onClick={() => setIsModalOpen(false)}>×</button>
            <div className="btn fill" onClick={() => setIsModalOpen(false)}>Cerrar</div>
          </div>
        </div>
      )}
    </>
  );
};
