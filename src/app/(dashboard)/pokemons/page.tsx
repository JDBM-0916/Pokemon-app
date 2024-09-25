import '../styles.css';
import { Metadata } from 'next';
import { PokemonGrid } from '../../../components/pokemones/PokemonGrid';
import { getPokemons } from '@/services/pokemones/get-pokemons';

export const metadata: Metadata = {
  title: 'listado de Pokemones',
  description: 'listado de todos los pokemones diponibles',
};


export default async function HomePage() {
  const pokemones = await getPokemons(1025);

  return (
    <div>
      <h1 className="main-title">
        !! Bienvenido a Pokemon app la pagina web que te brinda a detalle la
        informacion de tus pokemones favoritos ¡¡
      </h1>
      <PokemonGrid Pokemones={pokemones} />
    </div>
  );
}
