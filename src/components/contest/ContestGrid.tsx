import { ContestSimples } from '@/interfaces/contest/contest-simple';
import { ContestCard } from './ContestCard';

interface Contests {
  Contests: ContestSimples[];
}

export const ContestGrid = ({ Contests }:Contests) => {
  return (
    <div>
      <div className="container-pokemons">
        {Contests.map((contests) => (
          <ContestCard key={contests.id} contest={contests} />
        ))}
      </div>
    </div>
  );
};
