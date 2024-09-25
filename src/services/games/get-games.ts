import { POKEAPI_BASE_URL, REVALIDATE_TIME } from '@/config/api';
import { GamesResponse } from '@/interfaces/games/games-response';
import { GamesSimples } from '@/interfaces/games/games-simple';


export const getGames = async (
  limit = 20,
  offset = 0
): Promise<GamesSimples[]> => {
  try {
    const response = await fetch(
      `${POKEAPI_BASE_URL}generation?offset=${offset}&limit=${limit}`,
      {
        next: {
          revalidate: REVALIDATE_TIME,
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `Error al obtener los Juegos: ${response.statusText}`
      );
    }
    const data: GamesResponse = await response.json();
    const games: GamesSimples[] = data.results.map((game) => ({
      id: game.url.split('/').at(-2) ?? '',
      name: game.name,
    }));
    return games;
  } catch (error) {
    console.error('Error al obtener losJuegos:', error);
    throw new Error('No se pudieron obtener los Juegos.');
  }
};
