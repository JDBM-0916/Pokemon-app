interface BerryNaturalGiftProps {
  power: number;
  type: string;
}

const BerryNaturalGift = ({ power, type }: BerryNaturalGiftProps) => (
  <div className="natural-gift">
    <h3>Regalo natural</h3>
    <div className="natural-gift-info">
      <span>Poder: {power}</span>
      <span>Tipo: {type}</span>
    </div>
  </div>
);

export default BerryNaturalGift;
