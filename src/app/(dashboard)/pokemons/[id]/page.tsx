import { generatePokemonMetadata, getPokemonById } from '@/services/pokemones/get-pokemon-by-id';
import './stylesdetalles.css';
import PokemonImage from '@/components/pokemones/pokemonImage';
import PokemonMoves from '@/components/pokemones/pokemonMoves';
import PokemonStatistics from '@/components/pokemones/pokemonStatistics';
import PokemonType from '@/components/pokemones/pokemonType';
import PokemonAbilities from '@/components/pokemones/pokemonAbilities';
import PokemonWeight from '@/components/pokemones/pokemonWeight';
import PokemonForms from '@/components/pokemones/pokemonForms';
import { notFound } from 'next/navigation';
import { ArgumentIDByUrl } from '@/interfaces/argument-by-url-interface';
import { Metadata } from 'next';
import BackButton from '@/components/buttons/BackButton';

export async function generateMetadata({ params }: ArgumentIDByUrl): Promise<Metadata> {
  return generatePokemonMetadata(params.id);
}

export default async function PokemonPage({ params }: ArgumentIDByUrl) {

  const datosPokemon = await getPokemonById(params.id);
  if (!datosPokemon) {
    return notFound();
  }

  const imageUrl = datosPokemon.sprites.other?.dream_world.front_default || '/imgs/pokemon-default-image.png';

  const sprites = datosPokemon.sprites || {
    front_default: '/imgs/pokemon-default-image.png',
    back_default: '/imgs/pokemon-default-image.png',
    front_shiny: '/imgs/pokemon-default-image.png',
    back_shiny: '/imgs/pokemon-default-image.png',
  };


  return (

    <div className="pokemon-card">
      <BackButton />
      <PokemonImage src={imageUrl} name={datosPokemon.name} />
      <div className="pokemon-info">
        <PokemonMoves moves={datosPokemon.moves} name={datosPokemon.name} />
        <PokemonStatistics stats={datosPokemon.stats} />
        <PokemonType types={datosPokemon.types} />
        <PokemonAbilities abilities={datosPokemon.abilities} />
        <PokemonWeight weight={datosPokemon.weight} />
        <PokemonForms sprites={sprites} name={datosPokemon.name} />
      </div>
    </div>
  );
}


