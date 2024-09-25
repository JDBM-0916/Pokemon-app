import '../styles.css';
import { Metadata } from 'next';
import { ContestGrid } from '../../../components/contest/ContestGrid';
import { getContest } from '@/services/contest/get-contest';

export const metadata: Metadata = {
  title: 'Concursos',
  description: 'listado de todos los Consursos',
};


export default async function contestPage() {

  const cant_contest = 5;
  const contests = await getContest(cant_contest);
  return (
    <div>
      <h1 className="main-title">
        "¡Concursos en donde se  Demuestra la Grandeza Pokémon y se Conquista la Gloria!"
      </h1>
      <ContestGrid Contests={contests}/>
    </div>

  );
}
