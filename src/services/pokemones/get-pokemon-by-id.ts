import { POKEAPI_BASE_URL } from '@/config/api';
import { Pokemon } from '@/interfaces/pokemones/pokemon';

export const getPokemonById = async (id: string): Promise<Pokemon | null> => {
  try {

      const response = await fetch(`${POKEAPI_BASE_URL}pokemon/${id}`, {
        next: { revalidate: 60 * 60 * 30 * 6 },
      });

      if (!response.ok) {
        throw new Error(`Error al obtener el Pokémon con id ${id}`);
      }

      const dataPokemon = await response.json();
      return dataPokemon;


  } catch (error) {

      console.error('Error al obtener la data del Pokemon:', error);
      return null;

  }
};


export const generatePokemonMetadata = async (id: string) => {
  try {
    const dataPokemon = await getPokemonById(id);
    return {
      title: `Pokemon - ${dataPokemon?.name}`,
      description: `Información detallada de${dataPokemon?.name}`,
    };
  } catch (error) {
    console.error(
      `Error al generar metadata del pokemon con ${id}:`,
      error
    );
    return {
      title: 'pokemon no encontrado',
      description: 'El Pokemon solicitado no existe o no está disponible',
    };
  }
};
