interface BerryAttributesProps {
  firmness: string;
  growthTime: number;
  maxHarvest: number;
  size: number;
  smoothness: number;
  soilDryness: number;
}

const BerryAttributes = ({
  firmness,
  growthTime,
  maxHarvest,
  size,
  smoothness,
  soilDryness,
}: BerryAttributesProps) => (
  <div className="attributes">
    <h3>Atributos</h3>
    <div className="attributes-list">
      <span>Firmeza: {firmness}</span>
      <span>Tiempo de crecimiento: {growthTime} horas</span>
      <span>Cosecha máxima: {maxHarvest}</span>
      <span>Tamaño: {size} mm</span>
      <span>Suavidad: {smoothness}</span>
      <span>Sequedad del suelo: {soilDryness}</span>
    </div>
  </div>
);

export default BerryAttributes;
