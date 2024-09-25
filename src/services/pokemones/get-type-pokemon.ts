import { POKEAPI_BASE_URL } from '@/config/api';

const REVALIDATE_TIME = 60 * 60 * 24;
export async function getPokemonType(id: string): Promise<string[]> {

  try {
    const response = await fetch(`${POKEAPI_BASE_URL}pokemon/${id}`, {
      next: {
        revalidate: REVALIDATE_TIME,
      },
    });

    if (!response.ok) {
      throw new Error(`Error al obtener los datos del Pokémon con ID: ${id}`);
    }
    const data = await response.json();

    const types = data.types.map(
      (typeInfo: { type: { name: string } }) => typeInfo.type.name
    );
    return types;
  } catch (error) {
    console.error('Error al obtener los tipos del Pokémon:', error);
    return [];
  }
};
