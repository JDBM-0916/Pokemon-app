import Image from 'next/image';
import Link from 'next/link';
import { BerriesSimples } from '@/interfaces/berries/berries-simples';

interface Props {
  berries: BerriesSimples;
}

export const BerriesCard = ({ berries }: Props) => {

  const { id, name } = berries;

  return (
    <div className="card">
      <div className="card-banner">
        <Image
          width={50}
          height={50}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${name}-berry.png`}
          alt={name}
        />
      </div>
      <div className="card-content">
        <p>Baya</p>
        <h1>{name}</h1>
      </div>
      <div className="button-wrapper">
        <Link href={`berries/${id}`}>
          <button className="btn fill">Ver Detalles</button>
        </Link>
      </div>
    </div>
  );
};
