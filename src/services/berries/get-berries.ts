import { BerriesRespuesta } from '@/interfaces/berries/berriesRespuesta';
import { BerriesSimples } from '@/interfaces/berries/berries-simples';
import { POKEAPI_BASE_URL, REVALIDATE_TIME } from '@/config/api';



export const getBerries = async (
  limit = 20,
  offset = 0
): Promise<BerriesSimples[]> => {
  try {
    const response = await fetch(`${POKEAPI_BASE_URL}berry?offset=${offset}&limit=${limit}`,{
        next: {
          revalidate: REVALIDATE_TIME,
        },
      });

    if (!response.ok) {
      throw new Error(`Error al obtener las berries: ${response.statusText}`);
    }
    const data: BerriesRespuesta = await response.json();
    const berries: BerriesSimples[] = data.results.map((berry) => ({
      id: berry.url.split('/').at(-2) ?? '',
      name: berry.name,
    }));
    return berries;

  } catch (error) {

    console.error('Error al obtener las berries:', error);
    throw new Error('No se pudieron obtener las berries.');

  }
};
