import { Pokemon } from '@/interfaces/pokemones/pokemon';

const PokemonMoves = ({ moves, name }: { moves: Pokemon["moves"], name: string }) => (
  <div className="moves">
    <h2>Movimientos - {name}</h2>
    <div className="moves-list">
      {moves.map((move) => (
        <span key={move.move.name}>{move.move.name}</span>
      ))}
    </div>
  </div>
);

export default PokemonMoves;
