import Image from 'next/image';

const PokemonImage = ({ src, name }: { src: string | null | undefined; name: string }) => {
  const imgSrc = src || '/imgs/pokemon-default-image.png';

  return (
    <Image
      className="pokemon-image"
      src={imgSrc}
      alt={`Imagen del Pokemon ${name}`}
      width={100}
      height={100}
    />
  );
};

export default PokemonImage;
