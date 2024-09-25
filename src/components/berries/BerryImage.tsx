
import Image from 'next/image';

interface BerryImageProps {
  name: string;
}

const BerryImage = ({ name }: BerryImageProps) => (
  <div className="berry-image">
    <Image
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${name}-berry.png`}
      alt={`${name}`}
      width={100}
      height={100}
      quality={75}
    />
  </div>
);

export default BerryImage;
