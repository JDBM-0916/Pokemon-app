import { POKEAPI_BASE_URL, REVALIDATE_TIME } from '@/config/api';
import { ItemsResponse } from '@/interfaces/items/items-response';
import { ItemsSimples } from '@/interfaces/items/items-simple';

export const getItems = async (
  limit = 20,
  offset = 0
): Promise<ItemsSimples[]> => {
  try {
    const response = await fetch(
      `${POKEAPI_BASE_URL}item?offset=${offset}&limit=${limit}`,
      {
        next: {
          revalidate: REVALIDATE_TIME,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Error al obtener los Items: ${response.statusText}`);
    }
    const data: ItemsResponse = await response.json();
    const items: ItemsSimples[] = data.results.map((game) => ({
      id: game.url.split('/').at(-2) ?? '',
      name: game.name,
    }));
    return items;
  } catch (error) {
    console.error('Error al obtener los Items:', error);
    throw new Error('No se pudieron obtener los Items.');
  }
};
