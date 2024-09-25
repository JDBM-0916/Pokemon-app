import { Pokemon } from '@/interfaces/pokemones/pokemon';
import Image from 'next/image';

const PokemonForms = ({ sprites, name }: { sprites: Pokemon["sprites"], name: string }) => (
  <div className="sprites">
    <h3>Formas</h3>
    <div className="sprites-container">
      <div className="normal-sprites">
        <p>Normal</p>
        <Image
          src={sprites.front_default || '/imgs/pokemon-default-image.png'} // Imagen por defecto si es null
          alt={`sprite normal frente ${name}`}
          width={100}
          height={100}
        />
        <Image
          src={sprites.back_default || '/imgs/pokemon-default-image.png'} // Imagen por defecto si es null
          alt={`sprite normal espalda ${name}`}
          width={100}
          height={100}
        />
      </div>
      <div className="shiny-sprites">
        <p>Shiny</p>
        <Image
          src={sprites.front_shiny || '/imgs/pokemon-default-image.png'} // Imagen por defecto si es null
          alt={`sprite shiny frente ${name}`}
          width={100}
          height={100}
        />
        <Image
          src={sprites.back_shiny || '/imgs/pokemon-default-image.png'} // Imagen por defecto si es null
          alt={`sprite shiny espalda ${name}`}
          width={100}
          height={100}
        />
      </div>
    </div>
  </div>
);

export default PokemonForms;
