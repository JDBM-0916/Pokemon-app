import { Pokemon } from '@/interfaces/pokemones/pokemon';

const PokemonType = ({ types }: { types: Pokemon["types"] }) => (
  <div className="types">
    <h3>Tipo</h3>
    <div className="types-list">
      {types.map((type) => (
        <span key={type.slot}>{type.type.name}</span>
      ))}
    </div>
  </div>
);

export default PokemonType;
