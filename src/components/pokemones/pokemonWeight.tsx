const PokemonWeight = ({ weight }: { weight: number }) => (
  <div className="weight">
    <h3>Peso</h3>
    <div className="types-list">
      <span>{weight / 10} kg</span>
    </div>
  </div>
);

export default PokemonWeight;
