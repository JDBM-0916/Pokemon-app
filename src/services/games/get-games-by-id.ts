import { POKEAPI_BASE_URL, REVALIDATE_TIME } from '@/config/api';

export const getGamesById = async (id: string) => {
  try {
    const response = await fetch(`${POKEAPI_BASE_URL}generation/${id}/`, {
      next: {
        revalidate: REVALIDATE_TIME,
      },
    });

    if (!response.ok) {
      throw new Error('Generacion de juego no encontrada');
    }

    const gamesDetails = await response.json();
    return gamesDetails;
  } catch (error) {
    console.error(`Error al obtener la generacion del juego ${id}:`, error);
    throw error;
  }
};
