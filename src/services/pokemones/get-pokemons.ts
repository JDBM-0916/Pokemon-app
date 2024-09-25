import { POKEAPI_BASE_URL, REVALIDATE_TIME } from '@/config/api';
import { pokemonesSimples } from '@/interfaces/pokemones/pokemon-simple';
import { PokemonesRespuesta } from '@/interfaces/pokemones/pokemonesRespuesta';

export const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<pokemonesSimples[]> => {
  try {
    const response = await fetch(
      `${POKEAPI_BASE_URL}pokemon?limit=${limit}&offset=${offset}`,
      {
        next: {
          revalidate: REVALIDATE_TIME,
        },
      }
    );

    if (!response.ok) {
      throw new Error('Error al obtener los pokemones');
    }

    const data: PokemonesRespuesta = await response.json();

    const pokemones = data.results.map((pokemon) => ({
      id: pokemon.url.split('/').at(-2) ?? '',
      nombre: pokemon.name,
    }));

    return pokemones;
  } catch (error) {
    console.error('Error al obtener los pokemones:', error);
    throw new Error('No se pudieron obtener los pokemones.');
  }
};
