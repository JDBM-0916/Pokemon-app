import { getEncounters } from '@/services/encounters/get-encounters';
import '../styles.css';
import { Metadata } from 'next';
import { EncountersGrid } from '@/components/encounters/EncounterGrid';

export const metadata: Metadata = {
  title: 'Concursos',
  description: 'listado de todos los Consursos',
};


export default async function EncountersPage() {

  const cant_contest = 100;
  const encounters = await getEncounters(cant_contest);
  return (
    <div>
      <h1 className="main-title">
        a continuacion se pueden ver los Métodos mediante los cuales el jugador puede encontrarse con Pokémon en estado salvaje
      </h1>
      <EncountersGrid Encounters={encounters}/>
    </div>

  );
}
