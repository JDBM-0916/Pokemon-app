import { POKEAPI_BASE_URL, REVALIDATE_TIME } from '@/config/api';
import { EncounterRespuesta } from '@/interfaces/encounters/encounter-response';
import { EncounterSimples } from '@/interfaces/encounters/encounter-simples';

export const getEncounters = async (
  limit = 20,
  offset = 0
): Promise<EncounterSimples[]> => {
  try {
    const response = await fetch(
      `${POKEAPI_BASE_URL}encounter-method?offset=${offset}&limit=${limit}`,
      {
        next: {
          revalidate: REVALIDATE_TIME,
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `Error al obtener los tipos de encuentros: ${response.statusText}`
      );
    }
    const data: EncounterRespuesta = await response.json();
    const encounters: EncounterSimples[] = data.results.map((encounter) => ({
      id: encounter.url.split('/').at(-2) ?? '',
      name: encounter.name,
    }));
    return encounters;
  } catch (error) {
    console.error('Error al obtener los tipos de encuentros:', error);
    throw new Error('No se pudieron obtener los tipos de encuentros.');
  }
};
