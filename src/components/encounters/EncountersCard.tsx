'use client'
import { EncounterSimples } from '@/interfaces/encounters/encounter-simples';
import { EncounterDetails } from '@/interfaces/encounters/encounters-details';
import { getEncountersCondition } from '@/services/encounters/get-encounter-condition';
import { getEncountersById } from '@/services/encounters/get-encounters-by-id';
import { getValuesEncounter } from '@/services/encounters/get-values-encounter';
import React, { useState } from 'react';
import { TbMapPinSearch} from "react-icons/tb";



interface Props {
  encounter: EncounterSimples;
}


export const EncountersCard = ({ encounter }: Props) => {

  const { id, name } = encounter;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [EncountersDetails, setEncountersDetails] = useState<EncounterDetails | null>(null);


  const handleMoreInfo = async () => {
    try {

      const [valuesConditions, conditions, details] = await Promise.all([
        getValuesEncounter(id),
        getEncountersCondition(id),
        getEncountersById(id),
      ]);

      const combinedDetails = {
        valuesConditions,
        conditions,
        details,
      };
      setEncountersDetails(combinedDetails);
      setIsModalOpen(true);
    } catch (error) {
      console.error('Error fetching Encounters details:', error);
    }
  };
  return (
    <>
      <div className="card">
        <div className="card-banner">
          <TbMapPinSearch size={70} />
        </div>
        <div className="card-content">
          <p><b>Encuentro</b></p>
          <h1>{name}</h1>
        </div>
        <div className="button-wrapper">
          <button className="btn fill" onClick={handleMoreInfo}>Más información</button>
        </div>
      </div>

      {isModalOpen && EncountersDetails && (
        <div className="modal">
          <div className="modal-content">
            <h2>{EncountersDetails.details.name}</h2>

            <h3>Nombre en diferentes idiomas: </h3>
            <ul>
              {EncountersDetails.details.names?.map((nameObj, index) => (
                <li key={index}>
                  <b>Nombre:</b> {nameObj.name} <br />
                  <b>Idioma:</b> ({nameObj.language.name})
                </li>
              ))}
            </ul>

            <h3>Condiciones del encuentro </h3>

            <ul>
              <li>
                <ul>
                  {EncountersDetails.conditions.names?.map((nameObj, index) => (
                    <li key={index}>
                      <b>Nombre:</b> {nameObj.name} - <b>Idioma:</b> ({nameObj.language.name})
                    </li>
                  ))}
                </ul>

              </li>
              <li><b>Valor de la condicion:</b> {EncountersDetails.valuesConditions.name}</li>
            </ul>

            <button onClick={() => setIsModalOpen(false)}>×</button>
            <div className="btn fill" onClick={() => setIsModalOpen(false)}>Cerrar</div>
          </div>
        </div>
      )}

    </>
  );
};
