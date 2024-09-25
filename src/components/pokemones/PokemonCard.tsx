import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { pokemonesSimples } from '@/interfaces/pokemones/pokemon-simple';
import { getPokemonType} from '@/services/pokemones/get-type-pokemon';
import Link from 'next/link';

interface Props {
  pokemon: pokemonesSimples;
}

export const PokemonCard = ({ pokemon }: Props) => {
  const { id, nombre } = pokemon;
  const [tipo, setTipo] = useState<string[]>([]);

  useEffect(() => {
    async function typePokemon() {
      const tipos = await getPokemonType(id);
      setTipo(tipos);
    }
    typePokemon();
  }, [id]);

  return (
    <div className="card">
      <div className="card-banner">
        <Image
          width={80}
          height={80}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          alt={nombre}
        />
      </div>
      <div className="card-content">
        <h1>{nombre}</h1>
        <p>
          Tipo: <b>{tipo.length > 0 ? tipo.join(' / ') : 'Cargando...'}</b>
        </p>
      </div>

      <div className="button-wrapper">
        <Link href={`pokemons/${id}`}>
          {' '}
          <button className="btn fill">Ver Detalles</button>
        </Link>
      </div>
    </div>
  );
};
