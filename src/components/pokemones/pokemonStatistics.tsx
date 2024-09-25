import { Pokemon } from '@/interfaces/pokemones/pokemon';

const PokemonStatistics = ({ stats }: { stats: Pokemon["stats"] }) => (
  <div className="sprites">
    <h3>Estadísticas</h3>
    <div className="moves-list">
      {stats.map((estadisticas) => (
        <span key={`${estadisticas.stat.name}-${estadisticas.base_stat}`}>
          {estadisticas.stat.name} {estadisticas.base_stat}
        </span>
      ))}
    </div>
  </div>
);

export default PokemonStatistics;
