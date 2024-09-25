import { Pokemon } from '@/interfaces/pokemones/pokemon';

const PokemonAbilities = ({ abilities }: { abilities: Pokemon["abilities"] }) => (
  <div className="weight">
    <h3>Habilidades</h3>
    <div className="types-list">
      {abilities.map((habilidad) => (
        <span key={habilidad.ability.name}>{habilidad.ability.name}</span>
      ))}
    </div>
  </div>
);

export default PokemonAbilities;
